// https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file


// Vi bruger jq for at til at indhente html filer inde i vores html dokument, vi gør dette for at kunne arbejde på flere elementer til siderne og på den måde kunne arbejde langt mere effektivt på siden. 
 
$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'elements/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
    });
