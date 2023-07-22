document.addEventListener("DOMContentLoaded", function () {
    const sectionRate = document.querySelector(".sectionRate");
    const sectionThankyou = document.querySelector(".sectionThankyou");
    const rating = document.querySelectorAll(".rating p");
    const submit = document.querySelector(".submit");
    const ratingResult = document.querySelector('.ratingResult');

    // Variable to store the number of the selected p tag
    let selectedNumber;

    // Add a click event listener to each p element
    for (var i = 0; i < rating.length; i++) {
        rating[i].addEventListener("click", function () {
            // Remove the "selected" class from all p elements
            for (var j = 0; j < rating.length; j++) {
                rating[j].classList.remove("selected");
            }
            // Add the "selected" class to the clicked p element
            this.classList.add("selected");
            // Store the number of the clicked p tag in the variable
            selectedNumber = this.textContent;

            if (selectedNumber) {
                submit.addEventListener("click", () => {
                    sectionRate.style.display = 'none';
                    sectionThankyou.style.display = 'flex';
                    ratingResult.innerHTML = selectedNumber;
                 });
            } else {
                submit.addEventListener("click", (event) => {
                    event.preventDefault;
                 });
            }

        });
    }


});


