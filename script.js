// LIGHTBOX SIMPLE
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img=>{
  img.addEventListener("click",()=>{
    lightbox.style.display="flex";
    lightboxImg.src=img.src;
  });
});

function closeLightbox(){
  lightbox.style.display="none";
}

document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape") closeLightbox();
});
