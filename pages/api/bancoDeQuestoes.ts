import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(101, 'Qual bicho transmite a Doenca de Chagas?', [
    RespostaModel.errada('Abelha'),
    RespostaModel.errada('Barata'),
    RespostaModel.errada('Pulga'),
    RespostaModel.certa('Barbeiro'),
  ]),
  new QuestaoModel(102, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
    RespostaModel.errada('Caju'),
    RespostaModel.errada('Côco'),
    RespostaModel.errada('Chuchu'),
    RespostaModel.certa('Abóbora'),
  ]),
]

export default questoes