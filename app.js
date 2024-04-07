const phones = [
    {
        image: "./Assets/Mobile-1.webp",
        brand: 'Apple',
        model: 'Iphone 15 pro max',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    

]

for (let index = 0; index < phones.length; index++) {
    
}


const showDetails = document.querySelector('.showDetails')

function render(){
    showDetails.innerHTML = '';
    phones.forEach((phones , index)=>{
        showDetails.innerHTML +=`
        <div class="box">
                    <div class="box-content">
                      <img class="card-img-top" src="${phones.image}" alt="">
                      <p>Brand:${phones.brand}</p>
                      <p>Model:${phones.model}</p>
                      <p>Ram:${phones.ram}</p>
                      <p>Rom:${phones.rom}</p>
                      <p>Camera:${phones.camera}</p>
                      <p>Price:${phones.price}</p>
                      
                      <button class="button mt-3">Add To Cart</button>
                    </div>
                  </div>` 
    })
}

render()