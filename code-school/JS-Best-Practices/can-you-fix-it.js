//What is going on with this test? No time is being given for the
//innermost test. Can you fix it?



var array = ['Inverted Peninsula', ',',
  'Inverted Peninsula', ', ', 'I', '—',
  'P', '...', 'hmmm', '.'];
var internalThoughts = '';

console.time('Test');

internalThoughts = array.join(' ');

console.time('innerTest');
console.log(internalThoughts);
console.time('innerTest');

console.timeEnd('Test');
