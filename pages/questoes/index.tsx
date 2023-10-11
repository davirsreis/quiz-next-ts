import Link from 'next/link'
import styles from '../../styles/Questoes.module.css'
import questoes from '../api/bancoDeQuestoes'
import Botao from '../../components/Botao'

export default function Questoes() {

  function renderizarQuestoes() {
    return questoes.map(questao => {
      return (
        <div className={styles.listaQuestoes}>
          <Link href={`/questoes/${questao.id}`}>
            {questao.enunciado}
          </Link>
        </div>
      )
    })
  }

  return (
    <div className={styles.questoes}>
      <h1>Questões registradas</h1>
      <div className={styles.listagem}>
        {renderizarQuestoes()}
      </div>
      <div style={{marginTop: '20px'}}>
        <Botao texto='Voltar ao início' href='/' />
      </div>
    </div>
  )
}