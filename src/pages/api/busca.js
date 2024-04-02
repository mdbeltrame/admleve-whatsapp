import { buscarMensagem } from '../../dbSelect';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {

            const { empresa, tenant } = req.query;

            // Busca as mensagens no banco de dados
            const mensagens = await buscarMensagem(empresa, tenant);
            
            res.status(200).json({ success: true, mensagens });
        } catch (error) {
            console.error('Erro ao buscar mensagens:', error);
            res.status(500).json({ error: 'Erro ao buscar mensagens' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
