var addNewTaskBtn = document.getElementById("addNewTaskBtn")
var modal = document.getElementById("modal")
var closeModal = document.getElementById("closeModal")
var checkboxes = document.querySelectorAll(".checkbox")

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function() {
        var parentDiv = this.closest(".contentTask")
        if (this.checked) {
            parentDiv.style.backgroundColor = "var(--buttonColor)"
            parentDiv.style.color = "var(--back)"
        } else {
            parentDiv.style.backgroundColor = "var(--task)"
            parentDiv.style.color = "var(--font)"
        }
    })
})

addNewTaskBtn.addEventListener("click", function() {
    modal.style.display = "block"
})

closeModal.addEventListener("click", function() {
    modal.style.display = "none"
})

window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
})

var taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var taskTime = document.getElementById("taskTime").value;

    // Criando uma nova div .contentTask
    var newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("contentTask");

    // Criando a estrutura interna da nova div
    var topDiv = document.createElement("div");
    topDiv.classList.add("top");

    var titleHeading = document.createElement("h3");
    titleHeading.textContent = taskName;

    var timePara = document.createElement("p");
    timePara.classList.add("time");
    timePara.textContent = taskTime;

    var taskDescriptionPara = document.createElement("p");
    taskDescriptionPara.classList.add("taskTxt");
    taskDescriptionPara.textContent = taskDescription;

    var taskcheckbox = document.createElement("input")
    taskcheckbox.type= "checkbox"
    taskcheckbox.classList.add("checkbox")
    taskcheckbox.ariaPlaceholder = "checkbox"
        
    // Adicionando elementos à estrutura interna da nova div
    topDiv.appendChild(titleHeading);
    topDiv.appendChild(timePara);
    topDiv.appendChild(taskcheckbox);
    newTaskDiv.appendChild(topDiv);
    newTaskDiv.appendChild(taskDescriptionPara);

    // Adicionando a nova div ao documento
    var container = document.querySelector(".containerTask");
    container.appendChild(newTaskDiv);

    // Feche o modal após adicionar a tarefa
    modal.style.display = "none";
});