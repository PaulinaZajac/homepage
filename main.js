const firstName = "Paulina";
const age = 27;

console.log(
    `Hello I'm ${firstName} and I have ${age} years old`
    );

    const emptyParagraph = document.querySelector('.third-heading--js');
    
   emptyParagraph.innerHTML = 'No dzień dobry!';
    

   
  function calculate(myNumber) {
      console.log(`Wynik to ${myNumber}`);
      return myNumber*10;
  }


  const myNumber = calculate(10);
  console.log(myNumber);

  function greet(age, firstName) {
    console.log(
        `Hello I'm ${firstName} and I have ${age} years old`
        );
  }

  greet(age, firstName);
 
  const button= document.querySelector('.action--js')
  console.log(button)
 

  button.addEventListener('click', () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = 'No dzień dobry!';
    heading.classList.toggle('class--js')
  });

  const hamburger = document.querySelector('.hamburger--js');

  hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
  })