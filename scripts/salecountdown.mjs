function updateCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  const countdownInterval = setInterval(() => {
    const currentDate = new Date();

    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("offertimertext");
    countdownElement.textContent = ` ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }, 1000);
}

updateCountdown();
