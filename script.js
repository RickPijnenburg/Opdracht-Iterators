const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while(i < colors.length){
    console.log(colors[i]);
    i++;
};

for (let z = 0; z < colors.length; z++){
    console.log(colors[z]);
};

colors.forEach(Element => console.log(Element));

const person = {
    'name': 'Rick',
    'age': 45,
    'sex': 'male',
    'length': 1.70
};

for (const key in person){
    console.log(key + ': ' + person[key])
}