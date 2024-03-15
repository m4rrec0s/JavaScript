const xhr = new XMLHttpRequest();
xhr.open('GET', 'sistema-financeiro-library.json');
xhr.onload = () => {
  if (xhr.status === 200) {
    const dados = JSON.parse(xhr.responseText);
    carregarModais(dados);
  } else {
    console.error('Erro ao carregar o JSON!');
  }
};
xhr.send();

function carregarModais(dados) {
    const moreBtns = document.querySelectorAll('.more-btn button');
    const modalContainer = document.getElementById('modal-container');
  
    for (let i = 0; i < moreBtns.length; i++) {
      const btn = moreBtns[i];
      const assunto = btn.parentNode.parentNode.querySelector('p').textContent; // Obtém o assunto da célula
  
      const assuntoData = dados.afairs.find(obj => obj.title === assunto);
  
      if (assuntoData) {
        const modalContent = `
          <h2>${assuntoData.title}</h2>
          <img src="${assuntoData.picture}" alt="${assuntoData.title}">
          <p>${assuntoData.descreption}</p>
        `;

        const modal = criarModal(modalContent);
        modalContainer.appendChild(modal);
  
        btn.addEventListener('click', () => {
          modal.style.display = 'block';
        });
      }
    }
}

function criarModal(conteudo) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const fechar = document.createElement('button');
    fechar.textContent = 'Fechar';
    fechar.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    modal.innerHTML = conteudo;
    modal.appendChild(fechar);
  
    return modal;
}

const btnBancos = document.getElementById('btn-bancos');
btnBancos.addEventListener('click', () => {
  const assunto = 'Bancos e caixas econômicas';
  const assuntoData = dados.afairs.find(obj => obj.title === assunto);
  criarModal();
});