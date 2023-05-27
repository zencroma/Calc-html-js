var tombol = document.querySelector('.container-button'); 
var layar= document.querySelector('#layer'); 

tombol.addEventListener('click', function (e) {
    var tombolClick = e.target;
    var nilaiTombol = tombolClick.innerText;
    if(nilaiTombol =="C"){
        layar.value = "";
    }else if(nilaiTombol =="<"){
        layar.value = layar.value.slice(0, -1);
    }else if(nilaiTombol =="="){
        layar.value =eval(layar.value);
    }else{
        layar.value =layar.value + nilaiTombol;
    }
}); 