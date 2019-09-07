$(document).ready(() => {
    $('#create').click(e => {
        $.post('/api/create', { name: $('#name').val() }, (err, resp) => {
            if (err) console.log(err);
            console.log(resp);
        });
        $.get('/', (resp) => { $('body').html(resp) });
    });
    $('.btn-primary').click(function (e) {
        console.log($(this).attr('id'));
        $.ajax('/api/eat', { method: 'PUT', data: { id: $(this).attr('id') } }, err => { if (err) throw err; });
        $.get('/', (resp) => { $('body').html(resp) });
    });
});