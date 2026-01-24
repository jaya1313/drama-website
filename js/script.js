const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");
menuToggle.addEventListener("click",()=>{
    navLinks.classList.toggle("show");
});

//home page
const counters=document.querySelectorAll(".count");
counters.forEach(counter=>{
    const target=Number(counter.dataset.target);
    let count=0;
    const Interval=setInterval(() =>{
        count++;
        counter.textContent=count+"+ ";

        if(count===target){
            clearInterval(Interval);
        }
    },20);
})


const sharkCards=document.querySelectorAll(".sharks-card");
const modal=document.getElementById("sharkModal");
const closeModal=document.getElementById("closeModal");

const modalName=document.getElementById("modalName");
const modalCompany=document.getElementById("modalCompany");
const modalExpertise=document.getElementById("modalExpertise");
const modalSeasons=document.getElementById("modalSeasons");

// if(modal && closeModal){

// sharkCards.forEach(card=>{
//     card.addEventListener("click",()=>{
//         modalName.textContent=card.dataset.name;
//         modalCompany.textContent="Company: "+card.dataset.company;
//         modalExpertise.textContent="Expertise: " + card.dataset.expertise;
//         modalSeasons.textContent="Seasons: "+card.dataset.seasons;

//         modal.classList.add("show");
//     });
// });

// closeModal.addEventListener("click",()=>{
//     modal.classList.remove("show");
// });

// modal.addEventListener("click",(e) =>{
//     if(e.target===modal){
//         modal.classList.remove("show");
//     }
// });
// document.addEventListener("keydown",(e)=>{
//     if(e.key==="escape"){
//         modal.classList.remove("show");
//     }
// });
// }

// filtering and search bar js

const SeasonFilter=document.getElementById("seasonFilter");
const searchInput=document.getElementById("searchInput");

