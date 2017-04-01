var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
allNames = [],
allNames = allNames.concat(femaleNames,maleNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	var x = allNames.push('Marian')
}
console.log(allNames);