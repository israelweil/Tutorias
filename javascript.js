let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

//second window
let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir2 = document.querySelectorAll(".cta2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".modal-container2")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },600);
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },600);
    }

})


// second window process
abrir2.addEventListener("click", function(ee){
    ee.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close2");

});

cerrar2.addEventListener("click", function(){
    modal2.classList.toggle("modal-close2");
    setTimeout(function(){
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    },600);
});

window2.addEventListener("click", function(ee){
    console.log(ee.target)
    if (ee.target == modalC2) {
        modal2.classList.toggle("modal-close2");
        setTimeout(function(){
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";
        },600);
    }
})
