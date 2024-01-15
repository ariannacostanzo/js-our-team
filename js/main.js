const logSomething = (something) => console.log(something);


//prendo gli elementi che mi servono

const row = document.querySelector('.row');

const employees = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

//creo un inizio di card
let card = '';

//in un ciclo di 6(ovvero la lunghezza del mio array)
for (let employee of employees) {
    
    //creo tanti div .col con dentro i dati dinamici presi dagli objects dentro l'array
    card += 
    `<div class="col">
        <div class="my-card">
            <img src="../images/${employee.image}">
            <p class="employee-name">${employee.name}</p>
            <p class="employee-role">${employee.role}</p>
        </div> 
    </div>`


}


//li appendo alla row
row.innerHTML = card