function filterSharks() {
    const seasonValue=SeasonFilter.value;
    const searchValue=searchInput.value.toLowerCase();
    
    sharkCards.forEach(card =>{
        const seasons=card.dataset.seasons;
        const name=card.dataset.name.toLowerCase();
        const company=card.dataset.company.toLowerCase();
        
        const matchesSeason= seasonValue==="all" || seasons.includes(seasonValue);
        const matchesSearch=name.includes(searchValue) || company.includes(searchValue);
        
        if(matchesSeason && matchesSearch) {
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
}
if(SeasonFilter && searchInput){
SeasonFilter.addEventListener("change",filterSharks);
searchInput.addEventListener("input",filterSharks);
}

// deals

const deals = [
    {
        name: "Skippi Ice Pops",
        industry: "Food & Beverages",
        ask: "₹45L for 5%",
        deal: "₹1Cr for 15%",
        sharks: "All Sharks (Aman, Anupam, Ashneer, Namita, Peyush)",
        season: 1
    },
    {
        name: "Hammer Lifestyle",
        industry: "Consumer Electronics",
        ask: "₹30L for 3%",
        deal: "₹1Cr for 40% (Buyout Offer)",
        sharks: "Aman Gupta",
        season: 1
    },
    {
        name: "Beyond Snack",
        industry: "Food (Banana Chips)",
        ask: "₹50L for 2.5%",
        deal: "₹50L for 2.5%",
        sharks: "Ashneer Grover, Aman Gupta",
        season: 1
    },
    {
        name: "BluePine Foods",
        industry: "Food (Frozen Momos)",
        ask: "₹50L for 5%",
        deal: "₹75L for 16%",
        sharks: "Ashneer, Aman, Vineeta",
        season: 1
    },
    {
        name: "Heart Up My Sleeves",
        industry: "Fashion",
        ask: "₹25L for 10%",
        deal: "₹25L for 30%",
        sharks: "Anupam Mittal, Vineeta Singh",
        season: 1
    },
    {
        name: "Snitch",
        industry: "Men's Apparel",
        ask: "₹1.5Cr for 0.5%",
        deal: "₹1.5Cr for 1.5%",
        sharks: "All Sharks (S2)",
        season: 2
    },
    {
        name: "Adil Qadri",
        industry: "Perfumes/Attar",
        ask: "₹1Cr for 0.5%",
        deal: "₹1Cr for 1% + 1% Royalty",
        sharks: "Vineeta Singh",
        season: 3
    },
    {
        name: "The Cinnamon Kitchen",
        industry: "Plant-based Bakery",
        ask: "₹60L for 2%",
        deal: "₹60L for 5%",
        sharks: "Aman Gupta",
        season: 3
    },
    {
        name: "Intervue",
        industry: "HR Tech",
        ask: "₹1.5Cr for 1%",
        deal: "₹1.5Cr for 2%",
        sharks: "Aman Gupta",
        season: 3
    },
    {
        name: "CosIQ",
        industry: "Skincare",
        ask: "₹50L for 7%",
        deal: "₹50L for 25%",
        sharks: "Anupam Mittal, Vineeta Singh",
        season: 1
    },
    {
        name: "Nuutjob",
        industry: "Personal Hygiene",
        ask: "₹25L for 5%",
        deal: "₹25L for 20%",
        sharks: "Peyush, Namita, Aman",
        season: 1
    },
    {
        name: "Tagz Foods",
        industry: "Food & Snacks",
        ask: "₹70L for 1%",
        deal: "₹70L for 2.75%",
        sharks: "Ashneer Grover",
        season: 1
    },
    {
        name: "Revamp Moto",
        industry: "Electric Vehicles",
        ask: "₹1Cr for 1%",
        deal: "₹1Cr for 1.5%",
        sharks: "Anupam Mittal, Aman Gupta",
        season: 1
    },
    {
        name: "Dil Foods",
        industry: "Virtual Restaurant",
        ask: "₹50L for 0.5%",
        deal: "₹2Cr for 2.67%",
        sharks: "Radhika, Vineeta, Peyush, Aman",
        season: 3
    },
    {
        name: "Nasher Miles",
        industry: "Travel Gear",
        ask: "₹3Cr for 0.75%",
        deal: "₹3Cr for 1.5% + 1% Royalty",
        sharks: "All Sharks (S3)",
        season: 3
    },
    {
        name: "ALittleExtra",
        industry: "Fashion Accessories",
        ask: "₹48L for 6%",
        deal: "₹60L for 7.5%",
        sharks: "Vineeta Singh, Anupam Mittal",
        season: 3
    }
];

const dealscontainer=document.getElementById("deals-container");
if(dealscontainer){
deals.forEach(deal =>{
    const card=document.createElement("div");
    card.classList.add("deal-card");

    card.innerHTML=` 
    <h3>${deal.name}</h3>
    <p><strong>Industry:</strong>${deal.industry}</p>
    <p><strong>Ask:</strong>${deal.ask}</p>
    <p><strong>Deal:</strong>${deal.deal}</p>
    <p><strong>Sharks:</strong>${deal.sharks}</p>
    <p><strong>Season:</strong>${deal.season}</p>
    `;
    dealscontainer.appendChild(card);
    
});
}

const pitches = [
    {
        name: "Skippi Ice Pops",
        founders: "Ravi & Anuja Kabra",
        industry: "Food & Beverages",
        ask: "₹45L for 5%",
        askValuation: "₹9 Cr",
        status: "Deal",
        summary: "India's first ice pops brand offering high-quality fruit flavors.",
        season: 1
    },
    {
        name: "Flatheads",
        founders: "Ganesh Balakrishnan",
        industry: "Footwear",
        ask: "₹75L for 3%",
        askValuation: "₹25 Cr",
        status: "No Deal",
        summary: "An emotional pitch for breathable bamboo sneakers; founders chose to pivot.",
        season: 2
    },
    {
        name: "Sippline",
        founders: "Rohit Warrier",
        industry: "Personal Hygiene",
        ask: "₹15L for 15%",
        askValuation: "₹1 Cr",
        status: "No Deal",
        summary: "A 'drinking shield' for glass rims that became a viral meme in Season 1.",
        season: 1
    },
    {
        name: "Snitch",
        founders: "Siddharth Dungarwal",
        industry: "Fashion",
        ask: "₹1.5Cr for 0.5%",
        askValuation: "₹300 Cr",
        status: "Deal",
        summary: "Fast-fashion brand for men that impressed all Sharks with high sales.",
        season: 2
    }
];
const pitchesGrid=document.getElementById("pitches-grid");
if(pitchesGrid){
    pitches.forEach(pitch =>{
        const card1=document.createElement("div");
        card1.classList.add("pitch-card");
        card1.innerHTML=`
    <h3>${pitch.name}</h3>
    <p><strong>Founders:</strong>${pitch.founders}</p>
    <p><strong>Industry:</strong>${pitch.industry}</p>
    <p><strong>Ask:</strong>${pitch.ask}</p>
    <p><strong>Deal:</strong>${pitch.askValuation}</p>
    <p><strong>Sharks:</strong>${pitch.status}</p>
    <p><strong>Sharks:</strong>${pitch.summary}</p>
    <p><strong>Season:</strong>${pitch.season}</p>
    `;
    pitchesGrid.appendChild(card1);
    });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
