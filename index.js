let link1 = document.querySelector('#link1');
let link2 = document.querySelector('#link2');

let protocolPattern = /^(https?:\/\/)/i;

function redirectToSite(link) {
    event.preventDefault();
    let linkAtr = link.getAttribute('href');

    if (!protocolPattern.test(linkAtr)) {
        linkAtr = 'http://' + linkAtr;
        link.setAttribute('href', linkAtr);
    }

    window.location.href = linkAtr;
}

link1.addEventListener('click', () => redirectToSite(link1, event));
link2.addEventListener('click', () => redirectToSite(link2, event));
