const jadvallar=document.querySelectorAll('.najot')
const tong=document.querySelector('.tong')
const quyosh=document.querySelector('.quyosh')
const peshin=document.querySelector('.peshin')
const asr=document.querySelector('.asr')
const shom=document.querySelector('.shom')
const xufton=document.querySelector('.xufton')
const vaqt=document.querySelector('.vaqt')
const xafta=document.querySelector('.xafta')

fetch('https://islomapi.uz/api/present/day?region=Andijon')
.then(response=>response.json())
.then(data=>{
    tong.innerHTML=data.times.tong_saharlik,
    quyosh.innerHTML=data.times.quyosh
    peshin.innerHTML=data.times.peshin
    asr.innerHTML=data.times.asr
    shom.innerHTML=data.times.shom_iftor
    xufton.innerHTML=data.times.hufton
})

const regionTime=document.querySelector('.region-time')
const hour=document.querySelector('.hour')

function soat(){
    const data=new Date();
    const newHour=data.getHours();
    const minute=data.getMinutes();
    const second=data.getSeconds();

    hour.innerHTML=getNol(newHour)+':'+getNol(minute)+':'+getNol(second)
    setTimeout (soat,1000);
  
}
soat();
function getNol(res){
    if(res>=0 && res<10){
        return '0'+res;
    }else{
        return res
    }
}

