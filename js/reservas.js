const event_id = window.location.href.split('=')[1]
fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${event_id}`)
.then(resposta => resposta.json())
.then(array => {
  array.forEach(obj => {
    let tabelaReservas = ``
    tabelaReservas += `
            <tr>
              <td>${obj.owner_name}</td>
              <td>${obj.owner_email}</td>
              <td>${obj.number_tickets}</td>
              <td>
              <a href="" class="btn btn-danger exclui">excluir</a>
              </td>
            </tr>
    `
    const tbody = document.querySelector('.tabela-reserva')
    tbody.innerHTML += tabelaReservas
  })
})

