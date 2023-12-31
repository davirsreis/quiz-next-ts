import questoes from "../bancoDeQuestoes"

export default function handler(req, res) {
  const idSelecionado = +req.query.id

  const questao = questoes.filter(questao => questao.id === idSelecionado)

  if (questao.length === 1) {
    const questaoSelecionada = questao[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.paraObjeto())
  } else {
    res.status(204).send()
  }
}
