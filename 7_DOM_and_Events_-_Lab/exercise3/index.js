// чрез Array.from преобразуваме колекцията в масив
const liItems = Array.from(document.querySelectorAll('ul > li'));

// примери ако не обръщаме към масив
const liItemsNodeList = document.querySelectorAll('ul > li');
for (const value of liItemsNodeList.values) {
    pass
}

const liItemsHTMLCollection = document.getElementsByTagName('li');
console.log(liItemsHTMLCollection.item(0))