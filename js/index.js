const pressed = [];
const secrectCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

window.addEventListener('keyup', function(e){ 
  pressed.push(e.key);
  pressed.splice(-secrectCode.length -1, pressed.length - secrectCode.length);
  console.log(pressed);
  if(pressed.join('').includes(secrectCode)) {
    cornify_add();
  }
});