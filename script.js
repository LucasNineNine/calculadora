// Theme modify
var buttonTheme = document.querySelector("input")
buttonTheme.addEventListener('click', () => { 

    let body = document.querySelector("body")
    
    if(body.className.substring(0,10) == "first-mode"){
        /*fundo azul - imagem verde */
        var bodyClass = body.className
        body.className = bodyClass.replace("first-mode", "second-mode ")
        buttonTheme.style.backgroundImage = "url('assets/bg-blue.png')"

    }else if(body.className.substring(0,11) == "second-mode"){
        /*fundo verde - imagem azul */
        var bodyClass = body.className
        body.className = bodyClass.replace("second-mode", "first-mode")
        buttonTheme.style.backgroundImage = "url('assets/bg-green.png')"
    }
})

//Operations
var res = document.getElementById('res').innerHTML;

//Button numbers
function insert(num){
    var number = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = number + num;
}

function clean(){
    document.getElementById('res').innerHTML = '';
}

function back(){
    res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

function calculate(){
    var savingAnswer;
    var numericalTest = /[0-9]/;
    res = document.getElementById('res').innerHTML;
    
    if (res == "" || numericalTest.test(res) == false){
        savingAnswer = " "
    }else{
        savingAnswer = eval(res)
        document.getElementById('res').innerHTML = savingAnswer.toFixed(2);
        var listOfHistoric = document.getElementById("list-of-historic")
        listOfHistoric.innerHTML += res + " = " + savingAnswer.toFixed(2) + "<hr><br>"
    }
}

//Visible historic
var historicContainer = document.getElementById("list-of-historic")
historicContainer.style.display = "none"

const historic = document.getElementsByClassName("historic");
historic[0].addEventListener('click', () => {
    
    if(historicContainer.style.display == "block"){
        historicContainer.style.display = "none"
    }else{
        historicContainer.style.display = "block"
    }
})

/*Funçoes ainda nao atualizadas */
function espereAtualizacao(){
    alert("Espere as proximas atualizações!")
}