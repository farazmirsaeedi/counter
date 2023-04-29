var result = document.getElementById("res");

let value = 0
const counter = () => {
    value++;
    document.getElementById("res").innerHTML = value;
}

const counter1 = () => {
    value--;
    document.getElementById("res").innerHTML = value;
}


const rest = () => {
    value = 0;
    document.getElementById("res").innerHTML = value;
}


