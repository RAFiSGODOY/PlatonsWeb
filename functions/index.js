const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

// Configuração da API Key do SendGrid
sgMail.setApiKey('SUA_SENDGRID_API_KEY');

// Função Firebase para enviar o e-mail
exports.enviarConfirmacaoEvento = functions.https.onCall(async (data, context) => {
  const { nome, email, eventoTitle, dataEvento, cidade, estado, presenca } = data;

  // Lógica para personalizar a mensagem com base na estimativa de presença
  let mensagemPresenca = '';

  if (presenca === 0) {
    mensagemPresenca = `<p>Sentimos muito, parece que você não poderá comparecer ao evento. Esperamos vê-lo em uma próxima oportunidade!</p>`;
  } else if (presenca <= 3) {
    mensagemPresenca = `<p>Você marcou uma estimativa de presença baixa para o evento. Esperamos vê-lo lá, caso a sua situação mude!</p>`;
  } else if (presenca <= 6) {
    mensagemPresenca = `<p>Você tem uma boa chance de comparecer ao evento! Ficamos felizes com a sua participação.</p>`;
  } else {
    mensagemPresenca = `<p>Que incrível! Sua presença no evento está quase garantida. Mal podemos esperar para vê-lo lá com sua moto!</p>`;
  }

  // Compondo o corpo do e-mail
  const msg = {
    to: email, // Email do usuário
    from: 'rafaelgpinguelo@gmail.com', // Seu e-mail do SendGrid
    subject: `Confirmação de Inscrição para o Evento ${eventoTitle}`,
    html: `
      <h1>Confirmação de Inscrição</h1>
      <p>Olá, ${nome}!</p>
      <p>Você se inscreveu com sucesso para o evento <strong>${eventoTitle}</strong>.</p>
      <p>Detalhes do Evento:</p>
      <ul>
        <li>Data: ${dataEvento}</li>
        <li>Cidade: ${cidade}</li>
        <li>Estado: ${estado}</li>
        <li>Presença confirmada: ${presenca} motos</li>
      </ul>
      ${mensagemPresenca}
      <p>Nos vemos lá!</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { message: 'E-mail enviado com sucesso!' };
  } catch (error) {
    console.error(error);
    return { error: 'Erro ao enviar o e-mail.' };
  }
});
