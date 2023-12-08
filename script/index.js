const form = document.querySelector('form');
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    input.value = eval(inputValue);
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText === 'C') return (input.value = '');
        if (button.innerText === '=') return;
        const inputValue = input.value;
        input.value = inputValue + button.innerText;
    });
})