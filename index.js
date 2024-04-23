const correctAnswer = ["D", "B", "C", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if all questions are answered
  const allQuestionsAnswered = Array.from(questions).every((question) =>
    question.querySelector("input:checked")
  );

  if (!allQuestionsAnswered) {
    alert("Please attempt all questions before submitting.");
    return; // Stop further execution
  }

  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswer.forEach((ans, index) => {
    if (ans === correctAnswer[index]) {
      score++;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector("p").textContent = `You scored ${score}/${userAnswer.length}`;

  // Encode the score as a query parameter in the URL
  const queryParams = `?score=${score}`;

  // Redirect to the result page with the score as a query parameter
  window.location.href = `result.html${queryParams}`;
});
