const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navLinks');
const gallery = document.querySelector('.gallery');
const title = document.querySelector('main h2');

document.querySelector("#currentyear").innerHTML = `${new Date().getFullYear()}`;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const clones = [
    {
        cloneName: "Captain Rex",
        squad: "501st Battalion",
        commanding_officer: "Anakin Skywalker",
        CT_Number: 7567,
        imageUrl: "images/rex-gallery.webp"
    },
    {
        cloneName: "Commander Cody",
        squad: "212th Attack Battalion",
        commanding_officer: "Obi-Wan Kenobi",
        CT_Number: 2224,
        imageUrl: "images/cody-gallery.webp"
    },
    {
        cloneName: "Waxer",
        squad: "212th Attack Battalion",
        commanding_officer: "Obi-Wan Kenobi",
        CT_Number: 7561,
        imageUrl: "images/waxer-gallery.webp"
    },
    {
        cloneName: " ARC Trooper Fives",
        squad: "501st Battalion",
        commanding_officer: "Anakin Skywalker",
        CT_Number: 5555,
        imageUrl: "images/fives-gallery.webp"
    },
    {
        cloneName: "Hunter",
        squad: "Bad Batch",
        commanding_officer: "Self",
        CT_Number: 9901,
        imageUrl: "images/hunter-gallery.webp"
    },
    {
        cloneName: "Wrecker",
        squad: "Bad Batch",
        commanding_officer: "Self",
        CT_Number: 9902,
        imageUrl: "images/wrecker-gallery.webp"
    },
    {
        cloneName: "Tech",
        squad: "Bad Batch",
        commanding_officer: "Self",
        CT_Number: 9903,
        imageUrl: "images/tech-gallery.webp"
    },
    {
        cloneName: "Crosshair",
        squad: "Bad Batch",
        commanding_officer: "Self",
        CT_Number: 9904,
        imageUrl: "images/crosshair-gallery.webp"
    },
    {
        cloneName: "Echo",
        squad: "Bad Batch",
        commanding_officer: "Self",
        CT_Number: 1409,
        imageUrl: "images/echo-gallery.webp"
    }
];

function renderClones(filteredClones) {
    gallery.innerHTML = '';
    filteredClones.forEach(clone => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const figcaption = document.createElement('figcaption');
        const img = document.createElement('img');

        figcaption.innerHTML = `
            <h3>${clone.cloneName}</h3>
            <div><span>Squad:</span> ${clone.squad}</div>
            <div><span>CO:</span> ${clone.commanding_officer}</div>
            <div><span>CT Number:</span> ${clone.CT_Number}</div>
        `;

        img.src = clone.imageUrl;
        img.alt = clone.cloneName;
        img.loading = 'lazy';
        img.width = 320;
        img.height = 200;

        cardContent.appendChild(figcaption);
        card.appendChild(cardContent);
        card.appendChild(img);
        gallery.appendChild(card);
    });
}

renderClones(clones);

navigation.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');

        if (href === 'project.html') {
            // Allow default navigation behavior for Home link
            return; 
        }

        // Prevent default behavior for other links
        event.preventDefault();

        let filteredClones;
        let filterName = event.target.textContent;
        switch (event.target.dataset.filter) {
            case '501':
                filteredClones = clones.filter(clone => clone.squad.includes('501'));
                break;
            case '222':
                filteredClones = clones.filter(clone => clone.squad.includes('212'));
                break;
            case 'badbatch':
                filteredClones = clones.filter(clone => clone.squad.includes('Bad Batch'));
                break;
            default:
                filteredClones = clones;
                filterName = 'All';
                break;
        }

        renderClones(filteredClones);
        title.textContent = filterName;
    }
});
