const nomeEvento = document.querySelectorAll('.nome-evento')
const nomeAtracoes = document.querySelectorAll('.nome-atracoes')
const nomeDescricao = document.querySelectorAll('.nome-descricao')
const linksReservarIngresso = document.querySelectorAll('article .btn')
const listaNomeEvento = Array.from(nomeEvento)
const listaNomeAtracoes = Array.from(nomeAtracoes)
const listaNomeDescricao = Array.from(nomeDescricao)
const listaLinksReservar = Array.from(linksReservarIngresso)
const idEvento = document.querySelector('#id-evento')

fetch('https://xp41-soundgarden-api.herokuapp.com/events')
.then(resposta => resposta.json())
.then(array => {
  listaNomeEvento.reduce((acumulador, nomeEvento) => {
    nomeEvento.innerHTML = `${array[acumulador].name} ${array[acumulador].scheduled.slice(0, 10)}`
    return acumulador + 1
  }, 0)

  listaNomeAtracoes.reduce((acumulador, nomeAtracao) => {
    nomeAtracao.innerHTML = array[acumulador].attractions
    return acumulador + 1
  }, 0)

  listaNomeDescricao.reduce((acumulador, nomeDescricao) => {
    nomeDescricao.innerHTML = array[acumulador].description
    return acumulador + 1
  }, 0)

  listaLinksReservar.reduce((acumulador, linkReservar) => {
    function addClassFormModal(){
      const formModal = document.querySelector('.form-modal')
      const imgFechar = document.querySelector('.form-modal a img')
      formModal.classList.add('ativo')
  
      function removeClass(){
        formModal.classList.remove('ativo')
        document.querySelector('.pop-up').classList.remove('ativo')
          inNome.innerHTML = ""
          inEmail.innerHTML = ""
          inLotacao.innerHTML = ""  
      }
      imgFechar.addEventListener('click', removeClass)
      idEvento.setAttribute('value', array[acumulador]._id)
    }

    linkReservar.addEventListener('click', addClassFormModal)
    return acumulador + 1
  }, 0)
})

const submitForm = document.querySelector('.form-modal')
function reservaIngresso(evento){
  evento.preventDefault()
  const inNome = document.querySelector('#nome').value
  const inEmail = document.querySelector('#email').value
  const inLotacao = document.querySelector('#lotacao').value

  const URL_RESERVA = 'https://xp41-soundgarden-api.herokuapp.com/bookings'
  const dadosDaReserva = {
  "owner_name": inNome,
  "owner_email": inEmail,
  "number_tickets": +inLotacao,
  "event_id": idEvento.value
  }

  fetch(URL_RESERVA, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(dadosDaReserva)
  }).then((resposta) => {
    setTimeout(function(){
      document.querySelector('.pop-up').classList.add('ativo')
    }, 1000)
  })
}
submitForm.addEventListener('submit',reservaIngresso)