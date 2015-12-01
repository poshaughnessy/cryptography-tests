(function() {

  var input = document.getElementById('input-text');
  var submitBtn = document.getElementById('submit');

  var hmac = forge.hmac.create();
  hmac.start('sha1', 'Jefe');

  hmac.update('this is some test input for now');

  var output = hmac.digest().toHex();

  console.log('HMAC output', output);

})();