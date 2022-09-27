let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

let color = document.querySelector('.color');

let button = document.getElementById('btn');
button.addEventListener('click', () => {
    
    let colorCombi = '#';
    for (let i = 0; i <6; i++) {
        colorCombi += hex[getRandomNumber()];
    }
    color.innerHTML = colorCombi;
    let container = document.getElementById('container');
    container.style.backgroundColor = colorCombi;

});

let getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}