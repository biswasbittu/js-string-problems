const lyrics = 'Tumi bondhu kala pakhi ami jano ki.basonto kale tomai boltea paro ne';
const searchString = 'Pakhi';
const searchLowerCase = searchString.toLowerCase()
const lyricsLowercase = lyrics.toLowerCase();
const doesExist = lyricsLowercase.includes(searchLowerCase);
const doesExistOnline=lyrics.toLowerCase().includes(searchString.toLowerCase())
console.log(doesExist);
console.log(doesExistOnline);

// IndexOf.........
console.log(lyrics.indexOf('kale'));