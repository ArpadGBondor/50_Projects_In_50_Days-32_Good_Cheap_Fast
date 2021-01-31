const toggles = document.querySelectorAll('.toggle');
const goodElement = document.getElementById('good');
const cheapElement = document.getElementById('cheap');
const fastElement = document.getElementById('fast');

toggles.forEach((toggle) => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(target) {
  console.log(target);
  if (goodElement.checked && cheapElement.checked && fastElement.checked) {
    if (goodElement === target) {
      cheapElement.checked = false;
    }
    if (fastElement === target) {
      goodElement.checked = false;
    }
    if (cheapElement === target) {
      fastElement.checked = false;
    }
  }
}
