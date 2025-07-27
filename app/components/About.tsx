import {BookText, Code, Gamepad2} from "lucide-react";

export default function About() {
    return (
        <section id="a-propos" className="py-20 px-4 bg-base-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                        À propos de moi
                    </h2>
                    <p className="text-xl text-gray-400">Un parcours façonné par la curiosité, la rigueur et la passion du numérique.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-secondary">Mon parcours</h3>
                        <p className="text-gray-300">
                            L’aventure commence très tôt, avec la création de plugins pour Minecraft. Ma première immersion dans le
                            monde du développement qui m’a ouvert la voie à une exploration plus poussée des technologies web et logicielles.
                        </p>
                        <p className="text-gray-300">
                            Une certification en tant que <strong>technicien en informatique</strong> vient ensuite renforcer mes compétences
                            techniques, notamment en infrastructure, réseaux, maintenance et gestion de parc informatique.
                        </p>
                        <p className="text-gray-300">
                            Le parcours académique se termine avec l’obtention d’un bachelier en <strong>Informatique de Gestion</strong> à la HELHa. Aujourd’hui, les projets se multiplient, mêlant créativité, exigence et passion pour le code.
                        </p>

                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-secondary">Mes centres d&#39;intérêt</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-base-100 backdrop-blur-sm rounded-xl">
                                <Code />
                                <h4 className="font-semibold mb-2">Développement</h4>
                                <p className="text-gray-400">Conception de solutions web et logicielles modernes</p>
                            </div>
                            <div className="p-4 bg-base-100 backdrop-blur-sm rounded-xl">
                                <Gamepad2 />
                                <h4 className="font-semibold mb-2">Gaming</h4>
                                <p className="text-gray-400">Joueur de Minecraft et League of Legends</p>
                            </div>
                            <div className="p-4 bg-base-100 backdrop-blur-sm rounded-xl">
                                <BookText />
                                <h4 className="font-semibold mb-2">Veille technologique</h4>
                                <p className="text-gray-400">Toujours à l’affût des dernières innovations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}