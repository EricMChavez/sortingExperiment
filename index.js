let display = document.getElementById('display');
let time = document.getElementById('time');
let animals = [
	'Tiger',
	'Kangaroo',
	'Iguana',
	'Lion',
	'Baboon',
	'Pig',
	'Armadillo',
	'Vulture',
	'Weasel',
	'Zebra',
	'Goldfish',
	'Ocelot',
	'Monkey',
	'Jellyfish',
	'Dragon',
	'Quail',
	'Xerus',
	'Cat',
	'Eagle',
	'Nightingale',
	'Yak',
	'Snake',
	'Fox',
	'Hare',
	'Reindeer',
	'Uakari'
];
let copy = [
	'Tiger',
	'Kangaroo',
	'Iguana',
	'Lion',
	'Baboon',
	'Pig',
	'Armadillo',
	'Vulture',
	'Weasel',
	'Zebra',
	'Goldfish',
	'Ocelot',
	'Monkey',
	'Jellyfish',
	'Dragon',
	'Quail',
	'Xerus',
	'Cat',
	'Eagle',
	'Nightingale',
	'Yak',
	'Snake',
	'Fox',
	'Hare',
	'Reindeer',
	'Uakari'
];
let alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz ';
let newList = [];
function swap(index) {
	animals.splice(index, 0, animals[index + 1]);
	animals.splice(index + 2, 1);
}
function flip(index) {
	newList.splice(index, 0, newList[index + 1]);
	newList.splice(index + 2, 1);
}
function bubble() {
	let start = window.performance.now();
	for (let items in animals) {
		for (let i = 0; i < animals.length - 1; i++) {
			if (alphabet.indexOf(animals[i][0]) > alphabet.indexOf(animals[i + 1][0])) {
				swap(i);
			} else if (alphabet.indexOf(animals[i][0]) == alphabet.indexOf(animals[i + 1][0])) {
				if (alphabet.indexOf(animals[i][1]) > alphabet.indexOf(animals[i + 1][1])) {
					swap(i);
				} else if (alphabet.indexOf(animals[i][1]) == alphabet.indexOf(animals[i + 1][1])) {
					if (alphabet.indexOf(animals[i][2]) > alphabet.indexOf(animals[i + 1][2])) {
						swap(i);
					}
				}
			}
		}
	}
	let end = window.performance.now();
	time.innerHTML = end - start + 'ms';
	updateUI();
	greyOut();
}
function insertion() {
	function insertionSort() {
		let start = window.performance.now();
		for (var i = 0; i < animals.length; i++) {
			var temp = animals[i];
			var j = i - 1;
			while (j >= 0 && alphabet.indexOf(animals[j][0]) > alphabet.indexOf(temp[0])) {
				animals[j + 1] = animals[j];
				j--;
			}
			animals[j + 1] = temp;
		}
		let end = window.performance.now();
		time.innerHTML = end - start + 'ms';
		return animals;
	}
	animals = insertionSort();
	updateUI();
	greyOut();
}
function quick() {
	let start = window.performance.now();
	animals.sort();
	let end = window.performance.now();
	time.innerHTML = end - start + 'ms';
	updateUI();
	greyOut();
}
function scramble() {
	animals = [ ...copy ];
	updateUI();
	unGrey();
}
function updateUI() {
	let i = 1;
	display.innerHTML = '';
	for (let animal of animals) {
		let item = document.createElement('div');
		item.classList = 'item';
		item.innerHTML = i + ': ' + animal;
		display.insertAdjacentElement('beforeend', item);
		i++;
	}
}
function unGrey() {
	document.getElementById('bubble').style.backgroundColor = 'blue';
	document.getElementById('insert').style.backgroundColor = 'blue';
	document.getElementById('quick').style.backgroundColor = 'blue';
}
function greyOut() {
	document.getElementById('bubble').style.backgroundColor = 'grey';
	document.getElementById('insert').style.backgroundColor = 'grey';
	document.getElementById('quick').style.backgroundColor = 'grey';
}
updateUI();
