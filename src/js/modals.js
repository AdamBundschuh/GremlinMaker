var compModal = document.getElementById("comp-modal");
var devModal = document.getElementById("dev-modal");
var compBtn = document.getElementById("comp-btn");
var devBtn = document.getElementById("dev-btn");
var span = document.getElementsByClassName("close");

compBtn.onclick = () => {
    compModal.style.display = "block";
}
devBtn.onclick = () => {
    devModal.style.display = "block";
}

span[0].onclick = () => {
    compModal.style.display = "none";
}
span[1].onclick = () => {
    devModal.style.display = "none";
}

window.onclick = (event) => {
    if ((event.target == compModal) || (event.target == devModal)) {
        compModal.style.display = "none";
        devModal.style.display = "none";
    }
}