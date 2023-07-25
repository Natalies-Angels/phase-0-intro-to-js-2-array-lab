const cats=[ 'Milo' ,'Otis', 'Garfield']

function destructivelyAppendCat(name)
{
  cats.push(name);
  return cats;
}
console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name)
{
  cats.unshift(name);
  return cats;
}
console.log("Bob");

function destructivelyRemoveLastCat()
{
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat()
{
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());

function appendCat(name)
{
    const newCatEnd=[...cats, name]
    return newCatEnd;
}
console.log(appendCat("Bob"))

function prependCat(name)
{
    const newCatFront=[name,...cats]
    return newCatFront;
}
console.log(prependCat("Arnold"))

function removeFirstCat()
{
    return cats.slice(1)
    
}
console.log(removeFirstCat());

function removeLastCat()
{
    return cats.slice(0, cats.length - 1)
}
console.log(removeFirstCat())