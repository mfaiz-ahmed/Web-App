
// Tablets started 


const  tablets = [
    {
        image: "./Assets/Tablet-1.webp",
        brand: 'Apple',
        model: 'Ipad Pro 4th Generation',
        ram: "6 GB",
        rom: "256 GB",
        maincamera: '12 MP + 10 MP',
        frontCamera: '12 MP',
        price: "287,999" 
    },
    {
        image: "./Assets/Tablet-2.webp",
        brand: 'Samsung',
        model: 'Tab A7 Lite',
        ram: "3 GB",
        rom: "32 GB",
        maincamera: '8 MP',
        frontCamera: '2 MP',
        price: "29,999" 
    },
    {
        image: "./Assets/Tablet-3.webp",
        brand: 'Amazon',
        model: 'Fire 7',
        ram: "1 GB",
        rom: "8 GB",
        maincamera: '2 MP',
        frontCamera: '0.9 MP',
        price: "8,749" 
    },
    {
        image: "./Assets/Tablet-4.webp",
        brand: 'Dany',
        model: 'Signature S8',
        ram: "4 GB",
        rom: "64 GB",
        maincamera: '8 MP',
        frontCamera: '5 MP',
        price: "28,799" 
    },
    {
        image: "./Assets/Tablet-5.webp",
        brand: 'QTab',
        model: 'Y3',
        ram: "3 GB",
        rom: "32 GB",
        maincamera: '5 MP',
        frontCamera: '5 MP',
        price: "15,199" 
    },
    {
        image: "./Assets/Tablet-6.webp",
        brand: 'Samsung',
        model: 'Tab S6 Lite',
        ram: "4 GB",
        rom: "64 GB",
        maincamera: '8 MP',
        frontCamera: '5 MP',
        price: "76,499" 
    },
    {
        image: "./Assets/Tablet-7.webp",
        brand: 'Oppo',
        model: 'Pad Air',
        ram: "4 GB",
        rom: "64 GB",
        maincamera: '8 MP',
        frontCamera: '5 MP',
        price: "29,999" 
    },
    {
        image: "./Assets/Tablet-8.webp",
        brand: 'Apple',
        model: 'Ipad Mini 2',
        ram: "1 GB",
        rom: "16 GB",
        maincamera: '5 MP',
        frontCamera: '1.2 MP',
        price: "14,000" 
    },
    {
        image: "./Assets/Tablet-9.webp",
        brand: 'Vivo',
        model: 'Pad 11',
        ram: "8 GB",
        rom: "256 GB",
        maincamera: '13 MP + 8 MP',
        frontCamera: '8 MP',
        price: "63,999" 
    },
    {
        image: "./Assets/Tablet-10.jpeg",
        brand: 'LG',
        model: 'Gpad 5',
        ram: "4 GB",
        rom: "32 GB",
        maincamera: '8 MP',
        frontCamera: '5 MP',
        price: "28,999" 
    },
    {
        image: "./Assets/Tablet-11.webp",
        brand: 'Nokia',
        model: 'Tab T20',
        ram: "3 GB",
        rom: "32 GB",
        maincamera: '8 MP',
        frontCamera: '5 MP',
        price: "35,999" 
    },
    {
        image: "./Assets/Tablet-12.webp",
        brand: 'Alcatel',
        model: 'Tablet 3T10',
        ram: "2 GB",
        rom: "16 GB",
        maincamera: '2 MP',
        frontCamera: '2 MP',
        price: "24,299" 
    },
]

const showTablets = document.querySelector('.showTablets');

function renderTablets(){   
    tablets.forEach((tablets , index)=>{
        showTablets.innerHTML +=`
        <div class="box">
                    <div class="box-content">
                      <img class="card-img-top" src="${tablets.image}" alt="">
                      <p><span class="fw-bold">Brand:</span> ${tablets.brand}</p>
                      <p><span class="fw-bold">Model:</span> ${tablets.model}</p>
                      <p><span class="fw-bold">Ram:</span> ${tablets.ram}</p>
                      <p><span class="fw-bold">Rom:</span> ${tablets.rom}</p>
                      <p><span class="fw-bold">Rear Camera:</span> ${tablets.maincamera}</p>
                      <p><span class="fw-bold">Front Camera:</span> ${tablets.frontCamera}</p>
                      <p><span class="fw-bold">Price:</span> Rs. ${tablets.price} </p>
                      <button class="button mt-3" onclick="addToCart() ">Add To Cart</button>
                    </div>
                  </div>` 
    })
}   
renderTablets()

// Tablets ended 