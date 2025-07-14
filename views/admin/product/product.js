const modalContent = document.querySelector(".modal-content")
const btnShow = document.querySelector("#btnAdd");
const modal = modalContent.querySelector(".modal");
const btnClose = modal.querySelector(".modal-head .btnClose");
const input = modal.querySelectorAll(".modal-body .form-group .content-input input");
const btnAdd = modal.querySelector(".modal-foot .btnAdd")
const drop = document.querySelector(".drop");
const btnDrop = drop.querySelector("#btnDrop");
const contentDrop = drop.querySelector(".content-drop");

let toggle = true;
btnShow.addEventListener("click", () => {
    modalContent.classList.add("active");
    modal.classList.add("active");
    contentDrop.classList.remove("active");
    toggle = true;
})

btnClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalContent.classList.remove("active");
    modal.classList.remove("active");
})

btnAdd.addEventListener("click", (e) => {
    input.forEach(item => {
        console.log(item.value);
    })
})


btnDrop.addEventListener("click", () => {
    if(toggle == true){
        contentDrop.classList.add("active");
        toggle = false
    }
    else{
        contentDrop.classList.remove("active");
        toggle = true
    }
})

