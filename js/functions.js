

    let elemento = document.getElementById("nombre");

    elemento.addEventListener("mouseover", function () {
        elemento.style.color = "green";
        elemento.innerText = (elemento.innerText).toUpperCase();

    }, false)

    elemento.addEventListener("mouseout", function () {
        elemento.style.color = "black";
        elemento.innerText = (elemento.innerText).toLowerCase();

    }, false)
