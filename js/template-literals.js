const horse = {
    name: 'Pocotó',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

//bad string code
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');
console.log(bio);

//good string code
const {name, size, skills} = horse;
bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`;
console.log(bio);

// advamced tag example
function horseAge(str, age){
    const ageStr = age > 5 ? 'old' : 'young'
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);