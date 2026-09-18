/* =====================================================
   VIRTUAL KERALA V2
   ===================================================== */


/* =====================================================
   DISTRICTS
   ===================================================== */

const districts = [

    {
        name: "Thiruvananthapuram",
        icon: "🏛️",
        hq: "Thiruvananthapuram",
        famous: "Capital city and beaches",
        description: "The southernmost district of Kerala and home to the state's capital.",
        places: [
            "Kovalam",
            "Varkala",
            "Poovar",
            "Neyyar Dam",
            "Padmanabhaswamy Temple"
        ]
    },

    {
        name: "Kollam",
        icon: "🚤",
        hq: "Kollam",
        famous: "Backwaters and cashew",
        description: "A coastal district known for backwaters, beaches and traditional industries.",
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
        famous: "Pilgrimage and forests",
        description: "A district with forests, rivers and important pilgrimage destinations.",
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
        description: "Famous for its extensive backwaters, canals, beaches and houseboat tourism.",
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
        famous: "Rubber and Kumarakom",
        description: "A green district known for plantations, waterways and scenic highlands.",
        places: [
            "Kumarakom",
            "Vagamon",
            "Illikkal Kallu",
            "Meenachil",
            "Kottathavalam"
        ]
    },

    {
        name: "Idukki",
        icon: "⛰️",
        hq: "Painavu",
        famous: "Mountains and wildlife",
        description: "A mountainous district famous for forests, wildlife, plantations and dams.",
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
        famous: "Kochi and commerce",
        description: "A major urban and commercial district centered around Kochi.",
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
        famous: "Culture and festivals",
        description: "A major cultural center of Kerala with important temples and festivals.",
        places: [
            "Thrissur Pooram",
            "Athirappilly",
            "Guruvayur",
            "Vazhachal",
            "Vadakkunnathan Temple"
        ]
    },

    {
        name: "Palakkad",
        icon: "🌾",
        hq: "Palakkad",
        famous: "Palakkad Gap and agriculture",
        description: "A district of plains, mountains, forests and agricultural landscapes.",
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
        famous: "Hills and cultural heritage",
        description: "A northern district known for hills, rivers, history and cultural traditions.",
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
        famous: "Historic port and cuisine",
        description: "A historic coastal district associated with trade, culture and Malabar cuisine.",
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
        famous: "Hills and wildlife",
        description: "A highland district known for forests, wildlife, caves and scenic hills.",
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
        description: "A northern coastal district known for beaches, forts and Theyyam.",
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
        famous: "Bekal Fort",
        description: "Kerala's northernmost district, known for forts, beaches and cultural diversity.",
        places: [
            "Bekal Fort",
            "Bekal Beach",
            "Ranipuram",
            "Ananthapura Lake Temple",
            "Kappil Beach"
        ]
    }

];


/* =====================================================
   DESTINATIONS
   ===================================================== */

