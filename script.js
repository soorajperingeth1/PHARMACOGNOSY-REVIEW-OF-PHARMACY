let allAnswersShown = false;

function toggleAllAnswers() {
    allAnswersShown = !allAnswersShown;
    const answers = document.querySelectorAll('.answer');
    const buttons = document.querySelectorAll('#quiz-container .answer-btn');
    const mainToggleBtn = document.getElementById('toggle-all-btn');

    answers.forEach(answer => {
        if (allAnswersShown) {
            answer.classList.add('show');
        } else {
            answer.classList.remove('show');
        }
    });

    buttons.forEach(btn => {
        btn.textContent = allAnswersShown ? 'Hide Answer' : 'Show Answer';
    });

    mainToggleBtn.textContent = allAnswersShown ? 'Hide All Answers' : 'Show All Answers';
}
