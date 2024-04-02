import { inserirMensagem } from '../../dbInsert'; // Importa a função para inserir mensagens no banco de dados

export default function handler(req, res) {
    if (req.method === 'POST') {
        const mensagem = req.body; // Supondo que a aplicação web envie a mensagem no corpo da solicitação
        const numeros = mensagem.numeros;
        const mensagemTexto = mensagem.mensagem;

        console.log(numeros);
        console.log(mensagemTexto);

        // Insere a mensagem no banco de dados
        inserirMensagem(mensagem);

        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}