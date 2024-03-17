window.addEventListener('DOMContentLoaded', () => {

  fetch('../json/library.json')
    .then(response => response.json())
    .then(data => {
      const moreBtns = document.querySelectorAll('.btn');

      const modal = document.getElementById('modal');
      const modalTitle = document.getElementById('modal-content-title');
      const modalImg = document.getElementById('modal-content-img');
      const modalDescription = document.getElementById('modal-content-description');
      const modalSub = document.getElementById('modal-content-sub');
      const modalFunctions = document.getElementById('modal-content-functions');
      const modalComposition = document.getElementById('modal-container-composition');
      const modalMainFunctions = document.getElementById('modal-container-mainFunctions');
      const modalImportancePr = document.getElementById('modal-container-importance-pr');
      const modalImportanceUl = document.getElementById('modal-container-importance-ul');
      const modalLinks = document.getElementById('modal-container-links');

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
              modalSub.textContent = assuntoData.subDescription;

              if (Array.isArray(assuntoData.functions)) {
                modalFunctions.innerHTML = '<ul>';
                assuntoData.functions.forEach(desc => {
                  modalFunctions.innerHTML += `<li>${desc}</li>`;
                });
                modalFunctions.innerHTML += '</ul>';
              } else {
                modalFunctions.textContent = assuntoData.functions;
              }

              if (Array.isArray(assuntoData.composition)) {
                modalComposition.innerHTML = '<ul>';
                assuntoData.composition.forEach(desc => {
                  modalComposition.innerHTML += `<li>${desc}</li>`;
                });
                modalComposition.innerHTML += '</ul>';
              } else {
                modalComposition.textContent = assuntoData.composition;
              }

              if (Array.isArray(assuntoData.mainFunctions)) {
                modalMainFunctions.innerHTML = '<ul>';
                assuntoData.mainFunctions.forEach(desc => {
                  modalMainFunctions.innerHTML += `<li>${desc}</li>`;
                });
                modalMainFunctions.innerHTML += '</ul>';
              } else {
                modalMainFunctions.textContent = assuntoData.mainFunctions;
              }


              modalImportancePr.textContent = assuntoData.importancetxt;
              if (Array.isArray(assuntoData.importance)) {
                modalImportanceUl.innerHTML = '<ul>';
                assuntoData.importance.forEach(desc => {
                  modalImportanceUl.innerHTML += `<li>${desc}</li>`;
                });
                modalImportanceUl.innerHTML += '</ul>';
              } else {
                modalImportanceUl.textContent = assuntoData.importance;
              }

              if (Array.isArray(assuntoData.links)) {
                modalLinks.innerHTML = '<div>';
                assuntoData.links.forEach(desc => {
                  modalLinks.innerHTML += `<a href="${desc.url}" target="_blank"> ✓ ${desc.title}</a>`;
                });
                modalLinks.innerHTML += '</div>';
              } else {
                modalLinks.textContent = assuntoData.links;
              }

              setTimeout(() => modal.style.display = 'block', 20);
              setTimeout(() => modal.classList.add('open'), 10);
              
            }
          }
        });
      });
      
      exitBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        modal.classList.add('closed');
      });
      
      modal.addEventListener('animationend', () => {
        if (modal.classList.contains('closed')) {
          modal.style.display = 'none';
          modal.classList.remove('closed');
        }
      });
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
    });
});