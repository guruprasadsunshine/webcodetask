


async function makeupapi(){    
try {

    let guru = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json") 
let product = await guru.json()
 console.log(product)

 product.forEach((make)=>{
    document.body.innerHTML += `
   
    <div class="guru m-2" >
           <h3> Brand :${make.brand} </h3>
           <h6> id no :${make.id}</h6>
  <div>  <img src="${make.image_link}" alt="img not found"> </div>
    <h4> Price : ${make.price} $</h4>
<p> <h4>Description :</h4>${make.description} </p>  
</div> `



})
}

catch(err){console.log("something went wrong"+err)}
}

makeupapi()




function search(){

let filter = document.querySelector(".filter").value
console.log(filter)


 }

