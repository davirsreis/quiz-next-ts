import Botao from '../components/Botao'
import Estatistica from '../components/Estatistica'
import styles from '../styles/Resultado.module.css'
import { useRouter } from 'next/router'

export default function Resultado() {
  const router = useRouter()

  const total = +router.query.total
  const certas = +router.query.certas
  const percentual = Math.round((certas / total) * 100)

  return (
    <div className={styles.resultado}>
      <h1>Resultado</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas}
          corFundo="#9CD2A4" />
        <Estatistica texto="Percentual" valor={`${percentual}%`}
          corFundo="#DE6A33" />
      </div>
      <div style={{marginTop: "40px"}}>
        <Botao href="/" texto="Voltar ao início" />
      </div>
    </div>
  )
}