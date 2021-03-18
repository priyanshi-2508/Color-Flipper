const colors = ["#f6dfeb", "#046582", "#bb8082", "#709fb0", "pink", "#edffec", "#caf7e3", "#ff7171"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log(document.body);
    //get random number between 0 - 3 //colors[0]
    const randomNumber = getRandom();
    console.log(randomNumber);


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}

