
import styles from '../styles/home.module.css';
import Logo from '../image/Logo.png';

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
            "url_amazon_documento": "Pedido200176mzgw.pdf",
            "url_amazon_xml": "NFCe42220841004130000180650010000000061000000079"
        }
    ]
}`}
                </pre>
            </div>


            {/* Add more endpoints as needed */}
            <img src={Logo.src} alt="Logo" className={`${styles.logo} ${styles.logoSmall}`} />
        </div>
     
    
  );
}
