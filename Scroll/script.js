let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let montains1 =document.getElementById('montains1');
let montains2 =document.getElementById('montains2');
let river =document.getElementById('river');
let boat =document.getElementById('boat');
let montains3 =document.getElementById('montains3');
let nike = document.querySelector('.nike');

window.onscroll=function(){
    let value = scrollY;
    stars.style.left= value +'px';
    moon.style.top=value*4 +'px';
    montains1.style.top=value*2 +'px';
    montains2.style.top=value*1.5 +'px';
    river.style.top=value +'px';
    boat.style.top=value+'px';
    boat.style.left=value*3+'px';
    nike.style.fontSize=value+'px';
    if(scrollY>=93){
        nike.style.fontSize=93+'px';
        nike.style.position='fixed';
        if(scrollY>=111){
            document.querySelector('.main').style.background='linear-gradient(rgb(85 143 236), rgb(13, 11, 11))';
        }
        else{
                document.querySelector('.main').style.background='linear-gradient(rgb(186, 85, 236),rgb(13, 11, 11))';
            
        }
        if(scrollY>=498){
            nike.style.display='none';
        }
        else{
            nike.style.display='block';
        }
    }
    
}