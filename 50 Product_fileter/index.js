const btns=document.querySelectorAll('.btn');
const storeProducts=document.querySelectorAll('.store-products');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click',function(e){
        const current =document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += " active";

        // Switch tab content
        const filter = e.target.dataset.filter;
        // console.log(filter);

    })
}