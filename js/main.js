$(document).ready(function(){

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00.000-000')

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: false
            },
            cep: {
                required: false
            }

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Esse campo é obrigatório',
            email: 'Esse campo é obrigatório',
            cpf: 'Esse campo é obrigatório',
        }
    })
})

