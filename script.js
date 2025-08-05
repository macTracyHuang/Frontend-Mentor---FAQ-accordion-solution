function setupQuestionToggles() {
  document.querySelectorAll(".faq__item").forEach((item) => {
    const answer = item.querySelector(".faq__answer");
    const [plusBtn, minusBtn] = item.querySelectorAll(".faq__toggle");

    function toggle() {
      answer.classList.toggle("hidden");
      plusBtn.classList.toggle("hidden");
      minusBtn.classList.toggle("hidden");
    }

    plusBtn.addEventListener("click", toggle);
    minusBtn.addEventListener("click", toggle);
  });
}

document.addEventListener("DOMContentLoaded", setupQuestionToggles);
