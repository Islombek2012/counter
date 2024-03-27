const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
const countBy = document.querySelector(".countBy");
const submitCountBtn = document.querySelector("#submitCount");
const startingValue = document.querySelector(".startingValue");
const submitStartValueBtn = document.querySelector("#submitStartValue");

let count = 0;

submitStartValueBtn.addEventListener("click", function() {
    let startingVal = parseInt(startingValue.value);
    count = startingVal;
    value.textContent = count;
    this.disabled = true;
});

submitCountBtn.addEventListener("click", function() {
    let countByValue = parseInt(countBy.value);

    btns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const btnStyle = e.currentTarget.classList;
            if(btnStyle.contains("increase")) {
                count += countByValue;
            } else if(btnStyle.contains("decrease")) {
                count -= countByValue;
            } else {
                count = 0;
            }
            value.textContent = count;
            getCountColor();
        })
    });

    function getCountColor() {
        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else if(count === 0) {
            value.style.color = 'black';
        }
    }
    this.disabled = true;
});