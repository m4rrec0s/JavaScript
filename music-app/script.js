function showPopup(message, icon, right = "0%", left = "0%", top = "0%", bottom = "0%") {
    var popup = document.getElementById("popup");
    popup.innerText = message;
    var rect = icon.getBoundingClientRect();

    var iconWidth = rect.width;
    var iconHeight = rect.height;
    var popupWidth = popup.offsetWidth;
    var popupHeight = popup.offsetHeight;

    var topPosition = rect.top + window.scrollY + (iconHeight / 2) - (popupHeight / 2);
    var leftPosition = rect.left + window.scrollX + (iconWidth / 2) - (popupWidth / 2);

    if (right !== "0%") {
        leftPosition = rect.left + window.scrollX + iconWidth + (iconWidth * parseFloat(right) / 100) - popupWidth;
    } else if (left !== "0%") {
        leftPosition = rect.left + window.scrollX - (iconWidth * parseFloat(left) / 100);
    } else if (top !== "0%") {
        topPosition = rect.top + window.scrollY - (iconHeight * parseFloat(top) / 100) - popupHeight;
    } else if (bottom !== "0%") {
        topPosition = rect.top + window.scrollY + iconHeight + (iconHeight * parseFloat(bottom) / 100);
    }

    popup.style.top = topPosition + "px";
    popup.style.left = leftPosition + "px";
    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function changeHeaderColor(color) {
    var header = document.getElementById("pageHeader");
    header.classList.remove("header-red", "header-green", "header-blue"); // Remove todas as classes de cor anteriores
    header.classList.add(`header-${color}`); // Adiciona a classe de cor correspondente
}

function resetHeaderColor() {
    var header = document.getElementById("pageHeader");
    header.classList.remove("header-red", "header-green", "header-blue"); // Remove todas as classes de cor anteriores
}
