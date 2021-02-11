var readMore = document.querySelectorAll(".accord button.read");
var readMoreDeco = document.querySelectorAll(".accord button.read .deco span:nth-of-type(2)");
var contenido = document.querySelectorAll(".accord .development");

for (let i = 0; i < readMore.length; i++) {
  readMore[i].onclick = function(){
    contenido[i].classList.toggle("active");
    readMoreDeco[i].classList.toggle("vertical");
  }
};