
// side navbar
function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    document.getElementById('nav_links').className='display';
    document.getElementById('box').className='hidebox';
    document.getElementById('heading').style.color='#fff';
    document.getElementById('header').style.borderRadius='0 15px 0 0';
    var called = true;
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "96px";
    document.getElementById('nav_links').className='hide';
    document.getElementById('box').className='notHideBox';
    document.getElementById('heading').style.height='65px';
    document.getElementById('heading').style.color='#000';
    document.getElementById('header').style.borderRadius='0 15px 0 0';
    var called=false;
}
called=false;
if(called===false){
    document.getElementById('nav_links').className='hide';
    document.getElementById('heading').style.height='65px';
    document.getElementById('heading').style.color='#000';
    document.getElementById('header').style.borderRadius='0 15px 0 0';
}
// card expansion
const classBody=document.getElementsByClassName('class-body');

for(i=0;i<classBody.length;i++){
    classBody[i].addEventListener('click',()=>{
        this.classList.toggle('active')
    })
}
let img=document.getElementById("expand2");
img.style.display="none";
let isShow=true;
function show(){
    if(isShow){
        img.style.display="none";
        isShow=false;
    }else{
        img.style.display="inline";
        isShow=true;
    }
}
