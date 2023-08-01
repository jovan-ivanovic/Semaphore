function convertToBinary(number) {
  return number.toString(2).padStart(8, '0');
}

function displayBinary(binary) {
  const binaryDisplay = document.getElementById('binaryDisplay');
  binaryDisplay.innerHTML = '';
  for (let i = 0; i < binary.length; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.classList.add(binary[i] === '0' ? 'red' : 'green');
    binaryDisplay.appendChild(circle);
  }
}

function displayWaiting() {
  const binaryDisplay = document.getElementById('binaryDisplay');
  binaryDisplay.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.classList.add('yellow');
    binaryDisplay.appendChild(circle);
  }
}

function fetchRandomNumberAndDisplayBinary() {
  displayWaiting(); 

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const randomNumber = parseInt(xhr.responseText);
      const binary = convertToBinary(randomNumber);
      displayBinary(binary);
    } else {
      console.error('Neuspelo preuzimanje slučajnog broja.');
    }
  };
  xhr.send();
}


setInterval(fetchRandomNumberAndDisplayBinary, 1000);
