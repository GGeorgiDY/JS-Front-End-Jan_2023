const button = document.getElementsByTagName('button')[0];
const result = document.getElementById('result');

// на долния ред добавяме нови класове на result. За тях в CSS съм казал да правят дадени неща. 
result.classList.add('text', 'typography');
// на долния ред махаме даден клас 
result.classList.remove('typography')

button.addEventListener('click', toggle);

function toggle() {
    if (result.style.display === 'none') {
        result.style.display = 'block';
    } else {
        result.style.display = 'none';
    }
}