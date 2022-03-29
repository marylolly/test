let block = document.querySelector('#main-block'),
    pop = document.querySelector('.popup');
   

function generateBlocks(count) {
  for (let div of block.querySelectorAll('.newblock')) {
    div.remove();
  }
  for (var i = 1; i <= count; i++) {
	let div = document.createElement('div');
	div.classList.add('newblock');
	div.innerHTML = i;
	block.appendChild(div);
  }

}

function checkBox() {
   let divs = document.querySelectorAll('#main-block div');
   block.addEventListener('change', function(event) {
   for (var j = 0; j < divs.length; j++) {
   	 if ((j%2==1) && event.target.checked) {
             divs[j].classList.add('checked');
       }     
          else divs[j].classList.remove('checked');
       }
    })
}

function popUp() {
   let divs = document.querySelectorAll('#main-block div'),
   fon = document.querySelector('.fon'),
   button = document.createElement('span');
   button.innerHTML = '&#10006;';
   for (let div of divs) {
   	 div.addEventListener('click', function() {
         pop.classList.add('active');
         fon.classList.remove('hidden');
         pop.append(div.textContent,button);
   	 })
   }
   function closePopup() {
        pop.classList.remove('active');
        fon.classList.add('hidden');
        pop.textContent='';
   }
   fon.addEventListener("click", closePopup);
   button.addEventListener("click", closePopup);
}

function addBlocks() {
let add = document.querySelector('#main-block button');
	add.addEventListener("click", function(event) {
		event.preventDefault();
		generateBlocks(5);
		checkBox();
        popUp();			  
	});
}

generateBlocks(4);
checkBox();
popUp();
addBlocks();