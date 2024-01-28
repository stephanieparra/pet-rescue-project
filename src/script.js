const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, breed) {
  const pet = {
    name: name,
    breed: breed,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play. 💤");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    },
  };
  return pet;
};

const koda = createPet("Koda", "Bernadoodle");
const riley = createPet("Riley", "Doberman");
const kiko = createPet("Kiko", "Vizla");
const malibu = createPet("Malibu", "Yorkie");
const bobby = createPet("Bobby", "Poodle");

//console.log(koda, riley, kiko, malibu, bobby);

//koda.sleep();
//riley.play();

//console.log(koda, riley);

riley.isTired = 8;
bobby.isTired = 9;

//Array of Pet Objects//
const allPets = [koda, riley, kiko, malibu, bobby];
//console.log(allPets);

//Display pets in browser//
const showPets = function (petArray) {
  //empty list
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.breed} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
