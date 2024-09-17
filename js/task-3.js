const h1El = document.querySelector('h1')
h1El.classList.add('title-name')

  const inputEl = document.querySelector('#name-input');
  const outputEl = document.querySelector('#name-output');

  inputEl.addEventListener('input', (event) => {
    const trimmedValue = event.target.value.trim();
    
    if (trimmedValue === '') {
      outputEl.textContent = 'Anonymous';
    } else {
      outputEl.textContent = trimmedValue;
    }
  });