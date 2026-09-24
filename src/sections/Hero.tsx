import logo from '../assets/vite.svg';

import { Code2, ArrowRight, Terminal, Mail } from 'lucide-react';


export default function Hero() {



    return (
        <>

            {/* Hero Section */}
            <main id="home" className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 min-h-screen">

                {/* Left Column: Content */}
                <div className="flex-1 flex flex-col items-start space-y-8 animate-fade-in-up">

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Disponível para novos projetos
                    </div>

                    {/* Headlines */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl  tracking-tight text-slate-100">
                            Transformando ideias em <br className="hidden md:block" />
                            <span className="">
                                soluções digitais.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                            Desenvolvedor de Software focado em construir aplicações web modernas, rápidas e escaláveis utilizando as melhores tecnologias do mercado.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <a
                            href="#projetos"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950  transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]transform hover:-translate-y-1"
                        >
                             Projetos
                        </a>
                        <a
                            href="#contato"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all flex items-center justify-center gap-2"
                        >
                            Entrar em Contato
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    { }
                    {/* Social Links */}
                    <div className="flex items-center gap-5 pt-4">
                        <a href="https://github.com/caiocarvalho14" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
                            <i className="bi bi-github"></i>
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/caiocarvalho14" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors p-2 hover:bg-slate-800 rounded-full">
                            <i className="bi bi-linkedin"></i>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:caiosvcarvalho@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors p-2 hover:bg-slate-800 rounded-full">
                            <Mail size={22} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                { }
                {/* Right Column: Code Terminal Graphic */}
                <div className="flex-1 w-full max-w-lg lg:max-w-xl hidden md:block">
                    <div className="relative rounded-2xl bg-[#0d1117] border border-slate-800 shadow-2xl overflow-hidden transform transition-transform duration-500">
                        {/* Terminal Header */}
                        <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-800">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                            </div>
                            <div className="mx-auto flex items-center gap-2 text-xs text-slate-500 font-mono">
                                <Terminal size={14} />
                                <span>caiocarvalho14.ts</span>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                            <div className="text-slate-400">
                                <span className="text-purple-400">import</span> {'{ '}
                                <span className="text-rose-400">React</span>,
                                <span className="text-rose-400"> TypeScript</span>,
                                <span className="text-rose-400"> Tailwind</span>,
                                <span className="text-rose-400"> Python</span>,
                                <span className="text-rose-400"> Django</span>
                                {' }'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'@skills/core'</span>;
                            </div>
                            <br />
                            <div>
                                <span className="text-purple-400">const</span> <span className="text-blue-400">caioCarvalho</span> = {'{'}
                            </div>
                            <div className="ml-6">
                                <span className="text-slate-300">role:</span> <span className="text-emerald-300">'Full Stack Developer'</span>,
                            </div>
                            <div className="ml-6">
                                <span className="text-slate-300">location:</span> <span className="text-emerald-300">'Brasil'</span>,
                            </div>
                            <div className="ml-6">
                                <span className="text-slate-300">hardWorker:</span> <span className="text-orange-400">true</span>,
                            </div>
                            <div className="ml-6">
                                <span className="text-slate-300">stack:</span> {'['}
                            </div>
                            <div className="ml-12 text-emerald-300">
                                'React', 'TypeScript',
                            </div>
                            <div className="ml-12 text-emerald-300">
                                'Tailwind CSS', 'Python', 'Django'
                            </div>
                            <div className="ml-6">
                                {']'},
                            </div>
                            <div className="ml-6">
                                <span className="text-blue-400">buildAwesomeProjects</span>: <span className="text-purple-400">() =&gt;</span> {'{'}
                            </div>
                            <div className="ml-12">
                                <span className="text-slate-300">return</span> <span className="text-emerald-300">'100% Client Satisfaction'</span>;
                            </div>
                            <div className="ml-6">
                                {'}'}
                            </div>
                            <div>
                                {'};'}
                            </div>
                            <br />
                            <div>
                                <span className="text-purple-400">export default</span> <span className="text-blue-400">caioCarvalho</span>;
                            </div>

                            {/* Blinking cursor */}
                            <div className="mt-4 flex items-center">
                                <span className="text-emerald-500 font-bold">~</span>
                                <span className="ml-2 w-2 h-4 bg-slate-400 animate-pulse"></span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative blur elements behind the terminal */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
                </div>

            </main>

        </>
    )
}