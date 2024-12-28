document.getElementById('car-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const modelo = document.getElementById('modelo').value;
  const cliente = document.getElementById('cliente').value;
  const dataDeAderencia = document.getElementById('data-de-aderencia').value;
  const dataDeFabricacao = document.getElementById('data-de-fabricacao').value;

  const tbody = document.querySelector('.corpo-tabela');
  const tr = document.createElement('tr');
  tr.classList.add('linha-tabela');

  tr.innerHTML = `
    <td class="modelo">${modelo}</td>
    <td class="cliente">${cliente}</td>
    <td class="data-de-aderencia">${dataDeAderencia}</td>
    <td class="data-de-fabricacao">${dataDeFabricacao}</td>
    <td>
      <button class="botao-editar">Edit</button>
      <button class="botao-remover">Delete</button>
    </td>
  `;

  tbody.appendChild(tr);

  document.getElementById('car-form').reset();
});

document.querySelector('.corpo-tabela').addEventListener('click', function(e) {
  if (e.target.classList.contains('botao-remover')) {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains('botao-editar')) {
    const tr = e.target.parentElement.parentElement;
    document.getElementById('modelo').value = tr.querySelector('.modelo').textContent;
    document.getElementById('cliente').value = tr.querySelector('.cliente').textContent;
    document.getElementById('data-de-aderencia').value = tr.querySelector('.data-de-aderencia').textContent;
    document.getElementById('data-de-fabricacao').value = tr.querySelector('.data-de-fabricacao').textContent;

    tr.remove();
  }
});