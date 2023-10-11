import RespostaModel from "../model/resposta";
import styles from "../styles/ExibirQuestao.module.css"

interface ExibirQuestaoProps {
  id: number
  enunciado: string
  alternativas: RespostaModel[];
}


export default function ExibirQuestao(props: ExibirQuestaoProps) {
  return (
    <div className={styles.exibirQuestao}>
      <div className={styles.enunciado}>
        <h2>{props.id} - {props.enunciado}</h2>
        <div>
          {props.alternativas.map((alternativa, index) => (
            <p key={index}>{alternativa.valor}</p>
          ))}
        </div>
      </div>
    </div>
  )
}