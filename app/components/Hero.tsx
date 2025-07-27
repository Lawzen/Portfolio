"use client"

import Image from 'next/image'
import {useEffect, useState} from "react";
import { TypeAnimation } from 'react-type-animation'


export default function Hero() {

    const [isMounted, setIsMounted] = useState(false)
    const logo: string = "/assets/img/logo/logo-img.jpg"


    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 relative"
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="transition-bg absolute inset-0 bg-gradient-to-b from-base-900/50 to-base-900"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Bonjour <span className="animate-wave inline-block">👋</span><br />
                        Je m&#39;appelle <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">David</span><br />
                        Je suis <span className="text-secondary">
              {isMounted && (
                  <TypeAnimation
                      sequence={[
                          'engagé',
                          1500,
                          'créatif',
                          1500,
                          'rigoureux',
                          1500,
                          'Passionné de code',
                          1500
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                  />
              )}
            </span>
                    </h1>
                </div>

                <div className="profile-photo w-64 h-64 md:w-80 md:h-80 transition-transform duration-300 cursor-pointer">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-secondary to-primary p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                                src= {logo}
                                alt="Photo de profil"
                                width={320}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}