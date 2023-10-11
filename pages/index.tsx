import Botao from '../components/Botao'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.home}>
      <h1 className={styles.texto}>Quiz</h1>
      <div className={styles.botoes}>
        <Botao texto='Iniciar' href='/quiz' />
        <Botao texto='Consultar questões' href='/questoes' />
      </div>
    </div>
  )
}
