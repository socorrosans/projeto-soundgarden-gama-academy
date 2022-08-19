const nomeExcluir = document.querySelector('.nome-excluir')
const bannerExcluir = document.querySelector('.poster-excluir')
const atracaoExcluir = document.querySelector('.atracao-excluir')
const descricaoExcluir = document.querySelector('.descricao-excluir')
const dataExcluir = document.querySelector('.data-excluir')
const lotacaoExcluir = document.querySelector('.lotacao-excluir')
const formExcluir = document.querySelector('.form-excluir')

const id = window.location.href.split('=')[1]

fetch('https://xp41-soundgarden-api.herokuapp.com/events')
.then(resposta => resposta.json())
.then(array => {
  const eventosExibidos = [array[0], array[1], array[2], array[3], array[4], array[5]]
  eventosExibidos.forEach((eventoExibido, index)=> {
    if(eventoExibido._id === id){
      nomeExcluir.value = eventoExibido.name
      bannerExcluir.value = eventoExibido.poster
      atracaoExcluir.value = eventoExibido.attractions
      descricaoExcluir.value = eventoExibido.description
      dataExcluir.value = new Date(eventoExibido.scheduled).toISOString().substring().replace('T', ' ').slice(0, 16);
      lotacaoExcluir.value = eventoExibido.number_tickets;
    }
  })
})

function limpaCampos(){
  nomeExcluir.value = ""
  bannerExcluir.value = ""
  atracaoExcluir.value = ""
  descricaoExcluir.value = ""
  dataExcluir.value = ""
  lotacaoExcluir.value = ""
}

function excluirDadosEvento(evento){
  evento.preventDefault()
  const URL_DELETE = `https://xp41-soundgarden-api.herokuapp.com/events/${id}`
  fetch(URL_DELETE, {
    method: "DELETE",
    headers: { "Content-Type": "application/json"},
  })
  .then(resposta => {
    setTimeout(function(){
      document.querySelector('h2').classList.add('ativo')
    }, 1000)
    setTimeout(function(){
      document.querySelector('h2').classList.remove('ativo')
    }, 5000)
    limpaCampos()
  })
}

formExcluir.addEventListener('submit', excluirDadosEvento)