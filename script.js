var buttons = document.querySelectorAll(".star");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (btn) {
      btn.classList.remove("highlighted");
    });

    button.classList.add("highlighted");
  });
});

//---------------------------

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const submitBtn = document.querySelector(".submit-btn");

  let selectedScore = 0;

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      selectedScore = parseInt(star.textContent);
      stars.forEach((s) => s.classList.remove("selected"));
      star.classList.add("selected");
    });
  });

  submitBtn.addEventListener("click", function () {
    // Assuming you want to simulate going to a new page
    window.location.href = "thankyou.html?score=" + selectedScore;
  });
});
