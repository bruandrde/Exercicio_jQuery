$(document).ready(function() {
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

const form = document.getElementById('form-tarefa');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputTarefa = document.getElementById('input-tarefa');

    let linha = '<ul>';
    linha += `<li>${inputTarefa.value}</li>`;
    linha +=  '</ul>';

    linhas += linha;

    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = linhas;

    inputTarefa.value = '';


});