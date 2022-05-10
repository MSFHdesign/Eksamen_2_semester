// https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file


// elements
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
    });
