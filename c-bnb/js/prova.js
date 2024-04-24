var resolved_questions = document.getElementById("resolved");
var remaining_questions = document.getElementById("remaining");


// Função para criar os containers das questões
const criarContainers = (questoes) => {
  // Container principal onde todas as questões serão inseridas
  const provaContainer = document.querySelector('.prova-container');

  // Iterar sobre cada questão no arquivo JSON
  questoes.forEach((questao, index) => {
    // Criar um container para cada questão
    var questionos = 60;
    var resolved = 0;
    resolved_questions.innerText = `${resolved} questões resolvidas`;
    remaining_questions.innerText = `Restão ${questionos} questões`;

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

    // Número da questão
    const numeroQuestao = document.createElement('h2');
    numeroQuestao.textContent = `Questão ${index + 1}`;

    // Texto da questão
    const textoQuestao = document.createElement('p');
    textoQuestao.textContent = questao.texto;

    // Alternativas
    const formAlternativas = document.createElement('form');
    questao.alternativas.forEach((alternativa, idx) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `opcao${index}`;
      input.value = alternativa.texto;
      label.appendChild(input);
      label.appendChild(document.createTextNode(alternativa.texto));
      formAlternativas.appendChild(label);
    });

    // Adicionar todos os elementos ao container da questão
    questionContainer.appendChild(numeroQuestao);
    questionContainer.appendChild(textoQuestao);
    questionContainer.appendChild(formAlternativas);

    // Adicionar o container da questão ao container principal
    provaContainer.appendChild(questionContainer);
  });
};

// Carregar o arquivo JSON usando Fetch
fetch('../json/simulado.json')
  .then(response => response.json())
  .then(data => {
    // Chamar a função para criar os containers das questões com os dados do JSON
    criarContainers(data);
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
