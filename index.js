const countValue = document.querySelector('#counter');


const Increament = () => {
    let velue = parseInt(countValue.innerText);
    velue = velue + 1;
    countValue.innerText = velue;

}

const decrement = () => {
    let velue = parseInt(countValue.innerText);
    velue = velue - 1;
    countValue.innerText = velue;
}

const reset = () => {
    let velue = parseInt(countValue.innerText);
    velue = 0;
    countValue.innerText = velue;
}