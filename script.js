var buttonTheme = document.querySelector("input")
buttonTheme.addEventListener('click', () => {

    let body = document.querySelector("body")

    if(body.className == "first-mode"){
        body.className = "second-mode"
        buttonTheme.style.backgroundImage = "url('assets/bg-blue.png')"
    }else if(body.className == "second-mode"){
        body.className = "first-mode"
        buttonTheme.style.backgroundImage = "url('assets/bg-green.png')"
    }
})
function insert(num){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}
function limpar(){
    document.getElementById('res').innerHTML = '';
}
function somar(){

}
function voltar(){
    var res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}
function calcular(){
    var res = document.getElementById('res').innerHTML;
    if (res){
        document.getElementById('res').innerHTML = eval(res);
    }else{
        document.getElementById('res').innerHTML = 'Nada para calcular'
    }
}