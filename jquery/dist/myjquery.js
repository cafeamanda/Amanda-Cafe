$(document).on('change', '.js-cel-number', function() {
  var
    $this = $(this),
    number = $this.val();

  number = number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  $this.val(number);
});

$(document).on('change', '.js-tel-number', function() {
  var
    $this = $(this),
    number = $this.val();

  number = number.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  $this.val(number);
});
