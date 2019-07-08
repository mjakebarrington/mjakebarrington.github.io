document.getElementById('landing').style.visibility='visible';
document.getElementById('about').style.visibility='hidden';
document.getElementById('portfolio').style.visibility='hidden';
document.getElementById('contact').style.visibility='hidden';

document.getElementById('land').addEventListener("click", () => {
    document.getElementById('landing').style.visibility='visible';
    document.getElementById('about').style.visibility='hidden';
    document.getElementById('portfolio').style.visibility='hidden';
    document.getElementById('contact').style.visibility='hidden';
})

document.getElementById('aboot').addEventListener("click", () => {
    document.getElementById('landing').style.visibility='hidden';
    document.getElementById('about').style.visibility='visible';
    document.getElementById('portfolio').style.visibility='hidden';
    document.getElementById('contact').style.visibility='hidden';
})

document.getElementById('port').addEventListener("click", () => {
    document.getElementById('landing').style.visibility='hidden';
    document.getElementById('about').style.visibility='hidden';
    document.getElementById('portfolio').style.visibility='visible';
    document.getElementById('contact').style.visibility='hidden';
})

document.getElementById('cont').addEventListener("click", () => {
    document.getElementById('landing').style.visibility='hidden';
    document.getElementById('about').style.visibility='hidden';
    document.getElementById('portfolio').style.visibility='hidden';
    document.getElementById('contact').style.visibility='visible';
})