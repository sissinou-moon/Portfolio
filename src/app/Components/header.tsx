"use client"

import Logo from "@/assets/PortfolioLogo.png"
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
    className?: string;
}

const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Header({ className = "" }: HeaderProps) {
    const [active, setActive] = useState("home");

    useEffect(() => {
        function onScroll() {
            const offsets = sections.map(({ id }) => {
                const el = document.getElementById(id);
                if (!el) return { id, top: Infinity };
                const rect = el.getBoundingClientRect();
                return { id, top: Math.abs(rect.top) };
            });
            const sorted = offsets.sort((a, b) => a.top - b.top);
            setActive(sorted[0].id);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function handleClick(id: string) {
        setActive(id);
    }

    return (
        <header className={`flex justify-center items-center sticky ${className}`}>
            <div className="inline-flex bg-white px-2 md:px-4 py-1.5 items-center justify-around rounded-2xl shadow-xl my-3">
                <Image src={Logo} alt="Logo" width={35} height={35} className="mx-3"/>
                {sections.map(({ id, label }) => (
                    <div
                        key={id}
                        className={
                            (active === id
                                ? "bg-black text-white"
                                : "bg-white text-black") +
                            " px-2 md:px-5 lg:px-5 py-1.5 rounded-lg md:rounded-xl lg:rounded-xl font-medium text-xs mx-1 md:mx-3 cursor-pointer transition-colors duration-200 sm:text-[9px] md:text-sm"
                        }
                    >
                        <a
                            href={`#${id}`}
                            onClick={() => handleClick(id)}
                            className="block w-full h-full"
                        >
                            {label}
                        </a>
                    </div>
                ))}
            </div>
        </header>
    );
}