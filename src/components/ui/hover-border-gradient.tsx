"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}: React.PropsWithChildren<
    {
        as?: React.ElementType;
        containerClassName?: string;
        className?: string;
        duration?: number;
        clockwise?: boolean;
        href?: string;
        target?: string;
        rel?: string;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>("TOP");
    const gradientRef = useRef<HTMLDivElement>(null);

    const rotateDirection = (currentDirection: Direction): Direction => {
        const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0,0%,100%) 0%, rgba(255,255,255,0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0,0%,100%) 0%, rgba(255,255,255,0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0,0%,100%) 0%, rgba(255,255,255,0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0,0%,100%) 0%, rgba(255,255,255,0) 100%)",
    };

    const highlight =
        "radial-gradient(75% 181% at 50% 50%, rgba(255,220,150,0.8) 0%, rgba(255,255,255,0) 100%)";

    // Animação via CSS transition no style inline — sem depender do motion
    useEffect(() => {
        if (gradientRef.current) {
            gradientRef.current.style.background = hovered
                ? highlight
                : movingMap[direction];
        }
    }, [direction, hovered]);

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex content-center items-center flex-nowrap h-min justify-center overflow-visible p-px w-fit",
                "bg-white/10 transition duration-500 hover:bg-white/5",
                containerClassName
            )}
            {...props}
        >
            {/* Layer 1: inner content */}
            <div className={cn("w-auto z-10 px-7 py-[0.85rem] rounded-[inherit]", className)}>
                {children}
            </div>

            {/* Layer 2: moving gradient — CSS puro, sem motion */}
            <div
                ref={gradientRef}
                style={{
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: movingMap[direction],
                    transition: `background ${duration}s linear`,
                    borderRadius: "inherit",
                    zIndex: 0,
                }}
            />

            {/* Layer 3: mask */}
            <div
                className="absolute z-[1] flex-none inset-[2px] rounded-[inherit]"
                style={{ background: "inherit" }}
            />
        </Tag>
    );
}
