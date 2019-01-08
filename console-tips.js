//CONSOLE TIPS

const a = {name: 'carola', age: 55, nervous: false};
const b = {name: 'hernan', age: 48, nervous: false};
const c = {name: 'cox', age: 62, nervous: false};

//bad cod
console.log('Top djs');
console.log(a);
console.log(b);
console.log(c);

//good code
//computed property name
console.log('Top djs');
console.log({a,b,c});

//witch css style
console.log('%c Top djs', 'color:orange; font-weight: bold');
console.log({a,b,c});

//console.table([...])
console.table([a, b, c]);

//console.time(...)
console.time('looper');
let i = 0;
while(i < 5){ i++ }
console.timeEnd('looper');

