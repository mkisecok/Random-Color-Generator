// Create a function to generate a random color HEX code

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  function setRandomColor(divCount)
  { for(let i=0 ; i<divCount; i++)
    {
      const newDiv=document.createElement('div');

      newDiv.classList.add('muster-box','m-4','d-flex' , 'flex-row-reverse' );

      newDiv.style.background=getRandomColor()
      
      const newButton=document.createElement('button');

      newButton.classList.add('remove-button' )

      newButton.innerHTML='X'
      const newPar=document.createElement('p');

      newPar.classList.add('hex-code', 'card-text', 'text-light', 'align-self-center')

      const newText= document.createTextNode(getRandomColor());

      newDiv.appendChild(newButton)
      newDiv.appendChild(newPar)
      newPar.appendChild(newText)
      colorContainer.append(newDiv)

    }
    
  }
  const main =document.querySelector('.main-container');
  const addButton=document.querySelector('#add-button');
  const colorCont=document.querySelector('.color-container');
  const input = document.querySelector('#valueInput');
  const colorContainer=document.querySelector('#color-container');
  
  let countBox;
  
  main.addEventListener('click', e=>{

    if(e.target == addButton)
    {
        countBox = input.value;
        setRandomColor(countBox)
    }

    if(e.target.matches('.remove-button'))
    {
        e.path[1].remove();
         input.value-- 
    }
  })
  
  
 