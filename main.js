
// Start nav btn close And menu --->
let menu = document.querySelector(".nav-right :first-child");
let close = document.querySelector("nav .nav-right .links-nav img");
let navLinks = document.querySelector("nav .nav-right .links-nav");
menu.onclick =()=>{
    navLinks. style .left= "0";
}
close.onclick = ()=>{
    navLinks. style .left= "-50%";
}// End nav btn close And menu <---


//Start carte btn:next and btnPrevious --->
let btnNext = document.querySelector("aside .products_img :nth-child(3)");
let btnPrevious = document.querySelector("aside .products_img :nth-child(2)");
let matherImg = document.querySelector("aside .products_img :first-child");
let srcImags =["image-product-1-thumbnail.jpg" ,"image-product-2-thumbnail.jpg" ,"image-product-3-thumbnail.jpg" ,"image-product-4-thumbnail.jpg" ];
let numImg = 0;
 btnNext.onclick = ()=>{
  
    if(numImg < 3){
        numImg++;
        matherImg.src = `projects/images/${srcImags[numImg]}`
    }
}
 btnPrevious.onclick = ()=>{
    
    if(numImg > 0){
        numImg--;
        matherImg.src = `projects/images/${ srcImags[numImg]}`
    }
}

// // Start show images on the screen 
// let AllSmallImgs = document.querySelectorAll(".smallProducts_img img");

// for(let i = 0; i< AllSmallImgs.length; i++){
//     AllSmallImgs[i].onclick = ()=> {
//         matherImg.src = `projects/images/${ AllSmallImgs[i]}`;
//     }
// }// End show images on the screen 

//End creat btn:next and btnPrevious <---



// Start mins and blus 
let plus = document.querySelector(".add_products .plus_add :first-child");
let num = document.querySelector(".add_products .plus_add :nth-child(2)");
let minus = document.querySelector(".add_products .plus_add :nth-child(3)");
let count = 0;
plus.onclick = ()=>{
    if(count < 4){
        count++;
        num.innerHTML = count;   
    }
}
minus.onclick = ()=>{
    if(count > 0){
        count--;
        num.innerHTML = count;
    }

}// End mins and blus 


//start Add to cart
let buttonAddToCart = document.querySelector(".all-btn .addToCard button");
let numPasket = document.querySelector("nav .nav-left .num");

buttonAddToCart.onclick = ()=>{
    if(count > 0){
        numPasket.style.display = "block";
        numPasket.innerHTML = count;
    }else if(count <= 0){
        numPasket.style.display = "none";
    }
    showData ();
}//End Add to cart


// Start Show Cart 
let showPasket = document.querySelector("nav .nav-left :first-child");
let cartFull = document .querySelector (".cart");
let cartEmpty =document.querySelector("body .empty");
let productsInCart  = document.querySelector(".num-productsInCart");
let totalPrice  = document.querySelector(".totalPrice");
let Delete = document.querySelector(".img_delete");

showPasket.onclick =()=>{
    showData ()
}


 function showData (){
    cartEmpty.classList.toggle("empty-toggle");
    if(count > 0){
        cartEmpty.style.display = "none";
        cartFull.style.display = "block";
        productsInCart.innerHTML = count;
        totalPrice .innerHTML = `$ ${count * 125}.00` ;
        
showPasket.onclick =()=>{
    cartEmpty.style.display = "block"
    productsInCart.style.display = 0;
}
}

    Delete.onclick = () =>{
        cartFull.style.display = "none";
        count = "0";
     }
}// End Show Cart 



