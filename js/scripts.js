var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
allNames = femaleNames.concat(maleNames);
newName = 'Marian';
if (allNames.indexOf(newName) === -1) /* w zasadzie ta reguła co robi? (allNames.indexOf(newName) === -1 bo nie do końca rozumiem dodałem bo w zadaniu chcieli :)*/{
	var x = allNames.push('Marian')
}
console.log(allNames);