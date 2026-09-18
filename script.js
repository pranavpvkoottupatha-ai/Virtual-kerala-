/* =========================================
   VIRTUAL KERALA V1
   ========================================= */


/* DISTRICT DATA */

const districts = [

    {
        name: "Thiruvananthapuram",
        icon: "🏛️",
        hq: "Thiruvananthapuram",
        famous: "Capital city, beaches and temples",
        description:
            "The southernmost district of Kerala and home to the state's capital city.",
        places: [
            "Kovalam",
            "Padmanabhaswamy Temple",
            "Varkala",
            "Neyyar Dam",
            "Poovar"
        ]
    },

    {
        name: "Kollam",
        icon: "🚤",
        hq: "Kollam",
        famous: "Backwaters, beaches and cashew",
        description:
            "A coastal district known for its backwaters, beaches, historic sites and cashew industry.",
        places: [
            "Ashtamudi Lake",
            "Thenmala",
            "Jatayu Earth Center",
            "Kollam Beach",
            "Palaruvi"
        ]
    },

    {
        name: "Pathanamthitta",
        icon: "⛩️",
        hq: "Pathanamthitta",
        famous: "Sabarimala and pilgrimage",
        description:
            "A district known for forests, rivers and important pilgrimage destinations.",
        places: [
            "Sabarimala",
            "Gavi",
            "Aranmula",
            "Konni",
            "Perunthenaruvi"
        ]
    },

    {
        name: "Alappuzha",
        icon: "🛶",
        hq: "Alappuzha",
        famous: "Backwaters and houseboats",
        description:
            "Often associated with Kerala's famous backwaters, canals and houseboat tourism.",
        places: [
            "Alappuzha Backwaters",
            "Kuttanad",
            "Marari Beach",
            "Pathiramanal",
            "Alappuzha Beach"
        ]
    },

    {
        name: "Kottayam",
        icon: "🌴",
        hq: "Kottayam",
        famous: "Rubber plantations and Kumarakom",
        description:
            "A green district surrounded by hills, plantations and waterways.",
        places: [
            "Kumarakom",
            "Vagamon",
            "Illikkal Kallu",
            "Kottathavalam",
            "Meenachil"
        ]
    },

    {
        name: "Idukki",
        icon: "⛰️",
        hq: "Painavu",
        famous: "Mountains, dams and wildlife",
        description:
            "A mountainous district famous for forests, wildlife, tea plantations and major dams.",
        places: [
            "Munnar",
            "Thekkady",
            "Idukki Dam",
            "Eravikulam",
            "Vagamon"
        ]
    },

    {
        name: "Ernakulam",
        icon: "🏙️",
        hq: "Kakkanad",
        famous: "Kochi and urban culture",
        description:
            "A major commercial and urban district centered around Kochi.",
        places: [
            "Fort Kochi",
            "Mattancherry",
            "Marine Drive",
            "Cherai Beach",
            "Hill Palace"
        ]
    },

    {
        name: "Thrissur",
        icon: "🐘",
        hq: "Thrissur",
        famous: "Festivals and cultural heritage",
        description:
            "Known as an important cultural center of Kerala and home to major festivals.",
        places: [
            "Thrissur Pooram",
            "Athirappilly",
            "Vadakkunnathan Temple",
            "Guruvayur",
            "Vazhachal"
        ]
    },

    {
        name: "Palakkad",
        icon: "🌾",
        hq: "Palakkad",
        famous: "Palakkad Fort and Palakkad Gap",
        description:
            "A district of plains, mountains, forests and agricultural landscapes.",
        places: [
            "Palakkad Fort",
            "Silent Valley",
            "Malampuzha",
            "Nelliyampathy",
            "Parambikulam"
        ]
    },

    {
        name: "Malappuram",
        icon: "🌿",
        hq: "Malappuram",
        famous: "Hills, rivers and cultural heritage",
        description:
            "A northern Kerala district with hills, rivers, historic places and cultural traditions.",
        places: [
            "Kottakkunnu",
            "Nilambur",
            "Teak Museum",
            "Adyanpara",
            "Kadalundi"
        ]
    },

    {
        name: "Kozhikode",
        icon: "🌊",
        hq: "Kozhikode",
        famous: "Historic port and food",
        description:
            "A historic coastal city associated with trade, culture and famous Malabar cuisine.",
        places: [
            "Kozhikode Beach",
            "Kappad",
            "Beypore",
            "Mananchira",
            "Sarovaram"
        ]
    },

    {
        name: "Wayanad",
        icon: "🐘",
        hq: "Kalpetta",
        famous: "Forests, hills and wildlife",
        description:
            "A highland district famous for forests, wildlife, caves and scenic hills.",
        places: [
            "Edakkal Caves",
            "Soochipara Falls",
            "Banasura Sagar",
            "Chembra Peak",
            "Tholpetty"
        ]
    },

    {
        name: "Kannur",
        icon: "🎭",
        hq: "Kannur",
        famous: "Theyyam and beaches",
        description:
            "A northern coastal district known for beaches, forts and traditional Theyyam performances.",
        places: [
            "Muzhappilangad Beach",
            "St. Angelo Fort",
            "Payyambalam",
            "Theyyam",
            "Aralam"
        ]
    },

    {
        name: "Kasaragod",
        icon: "🏰",
        hq: "Kasaragod",
        famous: "Bekal Fort and beaches",
        description:
            "Kerala's northernmost district, known for forts, beaches and diverse cultural traditions.",
        places: [
            "Bekal Fort",
            "Bekal Beach",
            "Ranipuram",
            "Ananthapura Lake Temple",
            "Kappil Beach"
        ]
    }

];


/* CATEGORY DATA */

