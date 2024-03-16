window.addEventListener('DOMContentLoaded', () => {

  fetch('../json/library.json')
    .then(response => response.json())
    .then(data => {
      const moreBtns = document.querySelectorAll('.btn');

      const modal = document.getElementById('modal');
      const modalTitle = document.getElementById('modal-content-title');
      const modalImg = document.getElementById('modal-content-img');
      const modalDescription = document.getElementById('modal-content-description');
      const modalSub = document.getElementById('modal-content-sub')

      const exitBtn = document.querySelector('.fa-xmark');

      moreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const paragraph = btn.closest('.celula.lista').querySelector('p');

          if (paragraph) {
            const assunto = paragraph.textContent.trim();
            const assuntoData = data.afairs.find(obj => obj.title.toLowerCase() === assunto.toLowerCase());

            if (assuntoData) {
              modalTitle.textContent = assuntoData.title;
              modalImg.src = assuntoData.picture;
              modalDescription.textContent = assuntoData.description;
              if (Array.isArray(assuntoData.subDescription)) {
                modalSub.innerHTML = '<ul>';
                assuntoData.subDescription.forEach(desc => {
                  modalSub.innerHTML += `<li>${desc}</li>`;
                });
                modalSub.innerHTML += '</ul>';
              } else {
                modalSub.textContent = assuntoData.subDescription;
              }

              modal.style.display = 'block';
            }
          }
        });
      });

      exitBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
    });
});