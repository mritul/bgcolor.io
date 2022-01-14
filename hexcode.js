const btn = document.querySelector(".btn");
const currclr = document.querySelector(".currclr");
const showcase = document.querySelector(".showcase");
// Alternate way
// function changebg(e) {
//   e.preventDefault();
//   const temp=bgcode();
//   showcase.style.backgroundColor=temp;
//   currclr.style.color = temp;
//   currclr.innerHTML = temp;
// }

const changebg = (e) => {
  e.preventDefault();
  const temp = bgcode();
  showcase.style.backgroundColor = temp;
  currclr.style.color = temp;
  currclr.innerHTML = temp;
};

const bgcode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

btn.addEventListener("click", changebg);
/*Note we have invoked function after declaring it.We do so because of arrow function i.e a constant should be initialised before usage */
