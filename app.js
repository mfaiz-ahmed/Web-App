const phones = [
    {
        brand: 'Apple',
        model: 'Iphone 15 pro max',
        ram: '8 GB',
        rom: '256 GB',
        mainCamera: '48 MP + 12 MP + 12 MP',
        frontCamera: '12 MP',
        price: "Rs. 262,990"
    }
]

const mobile1 = document.querySelector('.mobile-1');

mobile1.innerHTML = `<li>${phones[0].brand}</li>
<li>${phones[0].model}</li>
<li>${phones[0].ram}</li>
<li>${phones[0].rom}</li>
<li>${phones[0].mainCamera}</li>
<li>${phones[0].frontCamera}</li>
<li>${phones[0].price}</li>






`


