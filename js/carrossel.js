// Carrossel

let count = 1;
document.getElementById('radio1').checked = true;

//Chamando função com intervalo de 4 seguundos
setInterval( function(){
    // nextImg();   
}, 4000) 


//Função para passagem do carrosseç
function nextImg(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById('radio'+ count).checked = true;
}