const destinations = [

    {
        name: "Munnar",
        lat: 10.0889,
        lng: 77.0595,
        icon: "⛰️",
        category: "hill",
        district: "Idukki",
        description: "A famous highland destination known for tea plantations, mountains and cool climate."
    },

    {
        name: "Wayanad",
        lat: 11.6854,
        lng: 76.1320,
        icon: "🌿",
        category: "wildlife",
        district: "Wayanad",
        description: "A scenic highland region with forests, wildlife, waterfalls and caves."
    },

    {
        name: "Alappuzha Backwaters",
        lat: 9.4981,
        lng: 76.3388,
        icon: "🛶",
        category: "water",
        district: "Alappuzha",
        description: "A network of lakes, canals and waterways famous for houseboat tourism."
    },

    {
        name: "Kovalam",
        lat: 8.4004,
        lng: 76.9787,
        icon: "🏖️",
        category: "beach",
        district: "Thiruvananthapuram",
        description: "A popular coastal destination known for its beaches and lighthouse."
    },

    {
        name: "Varkala",
        lat: 8.7379,
        lng: 76.7163,
        icon: "🏖️",
        category: "beach",
        district: "Thiruvananthapuram",
        description: "A coastal destination famous for its dramatic cliff and beach."
    },

    {
        name: "Fort Kochi",
        lat: 9.9658,
        lng: 76.2421,
        icon: "🏛️",
        category: "culture",
        district: "Ernakulam",
        description: "A historic area of Kochi known for heritage architecture and cultural landmarks."
    },

    {
        name: "Athirappilly",
        lat: 10.2850,
        lng: 76.5690,
        icon: "💧",
        category: "nature",
        district: "Thrissur",
        description: "A famous waterfall and forest destination in Thrissur district."
    },

    {
        name: "Thekkady",
        lat: 9.6031,
        lng: 77.1610,
        icon: "🐘",
        category: "wildlife",
        district: "Idukki",
        description: "A popular nature and wildlife destination near the Periyar region."
    },

    {
        name: "Bekal Fort",
        lat: 12.3916,
        lng: 75.0312,
        icon: "🏰",
        category: "culture",
        district: "Kasaragod",
        description: "A major historic fort located on the northern Kerala coast."
    },

    {
        name: "Kozhikode Beach",
        lat: 11.2588,
        lng: 75.7804,
        icon: "🏖️",
        category: "beach",
        district: "Kozhikode",
        description: "A popular beach destination in the historic Malabar city of Kozhikode."
    },

    {
        name: "Vagamon",
        lat: 9.6862,
        lng: 76.9045,
        icon: "⛰️",
        category: "hill",
        district: "Idukki",
        description: "A scenic hill destination surrounded by green landscapes."
    },

    {
        name: "Palakkad Fort",
        lat: 10.7750,
        lng: 76.6510,
        icon: "🏰",
        category: "culture",
        district: "Palakkad",
        description: "A historic fort located in the heart of Palakkad."
    },

    {
        name: "Kumarakom",
        lat: 9.6170,
        lng: 76.4300,
        icon: "🛶",
        category: "water",
        district: "Kottayam",
        description: "A backwater destination on the shores of Vembanad Lake."
    },

    {
        name: "Marari Beach",
        lat: 9.6030,
        lng: 76.2900,
        icon: "🏖️",
        category: "beach",
        district: "Alappuzha",
        description: "A peaceful coastal destination near Alappuzha."
    },

    {
        name: "Silent Valley",
        lat: 11.0660,
        lng: 76.4280,
        icon: "🌳",
        category: "wildlife",
        district: "Palakkad",
        description: "A protected forest region in the Western Ghats."
    },

    {
        name: "Guruvayur",
        lat: 10.5940,
        lng: 76.0410,
        icon: "🛕",
        category: "culture",
        district: "Thrissur",
        description: "A major pilgrimage destination in central Kerala."
    },

    {
        name: "Poovar",
        lat: 8.3175,
        lng: 77.0680,
        icon: "🛶",
        category: "water",
        district: "Thiruvananthapuram",
        description: "A coastal destination known for its estuary and waterways."
    },

    {
        name: "Thenmala",
        lat: 8.9590,
        lng: 77.0670,
        icon: "🌿",
        category: "nature",
        district: "Kollam",
        description: "A nature destination surrounded by forests and hills."
    },

    {
        name: "Kappad",
        lat: 11.4300,
        lng: 75.6800,
        icon: "🏖️",
        category: "beach",
        district: "Kozhikode",
        description: "A historic coastal destination near Kozhikode."
    },

    {
        name: "Nelliyampathy",
        lat: 10.5300,
        lng: 76.6900,
        icon: "⛰️",
        category: "hill",
        district: "Palakkad",
        description: "A scenic hill region with plantations, forests and viewpoints."
    }

];


/* =====================================================
   CATEGORIES
   ===================================================== */

