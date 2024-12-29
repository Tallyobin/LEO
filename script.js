// Background blur and content fade-in
window.addEventListener('load', () => {
  const background = document.querySelector('.background-image');
  const content = document.querySelector('.content');

  setTimeout(() => {
    background.classList.add('background-blurred');
    content.classList.add('content-visible');
  }, 2000);
});

// FAQ toggle functionality
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i = 0; i < q.length; i++) {
  q[i].addEventListener('click', () => {
    a[i].classList.toggle('a-opened');
    arr[i].classList.toggle('arrow-rotated');
  });
}
