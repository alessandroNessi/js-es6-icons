const icons = [
{
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
},
{
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
},
{
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
{
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
},
];
mainContainer=document.getElementById("cardContainer");
writeAll();
function writeAll(){
    icons.forEach((element)=>{
        mainContainer.innerHTML+=`<button class="card ${element.category}"><i class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></button>`;
    });
}

document.getElementById("typeSelect").addEventListener("change",(event)=>{
    value=document.getElementById("typeSelect").value;
    mainContainer.innerHTML="";
    if(value=="all"){
        writeAll();
    }else{
        const filteredIcons=icons.filter(element => element.category==value);
        filteredIcons.forEach((element)=>{
        mainContainer.innerHTML+=`<button class="card ${element.category}"><i class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></button>`;
    });
    }
});