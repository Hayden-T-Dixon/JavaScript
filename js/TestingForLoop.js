const seaCreatures = ["Shark", "Fish", "Octopus"];

let output = document.createElement("Output");

for (const seaCreature of seaCreatures) {
    console.log(seaCreature);
    let animal = document.createTextNode(seaCreature);
    output.append(animal);
    document.body.appendChild(output);
}