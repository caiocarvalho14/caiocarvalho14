
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Target,
  BookOpen,
} from 'lucide-react';

export default function About() {
  const stack = [
    { name: 'Python', icon: <Terminal size={14} /> },
    { name: 'React', icon: <Code2 size={14} /> },
    { name: 'TypeScript', icon: <Code2 size={14} /> },
    { name: 'Django', icon: <Cpu size={14} /> },
    { name: 'PostgreSQL', icon: <Database size={14} /> },
    { name: 'PowerBI', icon: <Database size={14} /> },
    { name: 'Tailwind', icon: <Code2 size={14} /> },
  ];

  const education = [
    { text: 'Curso Técnico em Desenvolvimento WEB', icon: <BookOpen size={16} className="text-cyan-400" /> },
    { text: 'Foco em Concursos de TI', icon: <Target size={16} className="text-blue-400" /> },
    { text: 'Inglês - Técnico para Leitura', icon: <BookOpen size={16} className="text-cyan-400" /> },
  ];

  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Elemento de fundo decorativo */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          { }
          <div className="flex-1 w-full space-y-6">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Sobre Mim
            </h2>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              Atuo no desenvolvimento de aplicações web e soluções orientadas a dados, atuando desde a modelagem e integração de bancos até a construção de interfaces e dashboards para análise e apoio à operação.
            </div>
            <ul className="space-y-3 mt-6">
                {education.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <div className="mt-0.5">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
          </div>

          { }
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-1 gap-6">

            {/* Card 1: Stack Principal (Ocupa 2 colunas no mobile, 2 no tablet se precisar, ou fluxo normal) */}
            <div className="sm:col-span-2 bg-slate-950/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)] transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Stack Principal</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {stack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}