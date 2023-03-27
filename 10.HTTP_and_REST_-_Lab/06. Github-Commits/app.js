// трябва да напишем програма, която зарежда всички, комити, съобщения от ГитХъб репозитори чрез даден HTML. 
// ние реално трябва да вземем юзърнейма и репото от HTML textbox-ите с id-ta: "repo" и "username".
// след това трябав да направим GET заявка към GitHub API-то "https://api.github.com/repos/<username>/<repository>/commits"
// това което трябва да направим е да заредим комитите за дадено репо.
// ако мине трябва за всеки комит да добавим <li> таг в <ul> таг-а с id"commits"
// ако не мине трябва добавяме <li> таг с даден текст. 

// променяме API-to да е това, защото са ни дали юзърнейм nakov и repo nakov.io.cin
// https://api.github.com/repos/nakov/nakov.io.cin/commits

function loadCommits() {
    const username = document.getElementById("username");
    const repo = document.getElementById("repo");
    const usernameValue = username.value; // nakov
    const repoValue = repo.value; // nakov.io.cin
    const commits = document.getElementById("commits") // контейнера в който ще трябва да слагаме елементите
    const BASE_URL = "https://api.github.com/repos/"

    fetch(`${BASE_URL}${usernameValue}/${repoValue}/commits`, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            data // връща ни масив
                .forEach(({ commit }) => {
                    const li = document.createElement('li');
                    li.textContent =  `${commit.author.name}: ${commit.message}`;
                    commits.appendChild(li);
                })
        })
        .catch((err) => {
            const li = document.createElement('li')
            li.textContent = err.message
            commits.appendChild(li)
        })

}