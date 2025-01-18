$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
        arrows: false, // remove as setas
        dots: false, // remove os pontos de navegação
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle('slow');
    })


    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true, minlength: 15},
            mensagem: {required: true},
            veiculoInteresse: { required: false},
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor verifique o telefone'
        },
        /* interceptar o evento de submit */
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos inválidos!`);
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo= $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });


});