const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */



for (let i=1; i<=5; ++i) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.onclick = ()=> {
        displayedImage.setAttribute('src', `images/pic${i}.jpg`);
    };
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', ()=> {
    let curClass = btn.getAttribute('class');
    if (curClass == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else if (curClass == 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'dark';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})