"use client";
import React from "react";
import {Github} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-base-900/80 backdrop-blur-sm border-base-800">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} Lawzen. Tous droits réservés.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Lawzen"
                            className="text-gray-400 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}