let title =document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let number=document.getElementById('nbr');
let category =document.getElementById('category');
let btnCreate=document.getElementById('btnCreate');
let mood='create';
let tmp;
// get total
function getTotal(){
    if(price.value!=''){
    let result = (+price.value+ +taxes.value+ +ads.value)- +discount.value;
    total.textContent=result;
    total.style.background='#acafe6';
}else{
    total.style.background='red';
    total.textContent='';
}

}

//create product
let dataPro;
if(localStorage.product!=null){
    dataPro= JSON.parse(localStorage.product)
}else{ dataPro =[];}

btnCreate.onclick=()=>{
    let newPro ={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.textContent,
        number:number.value,
        category:category.value.toLowerCase()
    }
    if(title.value!=''&&price.value!=''&&taxes.value!=''&&ads.value!=''&&discount.value!=''&&number.value<100&&category.value!=''){
    if(mood==='create'){
    if(newPro.number>1){
        for(let i=0;i<newPro.number;i++){
            dataPro.push(newPro)
        }
    }else{dataPro.push(newPro)}
    }else if(mood==='update'){
        dataPro[tmp]=newPro;
        mood='create';
        number.style.display='inline';
        btnCreate.innerHTML='Create';
    }
    // save localstorage
    localStorage.setItem('product',JSON.stringify(dataPro))
    clearData();
    showData();
    }else{
        alert('Veiullez remplir tous les champs')
    }

}

//clear inputs
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.textContent='';
    number.value='';
    category.value='';
}
//read
function showData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button id='btnUpdate' onclick="updateData(${i})">update</button><button id='btnDelete' onclick="deleteData(${i})">delete</button></td>
        </tr>
        `;
    }
    document.getElementById('tbl').innerHTML=table;
    let btnDeleteAll=document.getElementById('deleteAll');
    if(dataPro.length>0){
        btnDeleteAll.innerHTML=`
        <button id='deleteAllProducts' onclick='deleteAllData()'>Delete All (${dataPro.length})</button>
        `
    }else{
        btnDeleteAll.innerHTML=''
    }
    getTotal();
}
showData();

//delete
function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product=JSON.stringify(dataPro);
    showData();
}
function deleteAllData(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}

//update
function updateData(i){
    tmp=i;
    title.value=dataPro[i].title;
    price.value=dataPro[i].price;
    taxes.value=dataPro[i].taxes;
    ads.value=dataPro[i].ads;
    discount.value=dataPro[i].discount;
    getTotal();
    number.style.display='none';
    category.value=dataPro[i].category;
    scrollTo({
        top:0,
        behavior:'smooth'
    });
    btnCreate.innerHTML='Update';
    mood='update';
}


//search
let searchMood ='title';
function searchProduct(id){
    let search =document.getElementById('search');
    if(id==='SearchByTitle'){
        searchMood='title';
        search.disabled=false;
    }else if(id==='SearchByCategory'){
        searchMood='category';
        search.disabled=false;
    }
    search.placeholder='search by'+searchMood;
    search.focus();
    search.value='';
    showData();
}

function searchData(value){
    let table='';
    for(let i=0;i<dataPro.length;i++){
        if(searchMood=='title'){
                if(dataPro[i].title.includes(value.toLowerCase())){
                    table += `
                    <tr>
                    <td>${i+1}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id='btnUpdate' onclick="updateData(${i})">update</button><button id='btnDelete' onclick="deleteData(${i})">delete</button></td>
                    </tr>
                    `;
                }
        }else{
            for(let i=0;i<dataPro.length;i++){
                if(dataPro[i].category.includes(value.toLowerCase())){
                    table += `
                    <tr>
                    <td>${i+1}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button id='btnUpdate' onclick="updateData(${i})">update</button><button id='btnDelete' onclick="deleteData(${i})">delete</button></td>
                    </tr>
                    `;
                }
            }
        }
    }
    document.getElementById('tbl').innerHTML=table;
}
//clean data
