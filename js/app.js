const darkbtn = document.querySelector(".darkbtn");
const body = document.querySelector('body')

const darkmode = () => body.classList.toggle('darkmode')

   


darkbtn.addEventListener("click", darkmode);


const faqs = Array.from(document.querySelectorAll(".faq"));

const faqToggle = (event) =>{
    const faq = event.currentTarget;

    if(faq .classList.contains("active")) {
        faqs.map((faq) => faq.classList.remove("active"));
    } else {
        faqs.map((faq) => faq.classList.remove("active"));
        faq.classList.add("active");
    }
}; 

faqs.map((faq) => faq.addEventListener("click", faqToggle));



const galleryPopup = document.querySelector(".popupGallery");
const gelleryImages = Array .from (document.querySelectorAll(".gallImage"));
const openGallery = () =>{
    galleryPopup.classList.add('active')

}


gelleryImages.map((gallIng) => gallIng.addEventListener('click',openGallery));






