function recebeDadosDoEvento(evento){
  evento.preventDefault()
  const inNome = document.querySelector('#nome')
  const inPoster = document.querySelector('#banner')
  const inAtracoes = document.querySelector('#atracoes')
  const inDescricao = document.querySelector('#descricao')
  const inData = document.querySelector('#data')
  const inLotacao = document.querySelector('#lotacao')
  const fullDateTime = new Date(inData.value)

  const dadosCadastro = {
    "name": inNome.value,
    "poster": inPoster.value,
    "attractions": [
         inAtracoes.value
      ],
    "description": inDescricao.value,
    "scheduled": fullDateTime.toISOString(),
    "number_tickets": inLotacao.value,
    } 

  const JSONdadosCadastro = JSON.stringify(dadosCadastro)
  const URL_SOUND = 'https://xp41-soundgarden-api.herokuapp.com/events'

  fetch(URL_SOUND, {
    method: "POST",
    headers: { "Content-Type": "application/json;"},
    body: JSONdadosCadastro,
  })
  .then(resposta => resposta.json().then(obj => console.log(obj)))
  .catch(erro => console.log(erro))
}

const form = document.querySelector('#form')
form.addEventListener('submit', recebeDadosDoEvento)






// if(!inNome.value && !inAtracoes.value && !inDescricao.value && !inData.value && !inLotacao.value){
//   const h2 = document.querySelector('h2')
//   h2.classList.add('ativo')
//   setTimeout(function(){
//     h2.classList.remove('ativo')
//   }, 5000)
// }