const slidepage  = document.querySelector(".slidepage");
const firtNextBtn = document.querySelector(".nextBtn");
const nextBtnSec = document.querySelector(".next-1");
const nextBtnThird = document.querySelector(".next-2");
const nextBtnFourth = document.querySelector(".next-3");

firtNextBtn.addEventListener("click", function(){
    slidepage.style.marginLeft = "-25%"
});
nextBtnSec.addEventListener("click", function(){
    slidepage.style.marginLeft = "-50%"
});
nextBtnThird.addEventListener("click", function(){
    slidepage.style.marginLeft = "-75%"
});
nextBtnThird.addEventListener("click", function(){
    slidepage.style.marginLeft = "-100%"
});
