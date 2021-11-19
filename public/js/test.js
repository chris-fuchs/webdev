const recipe = {
    title: "Mole",
    servings: 2,
    ingrediens: ["cinnamon", "cumin", "cocoa"]
}

/*
for (let i in recipe) {
    console.log(i,recipe[i]);
}
*/

console.log("----------------------------------------------------------------")
console.log("-----------------------------1----------------------------------")
console.log("----------------------------------------------------------------")

console.log(recipe.title)
console.log("Serves: ",recipe.servings)
console.log("Ingrediens: ")

for (let i of recipe.ingrediens) {
    console.log(i);
}

console.log("----------------------------------------------------------------")
console.log("-----------------------------2----------------------------------")
console.log("----------------------------------------------------------------")



const book1 = {
    title: "LotR",
    author: "Tolkien",
    alreadyRead: false
}

const book2 = {
    title: "1984",
    author: "Owell",
    alreadyRead: false
}

const book3 = {
    title: "Metro 2033",
    author: "SomeRussianGuy",
    alreadyRead: true
}

const books = [book1,book2,book3]

for(i in books) {
    console.log(books[i].title, "by", books[i].author)
}

console.log("\n")

for(i in books) {
    if(books[i].alreadyRead) {
        console.log("You already read",books[i].title, "by", books[i].author)
    } else {
        console.log("You still need to read",books[i].title, "by", books[i].author)   
    }
    
}
