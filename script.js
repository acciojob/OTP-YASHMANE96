const codes = document.querySelectorAll('.code');

codes[0].focus();


const codeContainer = document.querySelector('.code-container');
codeContainer.addEventListener('input', (e) => handleInput(e));
codeContainer.addEventListener('keydown', (e) => handleKeyDown(e));


function handleInput(e) {
    const input = e.target;

    if (!input.classList.contains('code')) return;
    const index = parseInt(input.dataset.index);
    if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
    }

    if (input.value !== '' && index < codes.length - 1) {
        codes[index + 1].focus();
    }
}

function handleKeyDown(e) {
    const input = e.target;
    
    if (!input.classList.contains('code')) return;

    const index = parseInt(input.dataset.index);

    if (e.key === 'Backspace') {
        e.preventDefault(); 
        
        if (input.value !== '') {
            input.value = '';
        } 
        
        else if (index > 0) {
            codes[index - 1].focus();
            codes[index - 1].value = '';
        }
        
    }
}