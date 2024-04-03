// dbSelect.js
const mysql = require('mysql');

// Função para buscar mensagens no banco de dados
function buscarMensagem(empresa, tenant) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'admleve_whatsapp'
        });

        connection.connect((err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados:', err);
                reject(err);
                return;
            }
            console.log('Conexão bem-sucedida ao banco de dados!');
                        
            const sql = 'SELECT * FROM mensagens WHERE enviado = false AND empresa = ? AND tenant = ?';
            connection.query(sql, [empresa, tenant], (err, result) => { 
                if (err) {
                    console.error('Erro ao buscar mensagens:', err);
                    reject(err);
                    return;
                }
                
                result.forEach((row) => {
                    // Aqui você pode fazer o UPDATE usando os dados de cada linha (row) do SELECT
                    const updateSQL = 'UPDATE mensagens SET enviado = ? WHERE codigo = ?';
                    const coluna1NovoValor = true;
                                    
                    connection.query(updateSQL, [coluna1NovoValor, row.codigo], (error, results) => {
                      if (error) {
                        console.error('Erro ao executar o UPDATE:', error);
                        return;
                      }
                      console.log('UPDATE executado com sucesso para a linha com ID:', row.codigo);
                    });
                  });





                //console.log('Mensagens encontradas:', result);
                
                // Encerrar a conexão
                connection.end();
                
                resolve(result);
            });
        });
    });
}

module.exports = { buscarMensagem };
