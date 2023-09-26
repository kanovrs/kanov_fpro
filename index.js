function generateList(array) {
    
let ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');

        if (Array.isArray(array[i])) {
            let subList = generateList(array[i]);
            li.appendChild(subList);
        } else {
            li.textContent = array[i];
        }
        ul.appendChild(li);
    }
    return ul;
}

let array = [1, 3, 5, 4, [3, 2,], 8, [6, 7]];
let list = generateList(array);

document.body.appendChild(list);