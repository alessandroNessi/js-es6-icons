let coloredIcons=[];
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
categoryColors={
    animal: 'green',
    beverage: 'red',
    food: 'yellow'
};
mainContainer=document.getElementById("cardContainer");
addColorCategory();
writeStartingPage();

function writeStartingPage(){
    let alreadyCategory=[];
    document.getElementById("typeSelect").innerHTML+=`<option value="">all</option>`;
    coloredIcons.forEach((element)=>{
        mainContainer.innerHTML+=`<button class="card ${element.category}"><i style="color:${element.color};" class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></button>`;
        if(alreadyCategory.includes(element.category)==false){
            alreadyCategory.push(element.category);
            document.getElementById("typeSelect").innerHTML+=`<option value="${element.category}">${element.category}</option>`;
        }
    });
    console.log(coloredIcons);
}

function addColorCategory(){
    coloredIcons=icons.map((element)=>{
        return {...element,color: categoryColors[element.category]};
    });
}

function checkInput(){
    let result=true;
    let inputElements=document.getElementsByClassName("inputContainer")[0].getElementsByTagName("input");
    Array.prototype.forEach.call(inputElements,(element)=>{
        if(element.value.length<1 || element.value.length>50){
            result= false;
        }
    });
    return result;
}

document.getElementById("typeSelect").addEventListener("change",()=>{
    value=document.getElementById("typeSelect").value;
    const filteredIcons=coloredIcons.filter(element => (element.category==value||value==""));
    mainContainer.innerHTML="";
    filteredIcons.forEach((element)=>{
        mainContainer.innerHTML+=`<button style="color:${element.color};" class="card ${element.category}"><i class="${element.family} ${element.prefix}${element.name}"></i><p>${element.name}</p></button>`;
    });
});

document.getElementById("addNewCard").addEventListener("click", ()=>{
    if(checkInput()==true){
        alert("ok");
    }else{
        alert("not ok");
    }
});