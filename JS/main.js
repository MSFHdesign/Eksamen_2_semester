$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'elements/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })