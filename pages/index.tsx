import Botao from '../components/Botao'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.borda}>
        <h1 className={styles.texto}>Quiz</h1>
        <div className={styles.botoes}>
          <Botao texto='Iniciar' href='/quiz' />
          <Botao texto='Consultar questões' href='/questoes' />
        </div>
      </div>
    </div>
  )
}
