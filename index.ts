// Hasil dari Soal 1:
type Person = {
  firstName: string;
  lastName: string;
};

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

console.log(getFullName({ firstName: "Larry", lastName: "Page" }));
console.log(getFullName({ firstName: "Steve", lastName: "Jobs" }));

// Hasil dari Soal 2:
function wraplnArray<T>(item: T): T[] {
  return [item];
}

console.log(wraplnArray(99));
console.log(wraplnArray("seratus"));

export {};
