(function() {

  var keyInput = document.getElementById('input-key');
  var messageInput = document.getElementById('input-message');
  var submitBtn = document.getElementById('submit');
  var hashResult = document.getElementById('hash-result');

  var hmac = forge.hmac.create();

  submitBtn.onclick = function() {

    var key = keyInput.value;
    var message = messageInput.value;

    hmac.start('sha1', key);

    hmac.update(message);

    hashResult.innerHTML = hmac.digest().toHex();

  };

})();