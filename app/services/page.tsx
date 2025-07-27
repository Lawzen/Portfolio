"use client"

import React from "react"
import { Code, Smartphone, Server, Database, LayoutTemplate, BarChart, Zap, Shield, Package } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link";

const services = [
    {
        icon: <Code className="w-10 h-10 text-teal-400" />,
        title: "Développement Frontend",
        description: "Création d'interfaces utilisateur modernes et réactives avec les dernières technologies comme React, Next.js, Angular",
        features: ["Applications Single Page (SPA)", "Responsive Design", "Intégration de designs", "Optimisation des performances"]
    },
    {
        icon: <Server className="w-10 h-10 text-teal-400" />,
        title: "Développement Backend",
        description: "Conception et implémentation d'API robustes et de systèmes serveurs performants.",
        features: ["API REST", "Microservices", "Authentification sécurisée", "Intégration de bases de données"]
    },
    {
        icon: <Smartphone className="w-10 h-10 text-teal-400" />,
        title: "Applications Mobiles",
        description: "Développement d'applications natives et cross-platform pour iOS et Android.",
        features: ["Applications natives (Swift, Kotlin)", "React Native", "Flutter", "Optimisation pour mobiles"]
    },
    {
        icon: <Database className="w-10 h-10 text-teal-400" />,
        title: "Bases de Données",
        description: "Conception et optimisation de bases de données relationnelles et NoSQL.",
        features: ["MySQL, PostgreSQL, MongoDB", "Optimisation des requêtes", "Migration de données"]
    },
    {
        icon: <LayoutTemplate className="w-10 h-10 text-teal-400" />,
        title: "Conception UI/UX",
        description: "Design d'interfaces utilisateur intuitives et expériences utilisateur optimisées.",
        features: ["Prototypage Figma", "Tests utilisateurs"]
    },
    {
        icon: <BarChart className="w-10 h-10 text-teal-400" />,
        title: "Solutions Full Stack",
        description: "Applications complètes de bout en bout avec intégration frontend/backend.",
        features: ["Architecture MERN/MEAN", "Intégration continue", "Maintenance évolutive"]
    },
    {
        icon: <Zap className="w-10 h-10 text-teal-400" />,
        title: "Optimisation de Performance",
        description: "Amélioration des temps de chargement et de l'expérience utilisateur.",
        features: ["Optimisation des assets", "Lazy loading", "Mise en cache avancée"]
    },
    {
        icon: <Shield className="w-10 h-10 text-teal-400" />,
        title: "Sécurité Applications",
        description: "Protection contre les vulnérabilités courantes et sécurisation des données.",
        features: [ "Chiffrement des données", "Tests d'intrusion", "Politiques de sécurité"]
    },
    {
        icon: <Package className="w-10 h-10 text-teal-400" />,
        title: "Maintenance & Support",
        description: "Services continus pour assurer la pérennité de vos applications.",
        features: ["Correctifs et mises à jour", "Évolutions fonctionnelles", "Formation utilisateurs"]
    }
]

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <motion.div
        className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
    >
        <div className="mb-4">
            {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-200">{service.title}</h3>
        <p className="text-gray-400 mb-4">{service.description}</p>
        <ul className="space-y-2">
            {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                    <span className="text-teal-400 mr-2">✓</span>
                    <span className="text-gray-400">{feature}</span>
                </li>
            ))}
        </ul>
    </motion.div>
)

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
            <div className="py-20 px-4 text-center bg-gradient-to-b from-gray-900/80 to-gray-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                        Mes Services
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-400">
                        Découvrez l’ensemble de mes compétences et services techniques. Je propose des solutions sur mesure pour répondre à vos besoins spécifiques.
                    </p>

                    <div className="max-w-lg mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-center space-x-4 mb-4">
                            <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></div>
                            <p className="text-gray-300">Disponible pour de nouveaux projets</p>
                        </div>
                        <p className="text-gray-400">
                            Chaque projet est une opportunité de créer quelque chose d’unique et performant. Contactez-moi pour discuter de votre projet.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="py-12 px-4 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </motion.div>
            </div>

            <div className="py-16 px-4 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                            Mon Processus de Travail
                        </h2>
                        <p className="text-xl text-gray-400">Comment je transforme vos idées en réalité</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Consultation",
                                description: "Analyse de vos besoins et définition des objectifs du projet"
                            },
                            {
                                step: "02",
                                title: "Conception",
                                description: "Élaboration de l'architecture technique et des maquettes"
                            },
                            {
                                step: "03",
                                title: "Développement",
                                description: "Implémentation des fonctionnalités avec des sprints réguliers"
                            },
                            {
                                step: "04",
                                title: "Livraison",
                                description: "Déploiement, formation et support continu"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-200">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                        Prêt à concrétiser votre projet ?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="mailto:davidlumu2@gmail.com"
                            target="_blank"
                            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            Me contacter
                        </a>
                        <Link
                            href="/#projets"
                            className="border border-teal-500 text-teal-400 px-8 py-3 rounded-full text-lg font-medium hover:bg-teal-500/10 transition-colors"
                        >
                            Voir mes projets
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}