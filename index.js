const h=document.getElementById("hour");
const m=document.getElementById("minutes");
const s=document.getElementById("seconds");
const ampm=document.getElementById("ampm");
function updateClock(){
    let h1=new Date().getHours();
    let m1=new Date().getMinutes();
    let s1=new Date().getSeconds();
    let ampm1="AM";

    if(h1>12){
        h1=h1-12;
        ampm1="PM";
    }
    h1=h1<10? "0"+h1 :h1;
    m1=m1<10? "0"+m1 :m1;
    s1=s1<10? "0"+s1 :s1;
    h.innerText=h1;
    m.innerText=m1;
    s.innerText=s1;
    ampm .innerText=ampm1;
setTimeout(()=>{
    updateClock();
},1000)
}
updateClock();
