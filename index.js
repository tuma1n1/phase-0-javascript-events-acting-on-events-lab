// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
/*
function moveDodgerRight(){
    const gameWidth = '400px';
    const dodgerWidth = '40px';
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10) || 0;

    const newPosition = Math.min(right + 10, gameWidth - dodgerWidth);

    dodger.style.left = `${newPosition}px`;


}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  */
 /*
  function moveDodgerRight() {
    const gameWidth = document.getElementById('game').clientWidth;
    const dodgerWidth = dodger.clientWidth;
    const leftNumbers = dodger.style.left.replace("px", "");
    const currentPosition = parseInt(leftNumbers, 10) || 0;
  
    // Calculate the new position by adding a small increment
    const newPosition = Math.min(currentPosition + 10, gameWidth - dodgerWidth);
  
    // Set the new position of the dodger
    dodger.style.left = `${newPosition}px`;
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  */
  function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10) || 0;

    const newPosition = Math.min(right + 10, 360);

    dodger.style.left = `${newPosition}px`;

}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });