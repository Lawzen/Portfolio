import Image from 'next/image'
import projectsData from '@/data/projects.json'

export default function Projects() {
    return (
        <section id="projets" className="py-20 px-4 bg-base-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        Réalisations
                    </h2>
                    <p className="text-xl text-gray-400">Projets sélectionnés mettant en valeur savoir-faire et innovation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-base-100/10 backdrop-blur-sm rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300"
                        >
                            <div className="w-full h-48 relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-opacity group-hover:opacity-90"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-secondary">{project.title}</h3>
                                <p
                                    className="text-gray-400 mb-4"
                                    dangerouslySetInnerHTML={{ __html: project.description }}
                                />
                                <p className="text-sm text-secondary mb-4">Technologies: {project.technologies}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                                    >
                                        🔗 Voir
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}