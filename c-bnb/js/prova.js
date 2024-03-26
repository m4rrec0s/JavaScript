const questoes = [
    {
      id: 1,
      texto: "No segundo parágrafo, o texto defende a necessidade de discutir questões relativas à mobilidade urbana.",
      alternativas: [
        {
          texto: "ampliação da população urbana mundial",
          correta: false,
        },
        {
          texto: "diminuição da distância entre casa e trabalho",
          correta: false,
        },
        {
          texto: "imobilidade urbana causada pelo automóvel",
          correta: true,
        },
        {
          texto: "importância do investimento em infraestrutura",
          correta: false,
        },
        {
          texto: "paralisação do trânsito das grandes cidades",
          correta: false,
        },
      ],
    },
    // ... outras questões
];

const botaoFinalizar = document.querySelector(".btn-success");

botaoFinalizar.addEventListener("click", () => {
  // Obter respostas do usuário
  const respostasUsuario = getRespostasUsuario();

  // Loop pelas questões
  questoes.forEach((questao) => {
    const respostaUsuario = respostasUsuario[questao.id];
    const alternativaCorreta = questao.alternativas.find((a) => a.correta);

    // Verificar se a resposta do usuário está correta
    if (respostaUsuario === alternativaCorreta.texto) {
      // Marcar como correta
      const elementoAlternativa = document.querySelector(`#questao-${questao.id} input[value="${respostaUsuario}"]`).parentNode;
      elementoAlternativa.classList.add("correta");
      document.querySelector(`#questao-${questao.id}`).classList.add("correta");
    } else {
      // Marcar como incorreta
      const elementoAlternativaUsuario = document.querySelector(`#questao-${questao.id} input[value="${respostaUsuario}"]`).parentNode;
      elementoAlternativaUsuario.classList.add("incorreta");

      // Marcar a alternativa correta
      const elementoAlternativaCorreta = document.querySelector(`#questao-${questao.id} input[value="${alternativaCorreta.texto}"]`).parentNode;
      elementoAlternativaCorreta.classList.add("correta");
    }
  });
});