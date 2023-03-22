const btnElement = document.getElementById("btn");
btnElement.addEventListener('click', clickHandler);

function clickHandler(e) {
    console.log(e.target);
}

