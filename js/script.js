let imgArr = [
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

mouseTail();
