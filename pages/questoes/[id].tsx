import { useRouter } from "next/router"
import questoes from "../api/bancoDeQuestoes"
import ExibirQuestao from "../../components/ExibirQuestao";

export default function QuestaPorId() {
  const router = useRouter()
  const id = +router.query.id

  function exibirQuestao() {
    const questao = questoes.find(questao => questao.id === id);
    if (questao) {
      return <ExibirQuestao id={questao.id} enunciado={questao.enunciado} alternativas={questao.respostas} />
    }
  }

  return (
    <div>
      {exibirQuestao()}
    </div>
  )
}