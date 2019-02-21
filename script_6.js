const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
let entr70 = []
entrepreneurs.forEach(el => {
    if (1970 <= el.year && el.year < 1980) {
        entr70.push(el);
    }
}
);
console.log(entr70);


console.log("Sors une array qui combien le prénom et le nom des entrepreneurs")
let arrNames = []
entrepreneurs.forEach(el => {
    arrNames.push(`${el.first} ${el.last}`)
});
console.log(arrNames);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
let age = 0;
let d = new Date();
let currentYear = d.getFullYear();
entrepreneurs.forEach(el => {
    age = currentYear - el.year;
    el.age = age;
});
console.log(entrepreneurs);

console.log("Trie les inventeurs par ordre alphabétique du nom de famille")
entrepreneurs.sort(function (a, b) {
    let nameA = a.last; // ignore upper and lowercase
    let nameB = b.last; // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});
console.log(entrepreneurs)
