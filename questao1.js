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
    } else if (idade1 >= 13 && idade1 <= 17) {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Adolecente!`
    } else if (idade1 >= 18 && idade1 <= 59) {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Adulto!`
    } else {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Idoso!`
    }

}

function tabuadaPersonalizada() {
    let numeroInput = document.getElementById("numero");
    let numero = parseInt(numeroInput.value);

    let resul2 = document.getElementById("resultado2");
    resul2.innerHTML = "";


    if (isNaN(numero)) {
        alert("Entrada inválida! Por favor, digite um número.");
        return;
    }

    let tabuadaP = "";

    for (let i = 1; i <= 10; i++) {
        tabuadaP += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resul2.innerHTML = tabuadaP;
}

function somaParesWhile() {

    let limiteInput = prompt("Digite um número limite:");
    let limite = parseInt(limiteInput);

    if (isNaN(limite) || limite < 1) {
        document.getElementById("resultadoSoma").innerHTML = "Por favor, insira um número inteiro válido maior ou igual a 1.";
        return;
    }

    let soma = 0;
    let numeroAtual = 1;

    while (numeroAtual <= limite) {
        if (numeroAtual % 2 === 0) {
            soma += numeroAtual;
        }
        numeroAtual++;
    }

    document.getElementById("resultadoSoma").innerHTML = `A soma dos números pares de 1 até ${limite} é: <strong>${soma}</strong>.`;
}

let tentativasRestantes = 3;
const senhaCorreta = "sena123";

const inputSenha = document.getElementById("senhaInput");
const botaoVerificar = document.getElementById("btnVerificar");
const mensagemElemento = document.getElementById("mensagemAcesso");

function validaSenha() {
    if (inputSenha.disabled) {
        return;
    }

    const senhaDigitada = inputSenha.value;

    if (senhaDigitada === senhaCorreta) {
        mensagemElemento.innerHTML = "Acesso permitido";
        mensagemElemento.style.color = "green";
        inputSenha.disabled = true;  
        botaoVerificar.disabled = true; 
    } else {
        tentativasRestantes--; 

        if (tentativasRestantes > 0) {
            mensagemElemento.innerHTML = `Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`;
            mensagemElemento.style.color = "orange";
            inputSenha.value = ""; 
            inputSenha.focus();   
        } else {
            mensagemElemento.innerHTML = "Acesso bloqueado";
            mensagemElemento.style.color = "red";
            inputSenha.disabled = true;  
            botaoVerificar.disabled = true; 
        }
    }
}