// Defining global variables
const imgArr = [
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐คฃ',
  '๐ฅฒ',
  '๐ฅน',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐ฅฐ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐คช',
  '๐คจ',
  '๐ง',
  '๐ค',
  '๐',
  '๐ฅธ',
  '๐คฉ',
  '๐ฅณ',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  '๐',
  'โน๏ธ',
  '๐ฃ',
  '๐',
  '๐ซ',
  '๐ฉ',
  '๐ฅบ',
  '๐ข',
  '๐ญ',
  '๐ฎโ๐จ',
  '๐ค',
  '๐ ',
  '๐ก',
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
