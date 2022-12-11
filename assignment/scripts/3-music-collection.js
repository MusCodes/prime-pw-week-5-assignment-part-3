console.log('***** Music Collection *****')

// created a empty array called Collections
let collection = [];
// function named addtoCollection.
function addtoCollection(title, artist, yearPublished)
{ const musicobj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,};

collection.push(musicobj);
return musicobj;
}

//Testing addToCollection Function.
console.log(addtoCollection('ye', 'Kanye West', '2018'));
console.log(addtoCollection("Goodbye & Good Riddance", 'Juice Wrld', '2018'));
console.log(addtoCollection('17', 'xxxtentacion', '2017'));
console.log(addtoCollection('Stoney', 'PostMalone', '2016'));
console.log(addtoCollection('Black Chrome Hearts', 'Manza', '2020'));
console.log(addtoCollection('American Idiot', 'Green Day', '2004'));

console.log(collection);

// adding showCollection function.
function showCollection (array){
   console.log(array.length);
   for (let i=0; i<array.length; i++){
   console.log(collection[i].title,'by', collection[i].artist, 'published in the year', collection[i].yearPublished );}


}
// testing ShowCollection function/
showCollection(collection);





