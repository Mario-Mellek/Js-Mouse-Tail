// Defining global variables
const imgArr = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '😂',
  '🤣',
  '🥲',
  '🥹',
  '😊',
  '😇',
  '🙂',
  '🙃',
  '😉',
  '😌',
  '😍',
  '🥰',
  '😘',
  '😗',
  '😙',
  '😚',
  '😋',
  '😛',
  '😝',
  '😜',
  '🤪',
  '🤨',
  '🧐',
  '🤓',
  '😎',
  '🥸',
  '🤩',
  '🥳',
  '😏',
  '😒',
  '😞',
  '😔',
  '😟',
  '😕',
  '🙁',
  '☹️',
  '😣',
  '😖',
  '😫',
  '😩',
  '🥺',
  '😢',
  '😭',
  '😮‍💨',
  '😤',
  '😠',
  '😡',
];
const container = document.getElementById('container');
const animation = document.querySelector('div:first-of-type');

/* 
Mouse-tail function listens to a mousemove and creates a span with random images,
 positions the span and removes it after 3 seconds
*/
function mouseTail() {
  document.addEventListener('mousemove', (e) => {
    let emojiEle = document.createElement('span');
    let randomNumber = Math.floor(Math.random() * imgArr.length);
    emojiEle.innerText = imgArr[randomNumber];
    let X = e.offsetX;
    let Y = e.offsetY;
    emojiEle.style.top = Y + 'px';
    emojiEle.style.left = X + 'px';
    emojiEle.style.transform = `translate(${randomNumber}px)`;
    container.insertAdjacentElement('beforeend', emojiEle);
    setTimeout(() => {
      emojiEle.remove();
    }, 3000);
  });
}

//function will run after the animation ends
animation.addEventListener('animationend', mouseTail);
