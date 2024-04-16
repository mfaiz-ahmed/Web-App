// Phones started 

const phones = [
    {
        image: "./Assets/Mobile-1.webp",
        brand: 'Apple',
        model: 'Iphone 15 Pro Max',
        ram: "8 GB",
        rom: "256 GB",
        maincamera: '48 MP + 12 MP + 12 MP',
        frontCamera: '12 MP',
        price: "524,999" 
    },
    {
        image: "./Assets/Mobile-2.webp",
        brand: 'Samsung',
        model: 'S24 Ultra',
        ram: "12 GB",
        rom: "512 GB",
        maincamera: "200 MP + 50 MP + 10 MP",
        frontCamera: '12 MP',
        price: "474,999" 
    },
    {
        image: "./Assets/Mobile-3.webp",
        brand: 'Samsung',
        model: 'A15',
        ram: "3 GB",
        rom: "32 GB",
        maincamera: '50 MP + 5 MP + 2 MP',
        frontCamera: '13 MP',
        price: "12,499" 
    },
    {
        image: "./Assets/Mobile-4.jpg",
        brand: 'Oneplus',
        model: 'Oneplus 10 Pro',
        ram: "12 GB",
        rom: "256 GB",
        maincamera: '48 MP + 50 MP + 8 MP',
        frontCamera: '32 MP',
        price: "160,000" 
    },
    {
        image: "./Assets/Mobile-5.jpg",
        brand: 'Vivo',
        model: 'S1',
        ram: "8 GB",
        rom: "256 GB",
        maincamera: '16 MP + 8 MP + 5 MP',
        frontCamera: '32 MP',
        price: "32,500" 
    },
    {
        image: "./Assets/Mobile-6.png",
        brand: 'Apple',
        model: 'Iphone 14',
        ram: "6 GB",
        rom: "128 GB",
        maincamera: "48 MP",
        frontCamera: '12 MP',
        price: "168,000" 
    },
    {
        image: "./Assets/Mobile-7.png",
        brand: 'Samsung',
        model: 'A04',
        ram: "3 GB",
        rom: "32 GB",
        maincamera: '50 MP',
        frontCamera: '5 MP',
        price: "18,780" 
    },
    {
        image: "./Assets/Mobile-8.webp",
        brand: 'Realme',
        model: 'C67',
        ram: "8 GB",
        rom: "128 GB",
        maincamera: "108 MP + 2 MP",
        frontCamera: '8 MP',
        price: "474,999" 
    },
    {
        image: "./Assets/Mobile-9.webp",
        brand: 'Realme',
        model: 'C33',
        ram: "4 GB",
        rom: "64 GB",
        maincamera: '50 MP',
        frontCamera: '5 MP',
        price: "29,999" 
    },
    {
        image: "./Assets/Mobile-10.webp",
        brand: 'Samsung',
        model: 'Z Flip 4',
        ram: "8 GB",
        rom: "512 GB",
        maincamera: "12 MP + 12 MP",
        frontCamera: '10 MP',
        price: "249,999" 
    },
    {
        image: "./Assets/Mobile-11.webp",
        brand: 'Oppo',
        model: 'A18',
        ram: "4 GB",
        rom: "128 GB",
        maincamera: "8 MP + 2 MP",
        frontCamera: '5 MP',
        price: "474,999" 
    },
    {
        image: "./Assets/Mobile-12.webp",
        brand: 'Tecno',
        model: 'Spark 20 Pro Plus',
        ram: "8 GB",
        rom: "256 GB",
        maincamera: "108 MP + 2 MP",
        frontCamera: '32 MP',
        price: "49,999" 
    },
    {
        image: "./Assets/Mobile-13.png",
        brand: 'Oppo',
        model: 'F1S',
        ram: "4 GB",
        rom: "64 GB",
        maincamera: "13 MP",
        frontCamera: '16 MP',
        price: "17,999" 
    },
    {
        image: "./Assets/Mobile-14.webp",
        brand: 'Xiaomi',
        model: 'Redmi 13 C',
        ram: "6 GB",
        rom: "128 GB",
        maincamera: "8 MP",
        frontCamera: '8 MP',
        price: "474,999" 
    },
    {
        image: "./Assets/Mobile-15.webp",
        brand: 'Nokia',
        model: 'C22',
        ram: "4 GB",
        rom: "128 GB",
        maincamera: "13 MP",
        frontCamera: '8 MP',
        price: "24,499" 
    },
    

]


const showItems = document.querySelector('.showItems')

function renderItems(){
    phones.forEach((phones , index)=>{
        showItems.innerHTML +=`
        <div class="box">
                    <div class="box-content">
                      <img class="card-img-top" src="${phones.image}" alt="">
                      <p><span class="fw-bolder">Brand:</span> ${phones.brand}</p>
                      <p><span class="fw-bolder">Model:</span> ${phones.model}</p>
                      <p><span class="fw-bolder">Ram:</span> ${phones.ram}</p>
                      <p><span class="fw-bolder">Rom:</span> ${phones.rom}</p>
                      <p><span class="fw-bolder">Rear Camera:</span> ${phones.maincamera}</p>
                      <p><span class="fw-bolder">Front Camera:</span> ${phones.frontCamera}</p>
                      <p><span class="fw-bolder">Price:</span> Rs. ${phones.price} </p>
                      <button class="button mt-3" onclick="addToCart(${phones.image},${phones.brand},${phones.model},${phones.ram},${phones.rom},${phones.maincamera},${phones.frontCamera},${phones.price})">Add To Cart</button>
                    </div>
                  </div>` 
    })
}
renderItems()
