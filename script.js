var colorCount = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0,
}

$(document).ready(function () {
  $('button').on('click', function() {
    var $color = $(this).attr('data-color');
    colorCount[$color]++;
    addBlock($color);
  });

  function addBlock(color) {
    $block = '<div class="color-cube ' + color + '"></div>';
    $('.container').append($block);
    $('#' + color).children('span').text(colorCount[color]);
  }
});
