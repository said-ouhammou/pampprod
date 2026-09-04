"use client";
import "./BackgroundMusic.css";

import {useEffect, useRef, useState} from "react";

const UNLOCK_EVENTS = [
    "pointerdown",
    "keydown",
    "touchstart",
    "scroll",
] as const;

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPaused, setIsPaused] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        let cancelled = false;
        audio.volume = 0.4;

        function removeUnlockListeners() {
            for (const event of UNLOCK_EVENTS) {
                document.removeEventListener(event, unlock);
            }
        }

        function addUnlockListeners() {
            for (const event of UNLOCK_EVENTS) {
                document.addEventListener(event, unlock, {passive: true});
            }
        }

        function unlock() {
            const el = audioRef.current;
            removeUnlockListeners();
            if (!el) return;

            el.muted = false;
            setIsMuted(false);
            setError("");
            void el.play().catch(() => {
                setError("Press play to start the background music.");
            });
        }

        async function startAudio() {
            const el = audio!;

            try {
                el.muted = false;
                await el.play();
                if (!cancelled) setIsMuted(false);
                return;
            } catch (cause) {
                if (cancelled) return;
                if (cause instanceof Error && cause.name === "AbortError")
                    return;
            }

            // The browser blocked audible autoplay. Start muted so the track is
            // already running, then turn the sound on at the first interaction.
            try {
                el.muted = true;
                await el.play();
                if (cancelled) return;
                setIsMuted(true);
                addUnlockListeners();
            } catch (cause) {
                if (cancelled) return;
                if (cause instanceof Error && cause.name === "AbortError")
                    return;

                setError("Press play to start the background music.");
                addUnlockListeners();
            }
        }

        void startAudio();

        return () => {
            cancelled = true;
            removeUnlockListeners();
            audio.pause();
        };
    }, []);

    async function toggleMusic() {
        const audio = audioRef.current;
        if (!audio) return;

        setError("");
        if (isMuted && !audio.paused) {
            audio.muted = false;
            setIsMuted(false);
            return;
        }

        if (!audio.paused) {
            audio.pause();
            return;
        }

        try {
            audio.muted = false;
            setIsMuted(false);
            await audio.play();
        } catch (cause) {
            if (cause instanceof Error && cause.name === "AbortError") {
                return;
            }

            setError("The track could not start. Try again.");
        }
    }

    const isAudible = isPlaying && !isMuted;
    const label = isMuted
        ? "Turn on background music"
        : isPaused
          ? "Play background music"
          : "Pause background music";

    return (
        <div className="pamp-music">
            <audio
                ref={audioRef}
                src="/audio.mp4"
                loop
                autoPlay
                playsInline
                preload="auto"
                onPlay={() => setIsPaused(false)}
                onPlaying={() => setIsPlaying(true)}
                onWaiting={() => setIsPlaying(false)}
                onVolumeChange={() =>
                    setIsMuted(Boolean(audioRef.current?.muted))
                }
                onPause={() => {
                    setIsPaused(true);
                    setIsPlaying(false);
                }}
                onError={() => {
                    const mediaError = audioRef.current?.error;

                    setIsPaused(true);
                    setIsPlaying(false);

                    setError(
                        `The audio file did not load (code ${mediaError?.code ?? "unknown"}). Check /audio.mp4 and its format.`,
                    );
                }}
            />

            <button
                type="button"
                onClick={toggleMusic}
                aria-label={label}
                aria-pressed={isAudible}
                title={label}
                className="pamp-music-toggle"
            >
                <span
                    aria-hidden="true"
                    data-playing={isAudible}
                    className="pamp-music-bars"
                >
                    {[0, 1, 2, 3, 4].map((bar) => (
                        <span
                            key={bar}
                            className="pamp-music-bar"
                            style={{
                                animationDelay: `${bar * -0.17}s`,
                                animationDuration: `${0.62 + bar * 0.11}s`,
                            }}
                        />
                    ))}
                </span>

                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="pamp-music-glyph"
                >
                    {isPaused || isMuted ? (
                        <path d="M8 5v14l11-7L8 5Z" />
                    ) : (
                        <>
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                        </>
                    )}
                </svg>
            </button>

            {error && (
                <p role="status" className="pamp-music-message">
                    {error}
                </p>
            )}
        </div>
    );
}
