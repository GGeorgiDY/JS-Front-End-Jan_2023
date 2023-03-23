// трябва всеки път в който се цъкне input-a, да направи целия backgroupd сив на div-a 
// за целта в CSS-a имаме клас .focused който трябва да закачим на div-oвете

function focused() {
    const allInputs = Array.from(document.getElementsByTagName('input'));
    
    for (const input of allInputs) {
        input.addEventListener('focus', handleFocus);
        // сега трябва когато се фокусираме върху друг input, да махнем сивия background от предишния input
        input.addEventListener('blur', handleBlur)
    }

    function handleFocus(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        // сега на parentDiv ще закачим съответния клас
        parentDiv.classList.add('focused');
        console.log(parentDiv);
    }

    function handleBlur(event) {
        const currentInput = event.target;
        const parentDiv = currentInput.parentElement;
        // проверяваме дали parentDiv-a съдържа клас focused и ако да му го махни
        if (parentDiv.classList.contains('focused')) {
            parentDiv.classList.remove('focused')
        }
    }
}