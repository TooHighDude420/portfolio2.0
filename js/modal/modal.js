const modal = document.getElementById("modalTot");
const closeBtn = document.getElementById("modalClose");
const title = document.getElementById("modalTitle");
const image = document.getElementById("modalImage").children[0];
const text = document.getElementById("modalText");

var modalTotal = {
    ent: modal,
    closeBtn: closeBtn,
    modalTitle: title,
    modalImage: image,
    modalContent: text
}

modalTotal.closeBtn.onclick = function(){
    modalTotal.ent.style.display = "none";
}

function setModalContent(values){
    modalTotal.ent.style.display = "flex"
    modalTotal.modalTitle.textContent = values[0];
    modalTotal.modalImage.src = values[1];
    modalTotal.modalContent.textContent = values[2];
}