// * Three dots
const nextNext = document.getElementById("next-next");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// * Individual testimonials
const testi1 = document.querySelector(".testil1");
const testi2 = document.querySelector(".testi2");
const testi3 = document.querySelector(".testi3");

// * Testimonial parent container
const tests = document.querySelector(".tests");

let nextNextInt = window.setInterval(function(){
    // check for the remove first class
    if (tests.classList.contains("first")){
        tests.classList.remove("first")

        // add the class the shows the second testimonial
        tests.classList.add("second")
    }
}, 8000)

let prevint = window.setInterval(function(){
    // Check for and remove third class
    if(tests.classList.contains("third")){
        tests.classList.remove("third")
    }

    // Add the class that has the first testimonial
    tests.classList.add("first");
}, 16000)

// Create a reusable function for clicking on the dots.
function dotClick(oldClasOne, oldClassTwo, newClass) {
    if(tests.classList.contains(oldClassOne)){
        tests.classList.remove(oldClassOne);
    }

    if(tests.classList.contains(oldClassTwo)){
        tests.classList.remove(oldClassTwo);
    }

    window.clearInterval(nextNextInt);
    window.clearInterval(nextInt);
    window.clearInterval(prevInt);
    tests.classList.add(newClass);
}

nextNext.addEventListener("click", function(){
    dotClick("second", "third", "second");
})

next.addEventListener("click", function() {

    dotClick('first', 'third', 'second');
  
  })
  
prev.addEventListener("click", function() {

    dotClick('second', 'third', 'first');

})

// * FAQ accordian section
// declare default vars
const acc = document.getElementsByClassName("accordion");

// Loop through all accordian buttons
for (let i = 0; i < acc.length; i++){
    // trigger an event after click
    acc[i].addEventListener("click", function() {
        // add in the active class
        this.classList.toggle("active");
        // select sibling element
        let panel = this.nextElementSibling;
        // if sibling is open, close it, if closed, open it
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}

// Pop-up
//declare default vars
const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('close-pop-up');

//nav-bar button
const subBtn = document.getElementById('sub-btn');

//navbar button click makes the popup appear
subBtn.addEventListener("click", () => {
    popUpLayer.style.display = 'flex';
  })
  
  //close model click makes the popup disappear
  closeModal.addEventListener("click", function() {
    popUpLayer.style.display = 'none';
  })

let popUpSeconds = 40;

//trigger popup after seconds variable
let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = 'flex';

  window.clearInterval(popUpFun);

}, popUpSeconds * 1000);