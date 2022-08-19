const event_id = window.location.href.split('=')[1]
fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${event_id}`)
.then(resposta => resposta.json())
.then(array => {
  const clientes = document.querySelectorAll('.clientes')
  const ingressos = document.querySelectorAll('.ingressos')
  const listaClientes = Array.from(clientes)
  const listaIngressos = Array.from(ingressos)
  
  listaClientes.reduce((acumulador, cliente) => {
    cliente.innerHTML = array[acumulador].owner_name
    return acumulador + 1
  }, 0)
  
  listaIngressos.reduce((acumulador, ingresso) => {
    ingresso.innerHTML = array[acumulador].number_tickets
    return acumulador + 1
  }, 0)
})

