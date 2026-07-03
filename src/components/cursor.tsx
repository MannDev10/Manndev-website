import { useEffect } from "react";
import gsap from "gsap";

export default function GsapCursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const follower = document.querySelector(".cursor-follower");

        document.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                duration: 0.1,
                x: e.clientX,
                y: e.clientY,
                ease: "power3.out",
            });
            gsap.to(follower, {
                duration: 0.4,
                x: e.clientX,
                y: e.clientY,
                ease: "power3.out",
            });
        });

        const hoverElements = document.querySelectorAll("a, button, .hover-target");
        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                gsap.to(follower, { scale: 2, opacity: 0.5 });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(follower, { scale: 1, opacity: 1 });
            });
        });
    }, []);

    return (
        <>
            <div
                className="cursor fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999]"
                style={{ transform: "translate(-50%, -50%)" }}
            ></div>
            <div
                className="cursor-follower fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998]"
                style={{ transform: "translate(-50%, -50%)", boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)', mixBlendMode: 'difference' }}
            ></div>
        </>
    );
}
