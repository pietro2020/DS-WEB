const form = document.getElementById("formulario");

function validarCPF(cpf) {
    const numeros = cpf.split('.').join('').split('-').join('');

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += Number(numeros[i]) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== Number(numeros[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += Number(numeros[i]) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== Number(numeros[10])) return false;

    return true;
}

function identificarBandeira(cartao) {

    const numero = cartao.replace(/\s+/g, '').replace(/-/g, '');

    if (/^4/.test(numero)) return "Visa";
    if (/^5[1-5]/.test(numero)) return "Mastercard";
    if (/^3[47]/.test(numero)) return "Amex";
    if (/^6(?:011|5)/.test(numero)) return "Discover";

}

const regras = {
    global: [
        {
            valida: (valor) => valor.length > 0,
            mensagem: "O valor não pode estar vazio"
        },
        {
            valida: (valor) => valor.length < 50,
            mensagem: "O valor não pode ter mais que 50 dígitos"
        }
    ],

    nome: [
        {
            valida: (valor) => valor.trim().length >= 3,
            mensagem: "O nome deve ter no mínimo 3 digitos!"
        },
        {
            valida: (valor) => !/\d/.test(valor),
            mensagem: "O nome não deve conter números!"
        }
    ],

    email: [
        {
            valida: (valor) => /^\S+@\S+\.\S+$/.test(valor),
            mensagem: "O email está com o formato inválido!"
        }
    ],

    senha: [
        {
            valida: (valor) => /^\S+$/.test(valor),
            mensagem: "A senha não pode conter espaços!"
        },
        {
            valida: (valor) => valor.length >= 6,
            mensagem: "A senha precisa conter mais de 6 dígitos!"
        },
        {
            valida: (valor) => /^(?=.*[a-z])(?=.*[A-Z])/.test(valor),
            mensagem: "A senha precisa de maiúsculos e minúsculos!"
        },
        {
            valida: (valor) => /\d/.test(valor),
            mensagem: "A senha precisa de pelo menos um número!"
        },
        {
            valida: (valor) => /[!@#$%^&*(),.?":{}|<>]/.test(valor),
            mensagem: "A senha precisa de pelo menos um digito especial!"
        }
    ],

    confirma_senha: [
        {
            valida: (valor) => document.getElementById("senha").value === document.getElementById("confirma_senha").value,
            mensagem: "As senhas não são iguais!"
        }
    ],

    cpf: [
        {
            valida: (valor) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor),
            mensagem: "O CPF está com o formato inválido!"
        },
        {
            valida: (valor) => validarCPF(valor),
            mensagem: "O CPF não existe!"
        }
    ],

    telefone: [
        {
            valida: (valor) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(valor),
            mensagem: "O telefone está com o formato inválido!"
        }
    ],

    cep: [
        {
            valida: (valor) => /^\d{5}-\d{3}$/.test(valor),
            mensagem: "O CEP está com o formato inválido!"
        }
    ],

    data_nascimento: [
        {
            valida: (valor) => /^\d{2}\/\d{2}\/\d{4}$/.test(valor),
            mensagem: "A data está com o formato inválido!"
        },
        {
            valida: (valor) => /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(valor),
            mensagem: "A data não existe!"
        }
    ],

    url: [
        {
            valida: (valor) => /^https?:\/\//.test(valor),
            mensagem: "A URL não é 'http://' nem 'https://'"
        }
    ],

    valor: [
        {
            valida: (valor) => /^(\d{1,3}(\.\d{3})*|\d+)(,\d{2})?$/.test(valor),
            mensagem: "O valor está em formato inválido!"
        },
        {
            valida: (valor) => {
                const num = Number(valor.replace(/\./g, '').replace(',', '.'));
                return !isNaN(num);
            },
            mensagem: "O valor precisa ser numérico!"
        },
        {
            valida: (valor) => {
                const num = Number(valor.replace(/\./g, '').replace(',', '.'));
                return num >= 0 && num <= 10000;
            },
            mensagem: "O valor precisa estar entre 0 e 10.000!"
        }
    ],

    cartao: [
        {
            valida: (valor) => {
                const numero = valor.replace(/\s+/g, '');
                return /^\d{16}$/.test(numero);
            },
            mensagem: "O cartão precisa ter 16 dígitos!"
        },
        {
            valida: (valor) => {
                const numero = valor.replace(/\s+/g, '');
                return /^4/.test(numero) || /^5[1-5]/.test(numero) || /^3[47]/.test(numero) || /^6(?:011|5)/.test(numero);
            },
            mensagem: "A bandeira do cartão não é reconhecida!"
        }
    ]
}

function validarCampo(nome, valor) {

    let listaErros = [];
    
    const regrasDoCampo = regras[nome];
    const regrasGlobais = regras["global"];
    
    const todasAsRegras = regrasDoCampo.concat(regrasGlobais);

    for (let regra of todasAsRegras) {

        const valido = regra.valida(valor);

        if (!valido) {
            listaErros.push(regra.mensagem);
        }

    }

    return listaErros;

}

function mostrarErro(input, mensagens) {
    let idSpan = `erro-${input.name}`;

    if (input.name === "confirma_senha") {
        idSpan = "erro-senha";
    }

    const erro = document.getElementById(idSpan);

    if (erro) {
        mensagens.forEach(mensagem => {
            erro.innerHTML += `${mensagem}<br>`;
        })
    }
}

function limparErros() {
    const erros = document.querySelectorAll("span[id^='erro-']");

    erros.forEach(erro => {
        erro.innerHTML = "";
    });
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    limparErros();

    let formValido = true;

    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {

        const nome = input.name;
        const valor = input.value;

        const mensagemDeErro = validarCampo(nome, valor);


        if (mensagemDeErro.length > 0) {

            mostrarErro(input, mensagemDeErro);
            formValido = false;

        }

    });


    if (formValido) {

        const bandeira = identificarBandeira(document.getElementById("cartao").value);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<h1>Formulário válido</h1><br>
                                Acesso concedido<br>
                                Seu nome: ${document.getElementById("nome").value}<br>
                                Seu email: ${document.getElementById("email").value}<br>
                                Sua senha: ${document.getElementById("senha").value}<br>
                                Seu CPF: ${document.getElementById("cpf").value}<br>
                                Seu telefone: ${document.getElementById("telefone").value}<br>
                                Seu CEP: ${document.getElementById("cep").value}<br>
                                Sua data de nascimento: ${document.getElementById("data_nascimento").value}<br>
                                O valor: ${document.getElementById("valor").value}<br>
                                A URL: ${document.getElementById("url").value}<br>
                                Seu cartão: ${document.getElementById("cartao").value}<br>
                                A bandeira do cartão é ${bandeira}`;

    } else {
        resultado.innerHTML = "";
    }

});