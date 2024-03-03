var addNewTask = document.getElementById("addNewTask")
var caixa = document.getElementById("caixa_1")

var checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function() {
        var parentDiv = this.closest(".contentTask"); // Encontre a div pai mais próxima com a classe .contentTask
        if (this.checked) {
            parentDiv.style.backgroundColor = "var(--buttonColor)"; // Altera a cor de fundo da div pai quando a checkbox é marcada
            parentDiv.style.color = "var(--back)"
        } else {
            parentDiv.style.backgroundColor = "var(--task)"; // Retorna à cor original quando a checkbox é desmarcada
            parentDiv.style.color = "var(--font)";
        }
    });
});

addNewTask.addEventListener("click", function() {

})
