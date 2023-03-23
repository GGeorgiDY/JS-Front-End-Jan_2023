// да създадем функционалност която показва и скрива информация за юзърите
// когато се кликне на show more бутона, да се покаже допълнителната информация за имайл и възраст
// след това променяме текст контент-а на бутона да стане Hide id
// ако изберем Lock, нито show more, нито hide it бутоните трябва да правят нещо
// ако изберем unlock ще можеме да ползваме бутоните

function lockedProfile() {
    // взимаме си всички бутони
    const buttons = Array.from(document.getElementsByTagName('button'));
    // закачаме click събитие за всеки бутон
    for (const button of buttons) {
        button.addEventListener('click', toggleInformation);
    }

    function toggleInformation(e) {
        const btn = e.currentTarget; // <button>Show more</button>
        const currentProfile = btn.parentElement; // <div class="profile">...</div>
        const children = Array.from(currentProfile.children); // връща списък със всички children-и
        const additionalInformation = children[9] // взимаме по индекс нужния елемент
        console.log(children) // (11) [img.userIcon, label, input, label, input, br, hr, label, input, div#user2HiddenFields, button]

        // взимаме check маркера за Unlock
        const lockCheck = children[4]

        if (lockCheck.checked){ // понеже checked е булева променлива за JS, проверяваме дали връща True
            if (btn.textContent === "Show more") {
                additionalInformation.style.display = 'block';
                btn.textContent = "Hide it";
            } else {
                additionalInformation.style.display = 'none';
                btn.textContent = "Show more";
            }
        }
    }
}