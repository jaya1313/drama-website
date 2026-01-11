const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");
menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("show");
});

const sharkCards=document.querySelectorAll(".sharks-card");
const modal=document.getElementById("sharkModal");
const closeModal=document.getElementById("closeModal");

const modalName=document.getElementById("modalName");
const modalCompany=document.getElementById("modalCompany");
const modalExpertise=document.getElementById("modalExpertise");
const modalSeasons=document.getElementById("modalSeasons");

sharkCards.forEach(card=>{
    card.addEventListener("click",()=>{
        modalName.textContent=card.dataset.name;
        modalCompany.textContent="Company: "+card.dataset.company;
        modalExpertise.textContent="Expertise: " + card.dataset.expertise;
        modalSeasons.textContent="Seasons: "+card.dataset.seasons;

        modal.classList.add("show");
    });
});
closeModal.addEventListener("click",()=>{
    modal.classList.remove("show");
});

modal.addEventListener("click",(e) =>{
    if(e.target===modal){
        modal.classList.remove("show");
    }
});
document.addEventListener("keydown",(e)=>{
    if(e.key==="escape"){
        modal.classList.remove("show");
    }
});

// filtering and search bar js

const SeasonFilter=document.getElementById("seasonFilter");
const searchInput=document.getElementById("searchInput");

function filterSharks( {
    con
})