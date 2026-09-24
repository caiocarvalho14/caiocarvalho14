// api/bot.js

export default async function handler(req, res) {
  // Bloqueia métodos que não sejam POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Preencha todos os campos.' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Monta a mensagem formatada que chegará no seu Telegram
  const text = `
🚀 *Novo Contato do Portfolio!*
    
👤 *Nome:* ${name}
📧 *Email:* ${email}
    
💬 *Mensagem:* 
${message}
  `;

  try {
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem para o Telegram');
    }

    return res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
  }
}