let hex=['1','2','3','4','5','6','7','8','9','10','A','B','C','D','E','F']
btn=document.getElementById('btn');
color=document.getElementById('color');
//btn=addEventListener("click",function(){
    function random1(){
    let hexColor='#'

    for(i=0;i<6;i=i+1){
        hexColor=hexColor+hex[random()]
       }
    color.innerText=hexColor;
    document.body.style.backgroundColor=hexColor
}
function random(){
return Math.floor(Math.random() * hex.length);
}


