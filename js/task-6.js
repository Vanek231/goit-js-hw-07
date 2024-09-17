  const inputEl = document.querySelector('#controls input');
  inputEl.classList.add('input-box')
  const createButton = document.querySelector('[data-create]');
  createButton.classList.add('create-box')
  const destroyButton = document.querySelector('[data-destroy]');
  destroyButton.classList.add('destroy-box')
  const boxesContainer = document.querySelector('#boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  
  function createBoxes(amount) {
   
    boxesContainer.innerHTML = '';

    
    const elements = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10; 
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginTop = '10px';
      elements.push(box);
    }

    
    boxesContainer.append(...elements);
  }

 
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

 
  createButton.addEventListener('click', () => {
    const amount = Number(inputEl.value);
    
    
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    }
    
    
    inputEl.value = '';
  });

 
  destroyButton.addEventListener('click', destroyBoxes);