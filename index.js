"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
console.log(getFullName({ firstName: "Larry", lastName: "Page" }));
console.log(getFullName({ firstName: "Steve", lastName: "Jobs" }));
// Hasil dari Soal 2:
function wraplnArray(item) {
    return [item];
}
console.log(wraplnArray(99));
console.log(wraplnArray("seratus"));
