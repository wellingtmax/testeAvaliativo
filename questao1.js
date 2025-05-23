function calculadoraAvancada() {
    let nu1 = document.getElementById("numero1")
    let nu2 = document.getElementById("numero2")
    let resul = document.getElementById("resultado")
    let oper = document.getElementById("operador")

    const valor1 = parseFloat(nu1.value);
    const valor2 = parseFloat(nu2.value);
    const valorOper = oper.value;


    if (isNaN(valor1) || isNaN(valor2)) {
        resul.innerHTML = "Por Favor, insira um numero validos.";
        return;
    }
    if (valorOper === "-") {
        resul.innerHTML = valor1 - valor2;
    } else if (valorOper === "+") {
        resul.innerHTML = valor1 + valor2;
    } else if (valorOper === "*") {
        resul.innerHTML = valor1 * valor2;
    } else if (valorOper === "/") {
        resul.innerHTML = valor1 / valor2;
    } else {
        resul.innerHTML = "Isso não tem Logica"
    }

}

function classificarIdade() {
    let no = document.getElementById("nome");
    let ida = document.getElementById("idade");
    let classe = document.getElementById("clacificacao");


    const idade1 = parseFloat(ida.value);
    const nome1 = no.value;

    if (isNaN(idade1) || idade1 < 0) {
        classificacaoSpan.innerHTML = "Por favor, insira uma idade válida.";
        return; 
    }

    if (idade1 <= 12) {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Criança!`
    } else if(idade1 >= 13 && idade1 <= 17 ){
          classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Adolecente!`
    } else if(idade1 >= 18 && idade1 <= 59 ){
          classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Adulto!`
    } else {
          classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Idoso!`
    }

}

function tabuadaPersonalizada() {
    let nono = document.getElementById("numero").value;
     let numero1 = parseInt(nono);
     let resultado = "";

     if (isNaN(numero1)) {
         alert("Entrada inválida! Por favor, digite um número.");
         return; 
     }
    
     for (let i = 1; i <= 10; i++) {
         resultado += `${numero1} x ${i} = ${numero1 * i}\n`;
    }
    tabuadaTudo.innerHTML = resultado
 }