const categories = {

    tourism: {
        icon: "🏞️",
        title: "Kerala Tourism",
        description:
            "Explore some of Kerala's famous destinations.",
        items: [
            "Munnar",
            "Alappuzha Backwaters",
            "Wayanad",
            "Kovalam",
            "Varkala",
            "Thekkady",
            "Athirappilly",
            "Bekal",
            "Fort Kochi",
            "Vagamon"
        ]
    },

    food: {
        icon: "🍛",
        title: "Kerala Food",
        description:
            "Kerala has a rich food culture with regional specialties.",
        items: [
            "Sadya",
            "Puttu",
            "Appam",
            "Kerala Parotta",
            "Malabar Biryani",
            "Fish Curry",
            "Palada Payasam",
            "Unniyappam",
            "Banana Chips",
            "Pathiri"
        ]
    },

    culture: {
        icon: "🎭",
        title: "Kerala Culture",
        description:
            "Discover traditional art forms and cultural celebrations.",
        items: [
            "Kathakali",
            "Mohiniyattam",
            "Theyyam",
            "Koodiyattam",
            "Chakyar Koothu",
            "Thiruvathira",
            "Chenda Melam",
            "Onam",
            "Vishu",
            "Thrissur Pooram"
        ]
    },

    history: {
        icon: "📚",
        title: "Kerala History",
        description:
            "Explore important parts of Kerala's historical story.",
        items: [
            "Ancient trade",
            "Spice trade",
            "Muziris",
            "European arrival",
            "Colonial period",
            "Travancore",
            "Cochin",
            "Malabar",
            "Formation of Kerala",
            "Modern Kerala"
        ]
    },

    transport: {
        icon: "🚆",
        title: "Kerala Transport",
        description:
            "Kerala has road, rail, air and water transport networks.",
        items: [
            "Indian Railways",
            "KSRTC",
            "Kochi Metro",
            "Kochi Water Metro",
            "Cochin International Airport",
            "Trivandrum International Airport",
            "Calicut International Airport",
            "Kannur International Airport"
        ]
    },

    nature: {
        icon: "🌿",
        title: "Kerala Nature",
        description:
            "Kerala has forests, mountains, rivers, wetlands and coastline.",
        items: [
            "Western Ghats",
            "Backwaters",
            "Rainforests",
            "Tea plantations",
            "Wildlife sanctuaries",
            "Waterfalls",
            "Beaches",
            "Mangroves"
        ]
    }

};


/* DISPLAY DISTRICTS */

function displayDistricts(list = districts) {

    const grid = document.getElementById("districtGrid");

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:40px;
            ">
                <h3>District not found 😕</h3>
                <p>Try another district name.</p>
            </div>
        `;

        return;
    }


    list.forEach((district, index) => {

        const card = document.createElement("div");

        card.className = "district-card";

        card.innerHTML = `

            <div class="district-icon">
                ${district.icon}
            </div>

            <h3>${district.name}</h3>

            <p>${district.famous}</p>

        `;

        card.onclick = () => openDistrict(index);

        grid.appendChild(card);

    });

}


/* SEARCH */

function searchDistricts() {

    const search =
        document
            .getElementById("districtSearch")
            .value
            .toLowerCase()
            .trim();


    const filtered = districts.filter(district =>
        district.name.toLowerCase().includes(search)
    );


    displayDistricts(filtered);

}


/* OPEN DISTRICT */

function openDistrict(index) {

    const district = districts[index];

    document.getElementById("modalIcon").textContent =
        district.icon;

    document.getElementById("modalTitle").textContent =
        district.name;

    document.getElementById("modalDescription").textContent =
        district.description;

    document.getElementById("modalHQ").textContent =
        district.hq;

    document.getElementById("modalFamous").textContent =
        district.famous;


    const places =
        document.getElementById("modalPlaces");

    places.innerHTML = "";


    district.places.forEach(place => {

        const element = document.createElement("span");

        element.className = "place";

        element.textContent = place;

        places.appendChild(element);

    });


    document
        .getElementById("districtModal")
        .classList.add("show");

}


/* CLOSE DISTRICT MODAL */

function closeModal() {

    document
        .getElementById("districtModal")
        .classList.remove("show");

}


/* CATEGORY */

function showCategory(categoryName) {

    const category = categories[categoryName];

    if (!category) return;


    document.getElementById("categoryIcon").textContent =
        category.icon;

    document.getElementById("categoryTitle").textContent =
        category.title;

    document.getElementById("categoryDescription").textContent =
        category.description;


    const container =
        document.getElementById("categoryItems");

    container.innerHTML = "";


    category.items.forEach(item => {

        const element = document.createElement("div");

        element.className = "category-item";

        element.textContent = item;

        container.appendChild(element);

    });


    document
        .getElementById("categoryModal")
        .classList.add("show");

}


/* CLOSE CATEGORY */

function closeCategoryModal() {

    document
        .getElementById("categoryModal")
        .classList.remove("show");

}


/* SCROLL FUNCTIONS */

function scrollToDistricts() {

    document
        .getElementById("districts")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToExplore() {

    document
        .getElementById("explore")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* DARK MODE */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "virtualKeralaTheme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "virtualKeralaTheme",
            "light"
        );

    }

});


/* LOAD SAVED THEME */

if (
    localStorage.getItem("virtualKeralaTheme")
    === "dark"
) {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


/* CLOSE MODALS WHEN CLICKING OUTSIDE */

window.addEventListener("click", event => {

    const districtModal =
        document.getElementById("districtModal");

    const categoryModal =
        document.getElementById("categoryModal");


    if (event.target === districtModal) {
        closeModal();
    }


    if (event.target === categoryModal) {
        closeCategoryModal();
    }

});


/* ESC KEY */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

        closeCategoryModal();

    }

});


/* START WEBSITE */

displayDistricts();
