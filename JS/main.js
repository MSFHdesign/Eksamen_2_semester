$(function () {
var includes = $('[data-include]')
$.each(includes, function () {
    var file = 'elements/modal/' + $(this).data('include') + '.html'
    $(this).load(file)
})
});

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/header/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
    });


$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/footer/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
});