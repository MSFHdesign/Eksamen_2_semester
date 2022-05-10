// https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file


// header
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/header/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
    });

// modal script
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/modal/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
    });

// footer     
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/footer/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
});