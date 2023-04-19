// Selectors

const cardContainer=document.querySelector('.card-container');
const totalNoOfCartItem=document.querySelector('.totalNoOfCartItem');

let data=[];
function callImageApi(){
    let h="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    fetch(h)
        .then((res)=>{return res.json()})
        .then((res)=>{
            // console.log((res.drinks[0]).strImageSource);
            // console.log(strImageSource)
            data=[...res['drinks']]
            // for(let i=0;i<res.drinks.length;i++){
            //     
            //     console.log(strDrinkThumb);
            //     cardContainer.innerHTML+=createCard(strDrinkThumb,strDrink,strInstructionsIT);
            // }
        })
        .then(()=>{
            console.log(data);
            addCard();
        });
}
callImageApi();
function addCard(){
    for(let i=0;i<data.length;i++){
        let{strDrinkThumb,strInstructionsIT,strDrink,idDrink}=data[i];
        cardContainer.innerHTML+=createCard(strDrinkThumb,strDrink,strInstructionsIT,idDrink);
    }
    changeCartNo();
}
// addCard();
// console.log("jaihind kushwaha")



function createCard(imgSrc,title,desc,id){
    // This is a longer card with supporting text below as a natural lead-in to additional content.
    // https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg
    let el=`<div class="col">
    <div class="card h-100" >
      <img src="${imgSrc}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p>
          <button class="save-in-cart btn btn-outline-secondary" id=${id}>Add To Cart</button>
      </div>
    </div>
  </div>`
  return el;
}
// Cart No update;

let totalNo=[];
function changeCartNo(){
    const saveInCartBtn=document.querySelectorAll('.save-in-cart');
    saveInCartBtn.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            totalNo=[...(new Set([...totalNo,e.target.id]))]
            totalNoOfCartItem.innerHTML=totalNo.length;
        })
    })
}


