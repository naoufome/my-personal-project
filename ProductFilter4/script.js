let products={
    data: [
        {
            productName:"Reguler White T-Shirt",
            category:"topwear",
            price:30,
            image:"images/white-tshirt.jpeg"
        },
        {
            productName:"Beige Short Skirt",
            category:"bottomwear",
            price:49,
            image:"images/Beige-Short-Skirt.webp"
        },
        {
            productName:"Sporty SmartWatch",
            category:"watch",
            price:100,
            image:"images/Sporty-SmartWatch.webp"
        },
        {
            productName:"Basic Knitted Top",
            category:"topwear",
            price:29,
            image:"images/Basic-Knitted-Top.jpg"
        },
        {
            productName:"Black Leather Jacket",
            category:"jacket",
            price:120,
            image:"images/Black-Leather-Jacket.jpg"
        },
        {
            productName:"Stylish Pink Trousers",
            category:"bottomwear",
            price:30,
            image:"images/Stylish-Pink-Trousers.webp"
        },
        {
            productName:"Brown Men's Jacket",
            category:"jacket",
            price:99,
            image:"images/Brown-Mens -Jacket.webp"
        },
        {
            productName:"Comfy Grey Pants",
            category:"bottomwear",
            price:50,
            image:"images/Comfy-Grey-Pants.webp"
        },
    ]
};

for(let i of products.data){
    //create cards
    let card =document.createElement("div");
    //add classes to the card and pass the category
    card.classList.add("card",i.category,"hide");
    //image div
    let imageContainer=document.createElement('div')
    imageContainer.classList.add('image-container')
    let image=document.createElement('img')
    image.setAttribute('src',i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    //container 
    let container =document.createElement('div');
    container.classList.add('container');
    //product name
    let name=document.createElement('h5');
    name.classList.add('product-name');
    name.innerHTML+=i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price=document.createElement('h5');
    price.classList.add('product-price');
    price.innerHTML+='$'+i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById('products').appendChild(card)
}

function filterProduct(value){
    let buttons=document.querySelectorAll('.button-value')
    buttons.forEach((button) =>{
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add('active');
        }else{
            button.classList.remove('active');
        }
    });
    //select all card
    let elements =document.querySelectorAll('.card');
    elements.forEach((element)=>{
        if(value=='all'){
            element.classList.remove('hide');
        }else{
            if(element.classList.contains(value)){
                element.classList.remove('hide');
            }
            //hide the other categories
            else{
                element.classList.add('hide');
            }
        }
    });
}

//search button click
document.getElementById('search').addEventListener('click',()=>{
    let searchText=document.getElementById('searchInput').value;
    let elements =document.querySelectorAll('.product-name');
    let cards=document.querySelectorAll('.card');
    elements.forEach((element,index)=>{
        if(element.innerText.includes(searchText.toUpperCase()))
        {
            cards[index].classList.remove('hide')
            let buttons =document.querySelectorAll('.button-value')
            buttons.forEach((button)=>{
                button.classList.remove('active');
            })
        }else{
            cards[index].classList.add('hide');
        }
    })
});


//Initially display all the product
window.onload= ()=>{
    filterProduct('all');
};
