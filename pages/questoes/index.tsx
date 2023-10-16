import Link from 'next/link'
import styles from '../../styles/Questoes.module.css'
import questoes from '../api/bancoDeQuestoes'
import Botao from '../../components/Botao'

export default function Questoes() {

  function renderizarQuestoes() {
    return questoes.map(questao => {
      return (
        <div className={styles.exibirQuestoes}>
          <Link href={`/questoes/${questao.id}`}>
            <div className={styles.listaQuestoes}>
              {questao.enunciado}
            </div>
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
      <div style={{ marginTop: '20px' }}>
        <Botao texto='Voltar ao início' href='/' />
      </div>
    </div>
  )
}