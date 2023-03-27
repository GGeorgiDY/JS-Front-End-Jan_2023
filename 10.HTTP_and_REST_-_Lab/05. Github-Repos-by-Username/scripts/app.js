// трябва да напишем JS функция, която да екзекютва AJAX request със Fetch API и се лоадват всички репозиторита на даден юзър чрез подаден юзърнейм (който ще вземем от input таг с id:"username"). Репозиторитата трябва да са в лист, който да има id:"repos". 
// След това трябва да използвам пропъртитата full_name и html_url за да създам линк за всяко репо. 
// Ако има грешка трябва да апенднем към лист-а, item с текст грешката. 
// трябва да трия контента на лист-а преди да добавям нов контент.


function loadRepos() {
	const username = document.getElementById('username').value;
	const BASE_URL = `https://api.github.com/users/${username}/repos`;
	const repoList = document.getElementById('repos');

	Array.from(repoList.children).forEach((el) => {
		el.remove();
	});

	fetch(BASE_URL, { method: 'GET' })
		.then((res) => res.json())
		.then((jsonData) => {
			jsonData.forEach(element => {
				let newRepo = document.createElement('li');
				repoList.appendChild(newRepo);
				let newRepoAnchor = document.createElement('a');
				newRepoAnchor.textContent = `${element.full_name}`;
				newRepoAnchor.href = `${element.html_url}`;
				newRepo.appendChild(newRepoAnchor);
			})
		})
		.catch((err) => {
			let error = document.createElement('li');
			error.textContent = 'Not found!';
			repoList.appendChild(error);
		})
}
