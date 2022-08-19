const datas = document.querySelectorAll('.datas')
const titulos = document.querySelectorAll('.titulos')
const atracoes = document.querySelectorAll('.atracoes')
const linksEditar = document.querySelectorAll('a[href="editar.html"]')
const linksExcluir = document.querySelectorAll('a[href="excluir.html"]')
const linksVerReserva = document.querySelectorAll('a[href="reservas.html"]')
const listaLinksEditar = Array.from(linksEditar)
const listaLinksExcluir = Array.from(linksExcluir)
const listaLinksVerReservas = Array.from(linksVerReserva)
const listaAtracoes = Array.from(atracoes)
const listaTitulos = Array.from(titulos)
const listaDatas = Array.from(datas)

fetch('https://xp41-soundgarden-api.herokuapp.com/events')
.then(resposta => {
  resposta.json()
  .then(array => {

    listaAtracoes.reduce((acumulador, atracao) => {
      atracao.innerHTML = array[acumulador].attractions.toString()
      return acumulador + 1
    }, 0)

    listaTitulos.reduce((acumulador, titulo) => {
      titulo.innerHTML = array[acumulador].name.toString()
      return acumulador + 1
    }, 0)

    listaDatas.reduce((acumulador, data) => {
      data.innerHTML = array[acumulador].scheduled.toString().replace('T', ' ').slice(0, 16)
      return acumulador + 1
    }, 0)

    listaLinksEditar.reduce((acumulador, link) => {
      link.href = `editar.html?id=${array[acumulador]._id}`
      return acumulador + 1
    }, 0)

    listaLinksExcluir.reduce((acumulador, link) => {
      link.href = `excluir-evento.html?id=${array[acumulador]._id}`
      return acumulador + 1
    }, 0)

    listaLinksVerReservas.reduce((acumulador, link) => {
      link.href = `reservas.html?id=${array[acumulador]._id}`
      return acumulador + 1
    }, 0)
  })
})