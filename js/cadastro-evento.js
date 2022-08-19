function submeteFormulario(evento){
  evento.preventDefault()
  const nome = document.getElementById('nome').value
  const poster = document.getElementById('banner').value
  const atracoes = document.getElementById('atracoes').value
  const descricao = document.getElementById('descricao').value
  const lotacao = document.getElementById('lotacao').value
  const data = document.getElementById('data').value

  const dadosCadastro = {
    "name": nome,
    "poster": poster,
    "attractions": [
        atracoes
      ],
    "description": descricao,
    "scheduled": data,
    "number_tickets": lotacao,
    }
    
  const JSONdadosCadastro = JSON.stringify(dadosCadastro)
  const URL_SOUND = 'https://xp41-soundgarden-api.herokuapp.com/events'
  
  fetch(URL_SOUND, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSONdadosCadastro
    })
    .then(resposta => {
      setTimeout(function(){
        document.querySelector('h2').classList.add('ativo')
      }, 1000)
      setTimeout(function(){
        document.querySelector('h2').classList.remove('ativo')
      }, 5000)
    })
}

const form = document.getElementById('form')
form.addEventListener('submit', submeteFormulario)