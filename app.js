const share=document.querySelector(".share-btn");
const cls=document.querySelector(".close-btn");
const ovr=document.querySelector(".overlay");

function openModal(){
    const shareModal=document.querySelector(".share-modal");
    shareModal.style.scale='1';
    ovr.style.display='initial';
}

function closeModal(){
    const shareModal=document.querySelector(".share-modal");
    shareModal.style.scale='0';
    ovr.style.display='none';
}

share.addEventListener("click",openModal);
cls.addEventListener("click",closeModal);
ovr.addEventListener("click",closeModal);