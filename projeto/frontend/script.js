const btnBuscar = document.getElementById('btnBuscar');
const divUsuarios = document.getElementById('usuarios');

btnBuscar.addEventListener('click', buscarUsuarios);

function buscarUsuarios() {

    fetch('http://127.0.0.1:5000/usuarios')
        .then(resposta => resposta.json())
        .then(dados => {

            divUsuarios.innerHTML = '';

            dados.forEach(usuario => {

                const card = document.createElement('div');
                card.classList.add('usuario');

                card.innerHTML = `
                    <h2>${usuario.nome}</h2>
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <p><strong>Telefone:</strong> ${usuario.telefone}</p>
                `;

                divUsuarios.appendChild(card);
            });
        })
        .catch(error => {
            console.log('Erro ao buscar usuários:', error);
        });
}