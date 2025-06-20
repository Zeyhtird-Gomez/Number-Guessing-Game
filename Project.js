let x, y;
let attempts = 0;

y = Math.floor(Math.random() * 100) + 1;
console.log("Target:", y);

button.onclick= function () {
    x = Number(document.getElementById("answer").value);
    attempts++;

    const text = document.getElementById("text");

    if (isNaN(x)) {
        text.textContent = "Please enter a number!";
        return;
    }

    if (x === y) {
        text.textContent = `Winner in ${attempts} attempts!`;
        document.getElementById("button").disabled = true;
    } else if (x > y) {
        text.textContent = "Too High";
    } else if (x < y) {
        text.textContent = "Too Low";
    }

    document.getElementById("answer").value = "";
};

//Zeyhtird Gomez
