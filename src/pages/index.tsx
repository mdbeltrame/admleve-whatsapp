
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
            <h1 className={styles.title}>Documentação Api AdmLeve/Admerp Whatsapp</h1>

            <div className={styles.endpointContainer}>
                <h2 className={styles.endpointTitle}>
                    <span className={styles.methodGet}>GET</span> /api/busca
                </h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableHeader}>Parâmetros</th>
                            <th className={styles.tableHeader}>Tipo</th>
                            <th className={styles.tableHeader}>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.tableCell}>empresa</td>
                            <td className={styles.tableCell}>Integer</td>
                            <td className={styles.tableCell}>Código da empresa</td>
                        </tr>
                        <tr>
                            <td className={styles.tableCell}>tenant</td>
                            <td className={styles.tableCell}>Integer</td>
                            <td className={styles.tableCell}>Código da empresa tenant</td>
                        </tr>
                    </tbody>
                </table>
                <p className={styles.responseTitle}>Resposta:</p>
                <pre className={styles.response}>
                    {`{
    "mensagens": [
        {
            "codigo": 1,
            "numeros": "(49) 99809-1949;(49) 99809-1949",
            "mensagem": "Pedido Número 10",
            "pdf": {
              "type": "Buffer",
              "data": [byte]
            },
            "url_amazon_xml": "www.amazon.com.br/s3/xml"
        }
    ]
}`}
                </pre>
            </div>

            {/* Add more endpoints as needed */}

        </div>
      
    
  );
}