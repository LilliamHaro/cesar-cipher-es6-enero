window.addEventListener('load', function() {
  let cipherBtn = document.getElementById('cipher');
  let decipherBtn = document.getElementById('decipher');
  let centinel = false;
  // validacin del input
  let validation = () => {
    let textValue = input.value;
    if (textValue != 0) {
      centinel = true;
    } else {
      centinel = false;
    };
    return centinel ;
  };
  // cifrado
  cipherBtn.addEventListener('click', event => {
    document.getElementById('result').innerText = '';
    let input = document.getElementById('input').value;
    validation();
    if (centinel === true) {
      let array = [];
      for (let i = 0; i < input.length;i++) {
        let charAscii = input.charCodeAt(i);
        if (charAscii >= 65 && charAscii <= 90) {
          let upCharCesar = (charAscii - 65 + 33) % 26 + 65;
          var newUpChar = String.fromCharCode(upCharCesar);
          array.push(newUpChar);
        } else {
          let charCesar = (charAscii - 97 + 33) % 26 + 97;
          let newChar = String.fromCharCode(charCesar);
          array.push(newChar);
        }
      }
      let arrayToString = array.join('');
      document.getElementById('result').innerText = arrayToString;
    } else {
      alert('ingrese un texto valido');
    }
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
  });
  // decipher
  decipherBtn.addEventListener('click', event => {
    document.getElementById('result').innerText = '';
    let input = document.getElementById('input').value;
    validation();
    if (centinel === true) {
      let array = [];
      for (let i = 0; i < input.length;i++) {
        let charAscii = input.charCodeAt(i);
        if (charAscii >= 65 && charAscii <= 90) {
          let upCharCesar = (charAscii - 65 - 33) % 26 + 65;
          var newUpChar = String.fromCharCode(upCharCesar);
          array.push(newUpChar);
        } else {
          let charCesar = (charAscii - 97 - 33) % 26 + 97;
          let newChar = String.fromCharCode(charCesar);
          array.push(newChar);
        }
      }
      let arrayToString = array.join('');
      document.getElementById('result').innerText = arrayToString;
    } else {
      alert('ingrese un texto valido');
    }
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
  });
});
