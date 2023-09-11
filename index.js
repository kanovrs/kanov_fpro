let input = document.querySelector('#input');
let elementGhost = document.createElement('div');

elementGhost.style.border = 'thick double #32a1ce';
elementGhost.style.padding = '20px';
elementGhost.textContent = 'Div-ghost';

input.addEventListener('focus', function() {
    document.body.append(elementGhost); 
});

input.addEventListener('blur', function () {
    elementGhost.remove();
});