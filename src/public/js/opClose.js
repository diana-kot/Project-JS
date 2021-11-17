
function open (){
document.querySelector(".burger").onclick = function () {
  document.querySelector(".overlay-promo").classList.toggle("overlay-promo-open");
}
document.querySelector(".overlay-promo-menu__close").onclick = function () {
  document.querySelector(".overlay-promo").classList.remove("overlay-promo-open");
}
document.querySelector(".logo__search").onclick = () => {
document.querySelector(".search-form").classList.toggle("invisible");
document.querySelector(".logo__search").classList.toggle("invisible");  
}
}

export default open