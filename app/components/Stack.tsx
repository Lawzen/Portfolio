import Image from 'next/image'
import stacksData from '@/data/stacks.json'


export default function Stack() {
    return (
        <section id="technologies" className="py-20 px-4 bg-base-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        Compétences techniques
                    </h2>
                    <p className="text-xl text-gray-400">Un ensemble de technologies maîtrisées, pour concevoir des solutions performantes, modernes et évolutives.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {stacksData.map((tech) => (
                        <div
                            key={tech.name}
                            className="tech-card group p-6 bg-base-100/10 backdrop-blur-sm rounded-xl transition-all hover:bg-base-100"
                        >
                            <div className="h-16 w-16 mx-auto transition-transform group-hover:scale-110">
                                <Image
                                    src={tech.icon}
                                    alt={`logo de ${tech.name}`}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="mt-3 text-center text-sm text-gray-300">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}