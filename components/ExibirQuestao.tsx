import RespostaModel from "../model/resposta";
import styles from "../styles/ExibirQuestao.module.css"
import Botao from "./Botao";

interface ExibirQuestaoProps {
  id: number
  enunciado: string
  alternativas: RespostaModel[];
}

export default function ExibirQuestao(props: ExibirQuestaoProps) {
  return (
    <div className={styles.exibirQuestao}>
      <div className={styles.enunciado}>
        <h2>Questao: {props.id} - {props.enunciado}</h2>
        <div className={styles.alternativas}>
          {props.alternativas.map((alternativa, index) => (
            <p
              key={index}
              className={index === props.alternativas.length - 1 ? styles.ultimaAlternativa : styles.outrasAlternativas}
            >
              {alternativa.valor}
            </p>
          ))}
        </div>
      </div>
      <Botao texto="Voltar" href="/questoes" />
    </div>
  )
}
