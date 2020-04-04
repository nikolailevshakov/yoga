
window.addEventListener('DOMContentLoaded', () => {
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = text;
        document.body.insertBefore(newDiv,document.getElementsByTagName('header')[0]);
        newDiv.style.height = this.height;
        newDiv.style.width = this.width;
        newDiv.style.bg = this.bg;
        newDiv.style.fontSize = this.fontSize;
        newDiv.style.textAlign = this.textAlign;
        newDiv.style.position = 'absolute';
    }
}

let sampleDiv = new Options('100px', '300px', 'red', '20px', 'center');

sampleDiv.createDiv('odihfgopdjfgpojsd');
});