const categories = {

    tourism: {
        icon: "🏞️",
        title: "Kerala Tourism",
        description: "Discover Kerala's famous destinations.",
        items: [
            "Munnar",
            "Wayanad",
            "Alappuzha",
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
        description: "Explore popular dishes associated with Kerala cuisine.",
        items: [
            "Sadya",
            "Puttu",
            "Appam",
            "Parotta",
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
        description: "Discover Kerala's traditional arts and festivals.",
        items: [
            "Kathakali",
            "Mohiniyattam",
            "Theyyam",
            "Koodiyattam",
            "Thiruvathira",
            "Chenda Melam",
            "Onam",
            "Vishu",
            "Thrissur Pooram",
            "Boat Races"
        ]
    },

    history: {
        icon: "📚",
        title: "Kerala History",
        description: "Explore important themes in Kerala's history.",
        items: [
            "Ancient trade",
            "Spice trade",
            "Muziris",
            "European arrival",
            "Travancore",
            "Cochin",
            "Malabar",
            "Colonial period",
            "Formation of Kerala",
            "Modern Kerala"
        ]
    },

    nature: {
        icon: "🌿",
        title: "Kerala Nature",
        description: "Explore Kerala's diverse landscapes.",
        items: [
            "Western Ghats",
            "Rainforests",
            "Backwaters",
            "Waterfalls",
            "Beaches",
            "Tea plantations",
            "Wildlife",
            "Mangroves"
        ]
    },

    transport: {
        icon: "🚆",
        title: "Kerala Transport",
        description: "Explore major transportation systems.",
        items: [
            "Indian Railways",
            "KSRTC",
            "Kochi Metro",
            "Kochi Water Metro",
            "Trivandrum Airport",
            "Cochin Airport",
            "Calicut Airport",
            "Kannur Airport"
        ]
    }

};


/* =====================================================
   MAP
   ===================================================== */

let map;

let markerLayer;

let markerObjects = [];

let selectedDestination = null;


/* INITIALIZE MAP */

function initializeMap() {

    map = L.map("map").setView(
        [10.45, 76.5],
        7.5
    );


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);


    markerLayer = L.layerGroup().addTo(map);


    destinations.forEach(
        destination => addDestinationMarker(destination)
    );


    setTimeout(() => {
        map.invalidateSize();
    }, 300);

}


/* ADD MARKER */

function addDestinationMarker(destination) {

    const marker =
        L.marker(
            [
                destination.lat,
                destination.lng
            ]
        );


    marker.bindPopup(`

        <div class="map-popup">

            <strong>
                ${destination.icon}
                ${destination.name}
            </strong>

            <br>

            <small>
                ${destination.district}
            </small>

            <br><br>

            <button
                onclick="openDestination('${destination.name}')"
                style="
                    border:none;
                    padding:8px 12px;
                    border-radius:15px;
                    background:#087f45;
                    color:white;
                    cursor:pointer;
                "
            >
                Explore
            </button>

        </div>

    `);


    markerObjects.push({
        marker: marker,
        destination: destination
    });


    marker.addTo(markerLayer);

}


/* FILTER MAP */

function filterMap(category) {

    markerObjects.forEach(object => {

        const shouldShow =
            category === "all" ||
            object.destination.category === category;


        if (shouldShow) {

            if (!markerLayer.hasLayer(object.marker)) {
                object.marker.addTo(markerLayer);
            }

        } else {

            if (markerLayer.hasLayer(object.marker)) {
                markerLayer.removeLayer(object.marker);
            }

        }

    });

}


/* FILTER BUTTONS */

document
    .querySelectorAll(".filter-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter-button")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            filterMap(
                button.dataset.category
            );

        });

    });


/* =====================================================
   DISTRICT DISPLAY
   ===================================================== */

function displayDistricts(list = districts) {

    const grid =
        document.getElementById("districtGrid");

    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:40px;
            ">
                <h3>District not found 😕</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;

    }


    list.forEach(district => {

        const card =
            document.createElement("article");

        card.className = "district-card";


        card.innerHTML = `

            <div class="district-card-icon">
                ${district.icon}
            </div>

            <h3>
                ${district.name}
            </h3>

            <p>
                ${district.famous}
            </p>

        `;


        card.addEventListener(
            "click",
            () => openDistrict(district)
        );


        grid.appendChild(card);

    });

}


/* SEARCH DISTRICTS */

function searchDistricts() {

    const value =
        document
            .getElementById("districtSearch")
            .value
            .toLowerCase()
            .trim();


    const filtered =
        districts.filter(
            district =>
                district.name
                    .toLowerCase()
                    .includes(value)
        );


    displayDistricts(filtered);

}


/* =====================================================
   DISTRICT MODAL
   ===================================================== */

function openDistrict(district) {

    document.getElementById(
        "districtModalIcon"
    ).textContent = district.icon;


    document.getElementById(
        "districtModalTitle"
    ).textContent = district.name;


    document.getElementById(
        "districtModalDescription"
    ).textContent = district.description;


    document.getElementById(
        "districtModalHQ"
    ).textContent = district.hq;


    document.getElementById(
        "districtModalFamous"
    ).textContent = district.famous;


    const container =
        document.getElementById(
            "districtModalPlaces"
        );


    container.innerHTML = "";


    district.places.forEach(place => {

        const tag =
            document.createElement("span");

        tag.className = "place-tag";

        tag.textContent = place;

        tag.onclick = () =>
            openDestination(place);

        tag.style.cursor = "pointer";

        container.appendChild(tag);

    });


    document
        .getElementById("districtModal")
        .classList.add("show");

}


function closeDistrictModal() {

    document
        .getElementById("districtModal")
        .classList.remove("show");

}


/* =====================================================
   DESTINATION MODAL
   ===================================================== */

function openDestination(name) {

    const destination =
        destinations.find(
            item => item.name === name
        );


    if (!destination) {

        const fallback =
            destinations.find(
                item =>
                    item.name
                        .toLowerCase()
                        .includes(
                            name.toLowerCase()
                        )
            );

        if (!fallback) return;

        destination = fallback;

    }


    selectedDestination = destination;


    docu
