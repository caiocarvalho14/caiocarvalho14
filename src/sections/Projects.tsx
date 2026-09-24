import {
  ExternalLink,
  FolderGit2,
  PieChart,
  BookOpenCheck
} from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Toolbox ',
      description: 'Plataforma web (PWA) desenvolvida para centralizar ferramentas internas de operação, substituindo processos manuais por soluções digitais rastreáveis.',
      tech: ['Vite', 'TypeScript', 'PostgreSQL'],
      demoUrl: '#',
      githubUrl: 'https://github.com/caiocarvalho14/caiodev-toolbox',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      iconColor: 'text-cyan-400',
      icon: <PieChart size={48} strokeWidth={1.5} />,
      link:'https://github.com/caiocarvalho14/caiodev-toolbox'
    },
    {
      id: 2,
      title: 'EstágioS',
      description: 'Sistema web para gerenciamento de estudantes, empresas e estágios. Gestão de autenticação e gerenciamento de dados e API própria para uso com dispositivo físico.',
      tech: ['Python', 'Django', 'Server Side Rendering'],
      demoUrl: '#',
      githubUrl: '#',
      gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
      iconColor: 'text-indigo-400',
      icon: <BookOpenCheck size={48} strokeWidth={1.5} />,
      code: false,
    },
    {
      id: 3,
      title: 'EzChamados',
      description: 'Plataforma web de gestão de chamados de TI sendo desenvolvida para por em prática os conhecimentos de APIs REST, autenticação via token JWT e frontend com vite/react.',
      tech: ['Django', 'APIs REST', 'React'],
      demoUrl: '#',
      githubUrl: 'https://github.com/caiocarvalho14/ezchamados',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      iconColor: 'text-emerald-400',
      icon: <FolderGit2 size={48} strokeWidth={1.5} />,
    }
  ];

  return (
    <section id="projetos" className="relative py-24 bg-slate-950 border-t border-slate-800/50 overflow-hidden">

      {/* Background Decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-4">
            Meus Projetos
          </h2>
          <p className="text-slate-400 text-lg">
            Algumas das soluções práticas e aplicações que desenvolvi para resolver problemas reais e aprimorar minhas habilidades.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800  transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Capa Abstrata do Projeto */}
              <div className="relative h-48 w-full overflow-hidden border-b border-slate-800 bg-slate-950">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out`}></div>

                {/* Ícone flutuante no centro da capa */}
                <div className={`absolute inset-0 flex items-center justify-center ${project.iconColor} transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_currentColor]`}>
                  {project.icon}
                </div>

                {/* Overlay escuro na base da imagem para blend com o conteúdo */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-2  transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags de Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de Ação (Demo e Github) */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/80">
                {
                  
                  project.code ?? (<>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                      aria-label={`Ver código fonte do ${project.title}`}
                    >
                      <i className="bi bi-github"></i>
                      <span>Código</span>
                    </a></>)
                }
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de ver mais projetos (opcional) */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/caiocarvalho14"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all font-medium hover:border-slate-600"
          >
            Ver mais no GitHub
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}