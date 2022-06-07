const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  secondHand.style.transform = `rotate(${((seconds / 60) * 360 + 90)}deg)`;

  const mins = now.getMinutes();
  minsHand.style.transform = `rotate(${((mins / 60) * 360 + (seconds / 60) * 6 + 90)}deg)`;

  const hour = now.getHours();
  hourHand.style.transform = `rotate(${((hour / 12) * 360 + (mins / 60) * 30 + 90)}deg)`;
}

setInterval(setDate, 1000);

setDate();
