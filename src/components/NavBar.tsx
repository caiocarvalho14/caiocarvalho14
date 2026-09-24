import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Efeito para mudar o fundo da Navbar ao rolar a página
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Contato', href: '#contato' },
    ];
    return (
        <>
            {/* Navbar */}
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 shadow-lg py-4'
                    : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="group flex items-center gap-2 text-2xl  tracking-tighter">
                        <span className="text-slate-100">caiocarvalho14</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8 text-sm font-medium text-slate-300">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-cyan-400 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contato"
                            className="px-5 py-2.5 rounded-full text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all shadow-sm flex items-center gap-2"
                        >
                            Vamos Conversar
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                { }
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                        }`}
                >
                    <ul className="flex flex-col px-6 gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block text-slate-300 hover:text-cyan-400 text-lg font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contato"
                                className="block w-full text-center mt-2 px-5 py-3 rounded-lg font-medium bg-cyan-500 text-slate-950"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Vamos Conversar
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}