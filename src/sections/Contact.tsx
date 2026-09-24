import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reseta o status após alguns segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-20 bg-slate-950 relative">
      {/* Elemento de background decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Conversar
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tem alguma proposta, projeto em mente ou quer apenas bater um papo sobre tecnologia? Sinta-se à vontade para me mandar uma mensagem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors text-slate-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <a href="mailto:caiosvcarvalho@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                      caiosvcarvalho@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors text-slate-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Localização</p>
                    <p className="text-slate-300">Parnaíba, Piauí</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Seu Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Caio Carvalho"
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Seu Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ola@exemplo.com"
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-700"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Como posso te ajudar?"
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-700 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Mensagem Enviada!
                </>
              ) : status === 'error' ? (
                <>
                  <XCircle className="w-5 h-5" />
                  Erro ao Enviar
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}