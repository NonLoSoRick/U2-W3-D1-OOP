class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  theBigger(a) {
    if (this.age < a.age) {
      return "Il più piccolo sono io " + this.firstName;
    } else if (this.age > a.age) {
      return "Il più grande sono io " + this.firstName;
    } else {
      return "mmmmm";
    }
  }
}

const User1 = new User("Riccardo", "Righi", "21", "Carpi");

const User2 = new User("Bob", "Marley", "75", "Giamaica");

console.log(User1.theBigger(User2));
console.log(User2.theBigger(User1));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  truly(a) {
    if (this.ownerName === a.ownerName) {
      return true;
    } else {
      return `Il proprietario di ${this.petName} è ${this.ownerName}`;
    }
  }
}

const Owner1 = new Pet("dog", "Riccardo", "cane", "carlino");
const Owner2 = new Pet("paola", "Luca", "cane", "labrador");
const Owner3 = new Pet("mimì", "Luca", "cane", "boxer");

console.log(Owner1.truly(Owner2));
console.log(Owner2.truly(Owner3));
console.log(Owner3.truly(Owner2));

// -------------------------------------------------------------------------------------------------------------

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const saveButton = document.querySelector("form button");

const space = [];

const cards = function () {
  const row = document.getElementById("space");
  row.innerHTML = "";
  space.forEach((pets) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${pets.petsName} ${pets.ownerName}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pets.species}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pets.breed}</h6>
                </div>
            </div>
            `;
    row.appendChild(newCol);
  });
  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const pets = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  console.log("CONTATTO CREATO", pets);
  space.push(pets);
  cards();
});
