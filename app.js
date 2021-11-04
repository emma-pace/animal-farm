const catImage = document.getElementById ('cat');
const catSound = document.getElementById ('catSound');

const dogImage = document.getElementById ('dog');
const dogSound = document.getElementById ('dogSound');

const horseImage = document.getElementById ('horse');
const horseSound = document.getElementById ('horseSound');

const countEl = document.getElementById('count');


catImage.addEventListener('click', () => {
  catSound.play ();
  const catCount = catImage.value; 
  countEl.textContent = "cat";
});

dogImage.addEventListener('click', () => {
  dogSound.play ();
  const dogCount = dogImage.value;
  countEl.textContent = "dog";
});

horseImage.addEventListener('click', () => {
  horseSound.play ();
  const horseCount = horseImage.value;
  countEl.textContent = "horse";
});
