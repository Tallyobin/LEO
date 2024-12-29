// Get elements from the DOM
const questions = document.querySelectorAll('.q');
const answers = document.querySelectorAll('.a');
const arrows = document.querySelectorAll('.arrow');

// Attach click event listeners to each question
questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    // Toggle the visibility of the corresponding answer
    answers[index].classList.toggle('a-opened');

    // Rotate the corresponding arrow
    arrows[index].classList.toggle('arrow-rotated');
  });
});
