var acertos = 0;
var cont = 0
function mostra(){
    if(cont>0){
        return false;
    }
    var alternativa = document.getElementsByName('opcao');
    var alternativa_value;
    for(var i = 0; i < alternativa.length; i++){
        if(alternativa[i].checked){
            alternativa_value = alternativa[i].value;
            if(alternativa_value == "true"){
                acertos++
            }
        }
    }
    var x = document.getElementById("resultados")
    var y = document.getElementById("nomeform").value
    x.innerHTML += "Parabéns "+y+"! Você acertou "+acertos+" questões!"
    cont++
}    