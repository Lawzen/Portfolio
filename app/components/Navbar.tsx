"use client"

import React from "react"
import Link from "next/link"
import { Github } from "lucide-react"

const Navbar = () => {
    const navItems = [
        { label: "Accueil", href: "/#accueil" },
        { label: "Technologies", href: "/#technologies" },
        { label: "Projets", href: "/#projets" },
        { label: "Services", href: "/services" },
        { label: "À propos", href: "/#a-propos" },
    ]

    const github: string = "https://github.com/Lawzen"

    return (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="navbar w-full z-50 backdrop-blur-lg bg-gray-900/60 border-b border-gray-700">
                <div className="flex-1">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            dev.lawzen.be
          </span>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className="hover:text-teal-400 transition-colors duration-300 font-medium"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href= {github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
