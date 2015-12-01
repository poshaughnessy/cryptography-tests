(function() {

  var input = document.getElementById('input-text');
  var submitBtn = document.getElementById('submit');
  var hashResult = document.getElementById('hash-result');

  var hmac = forge.hmac.create();

  // Second parameter is the 'key' to use
  hmac.start('sha1', '6708435794321');

  submitBtn.onclick = function() {

    var text = input.value;

    hmac.update(text);

    hashResult.innerHTML = hmac.digest().toHex();

  };

})();