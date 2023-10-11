import styles from "../styles/Questinario.module.css"
import QuestaoModel from "../model/questao"
import Questao from "./Questao"
import Botao from "./Botao"

interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irParaProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ?
        <Questao
          valor={props.questao}
          tempoPraResposta={10}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irParaProximoPasso} />
        : false}

      <div style={{ marginTop: "40px" }}>
        <Botao onClick={props.irParaProximoPasso}
          texto={props.ultima ? 'Finalizar' : 'Próxima'} />
      </div>
    </div>
  )
}