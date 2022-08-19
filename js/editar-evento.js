const editarNome = document.querySelector('.editar-nome');
const editarBanner = document.querySelector('.editar-banner');
const editarAtracao = document.querySelector('.editar-atracao');
const editarDescricao = document.querySelector('.editar-descricao');
const editarData = document.querySelector('.editar-data');
const editarLotacao = document.querySelector('.editar-lotacao');
const form = document.querySelector('.form-editar')

const id = window.location.href.split('=')[1]

fetch('https://xp41-soundgarden-api.herokuapp.com/events')
.then(resposta => resposta.json())
.then(array => {
  const eventosExibidos = [array[0], array[1], array[2]]
  eventosExibidos.forEach((eventoExibido, index)=> {
    if(eventoExibido._id === id){
      editarNome.value = eventoExibido.name
      editarBanner.value = eventoExibido.poster
      editarAtracao.value = eventoExibido.attractions
      editarDescricao.value = eventoExibido.description
      editarData.value = new Date(eventoExibido.scheduled).toISOString().substring().replace('T', ' ').slice(0, 16);
      editarLotacao.value = eventoExibido.number_tickets;
    }
  })
})
.catch(erro => console.log(erro))

function submeteFormularioEditado(evento){
  evento.preventDefault()
  const dadosEditados = {
      "name": editarNome.value,
      "poster": editarBanner.value,
      "attractions": [
        editarAtracao.value
        ],
      "description": editarDescricao.value,
      "scheduled": editarData.value,
      "number_tickets": editarLotacao.value,
    }
  const URL_EDITAR = `https://xp41-soundgarden-api.herokuapp.com/events/${id}`
  
  fetch(URL_EDITAR, {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(dadosEditados)
    })
    .then(resposta => {
      resposta.json()
      .then(objeto => {
        setTimeout(function(){
          document.querySelector('h2').classList.add('ativo')
        }, 1000)
        setTimeout(function(){
          document.querySelector('h2').classList.remove('ativo')
        }, 5000)
      })
    })
}

form.addEventListener('submit', submeteFormularioEditado)


