// pTag = document.getElementById("errorEm");
// pTag.style.display = "none";

// sliderError();

// First Range
const slider1 = document.getElementById("myRange1");
const output1 = document.getElementById("value-1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value; 
}

slider1.addEventListener("input", function(){
    const x1 = slider1.value;
    console.log(x1)
    slider1.style.backgroundColor = color(x1);
   slideCheck(x1)
})

// 2nd Range
const slider2 = document.getElementById("myRange2");
const output2 = document.getElementById("value-2");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value; 
}

slider2.addEventListener("input", function(){
    const x2 = slider2.value;
    console.log(x2)
    slider2.style.backgroundColor = color(x2);
   slideCheck(x2);
})

// 3rd Range
const slider3 = document.getElementById("myRange3");
const output3 = document.getElementById("value-3");

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value; 
}

slider3.addEventListener("input", function(){
    const x3 = slider3.value;
    console.log(x3)
    slider3.style.backgroundColor = color(x3);
   slideCheck(x3);
})

// 4th Range
const slider4 = document.getElementById("myRange4");
const output4 = document.getElementById("value-4");

output4.innerHTML = slider4.value;

slider4.oninput = function() {
    output4.innerHTML = this.value; 
}

slider4.addEventListener("input", function(){
    const x4 = slider4.value;
    console.log(x4)
    slider4.style.backgroundColor = color(x4);
   slideCheck(x4);
})

// 5nd Range
const slider5 = document.getElementById("myRange5");
const output5 = document.getElementById("value-5");

output5.innerHTML = slider5.value;

slider5.oninput = function() {
    output5.innerHTML = this.value; 
}

slider5.addEventListener("input", function(){
    const x5 = slider5.value;
    console.log(x5)
    slider5.style.backgroundColor = color(x5);
   slideCheck(x5);
})
// 6nd Range
const slider6 = document.getElementById("myRange6");
const output6 = document.getElementById("value-6");

output6.innerHTML = slider6.value;

slider6.oninput = function() {
    output6.innerHTML = this.value; 
}

slider6.addEventListener("input", function(){
    const x6 = slider6.value;
    console.log(x6)
    slider6.style.backgroundColor = color(x6);
   slideCheck(x6);
})

// 7nd Range
const slider7 = document.getElementById("myRange7");
const output7 = document.getElementById("value-7");

output7.innerHTML = slider7.value;

slider7.oninput = function() {
    output7.innerHTML = this.value; 
}

slider7.addEventListener("input", function(){
    const x7 = slider7.value;
    console.log(x7)
    slider7.style.backgroundColor = color(x7);
   slideCheck(x7);
})

// 8nd Range
const slider8 = document.getElementById("myRange8");
const output8 = document.getElementById("value-8");

output8.innerHTML = slider8.value;

slider8.oninput = function() {
    output8.innerHTML = this.value; 
}

slider8.addEventListener("input", function(){
    const x8 = slider8.value;
    console.log(x8)
    slider8.style.backgroundColor = color(x8);
   slideCheck(x8);
})
const color = (col) => {
    `linear-gradient(90deg, #800165 ${col} %, #F1F3FD ${col} %)`
}
// error message


// for (let i = 0; i < sliderValue.length; i++){
//     sliderValue.forEach(index => {
//         if (sliderValue.filter(index) === sliderValue.filter(index)) {
//             console.log("try another range")
//         }
//     });
// }

const sliderValue = [slider1.value, slider2.value, slider3.value, slider4.value, slider5.value, slider6.value, slider7.value, slider8.value];

const slideCheck = (param) => {
    // e.preventDefault();
    let val = sliderValue;

    for (let i = 0; i < val.length; i++) {
        if (param === val[i]) {
            console.log("try another range");
            // pTag.innerHTML = "* You cannot choose a number twice.";
            // pTag.style.display = "block";
        } else if(param === 0 || param != val[i]){
            pTag.style.display = "none";
        }
    }
}
// switch (x1) {
//     case (x1 == slider2.value):
//         console.log("try another range")
//         break;

//     default:
//         console.log("not working")
//         break;
// }
// for (let i = 0; i < sliderValue.length; i++) {
//     const element = sliderValue[i];
//     if (element === sliderValue[i]){
//         console.log("try another range")
//     }
// }
// function slideChecker() {
//     let sliderValue = [slider1.value, slider2.value, slider3.value, slider4.value, slider5.value, slider6.value, slider7.value, slider8.value];
//     for (let i = 0; i < sliderValue.length; i++) {
//         const element = sliderValue[i];
//         if (element === sliderValue[i]){
//             console.log("try another range")
//         }
//     }    
// }

// slideChecker();