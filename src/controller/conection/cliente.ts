import net from 'net';

const client = new net.Socket();
var respostaDoServidor = ''; 


client.connect(8080, '192.168.3.3', () => {
  console.log('Conectado ao servidor.');
});

client.on('data', (data: Buffer) => {
  respostaDoServidor = data.toString();
  console.log(`Resposta do servidor: ${respostaDoServidor}`);
});

client.on('close', () => {
  console.log('Conexão com o servidor fechada.');
});

export const enviarMensagem = (mensagem: string) => {
  client.write(mensagem);
  if (respostaDoServidor === null || respostaDoServidor.trim() === '') {
    return 'erro';
  }
  return respostaDoServidor;
};

export const checkConnection = (mensagem: string) => {
  client.write(mensagem);
};
export const userPokemon = (mensagem: string) => {
  const pokemon = mensagem;
  const vida = 50;
  const attack = 19;
  const last = '1';
  const message = `${pokemon},${vida},${attack},${last}`;

    client.write(message);
  if (respostaDoServidor === null || respostaDoServidor.trim() === '') {
    return 'erro';
  }
  return respostaDoServidor;
};
