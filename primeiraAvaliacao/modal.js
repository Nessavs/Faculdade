$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Botão que acionou o modal
    var recipient = button.data('whatever'); // Extrai informações dos atributos data-*
    var modal = $(this);

    // Atualiza o título do modal com base no valor do atributo data-whatever
    modal.find('.modal-title').text('Novo mensagem para ' + recipient);

    // Preenche o campo de entrada do modal com o valor do atributo data-whatever
    modal.find('.modal-body input').val(recipient);
});
