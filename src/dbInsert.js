const mysql = require('mysql');

// Função para conectar ao banco de dados e inserir mensagem
function inserirMensagem(mensagem) {
    const connection = mysql.createConnection({
        host: 'jdbc:mysql://admdbinstance.chpvtwrtyeie.us-west-2.rds.amazonaws.com:3306/admwhatsapp?useSSL=false',
        user: 'admdb',
        password: 'f0rmulario',
        database: 'admleve_whatsapp'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            return;
        }
        console.log('Conexão bem-sucedida ao banco de dados!');
                    
        const sql = 'INSERT INTO mensagens (numeros, mensagem,pdf,url_amazon_xml,enviado,empresa,tenant) VALUES (?, ?, ?, ?, ?, ?, ?)';
        connection.query(sql, [mensagem.numeros, mensagem.mensagem,mensagem.pdf, mensagem.xml, mensagem.enviado, mensagem.empresa, mensagem.tenant], (err, result) => {
            if (err) {
                console.error('Erro ao inserir mensagem:', err);
                return;
            }
            console.log('Nova mensagem inserida com sucesso!');
            console.log('ID da nova mensagem:', result.insertId);
                
            // Encerrar a conexão
            connection.end();
        });
    });

    
}

function bytesToBlob(byteArray, contentType) {
    return new Blob([new Uint8Array(byteArray)], { type: contentType });
}

module.exports = { inserirMensagem };