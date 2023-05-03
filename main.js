var result = document.getElementById("res");

let value = 0
const counter = () => {
    value++;
    document.getElementById("res").innerHTML = value;
    color()

}

const counter1 = () => {
    value--;
    document.getElementById("res").innerHTML = value;
    color()

}


const rest = () => {
    value = 0;
    document.getElementById("res").innerHTML = value;
    color()

}

const color = () => {
    if (result.innerHTML < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";

    }
}
