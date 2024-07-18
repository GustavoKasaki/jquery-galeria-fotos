$(document).ready(function() { /* executa as funções quando o documento estiver pronto */
    $('header button').click(function() { /* expande o menu ao clicar no botão 'nova imagem' */
        $('form').slideToggle();
    })

    $('#botaoCancelar').click(function() { /* retrai o menu ao clicar no botão 'cancelar' */
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { /* cancela o efeito padrão de enviar ao clicar no botão 'enviar' */
        e.preventDefault();
        const endNovaImagem = $('#endImgNova').val(); /* .val = value no jQuery (se trata de uma função) */
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${endNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlayImgLink">
                <a href="${endNovaImagem}" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul'); /* insere a imagem na lista */
        $(novoItem).fadeIn(1000); /* adiciona o efeito de transição à função de adicionar a imagem (1000 é o tempo de transição em ms */
        $('#endImgNova').val(''); /* limpa o formulario */
    })
})