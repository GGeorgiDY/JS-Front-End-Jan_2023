const liItems = Array.from(document.getElementsByTagName('li'));
const firstLi = liItems[0];
console.log(firstLi.parentElement); // връща родителя
console.log(firstLi.parentElement.parentElement); // връща родителя на родителя
console.log(firstLi.children); // връща HTML колекция. Ако искаш да я обходиш с map, трябва да я направиш на масив
