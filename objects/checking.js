let book={
    title:"The Alchemist",
    author:"Paulo coehlo",
};
function hasProperty(obj,key){
    return key in obj;
}

console.log(hasProperty(book,"title"));
console.log(hasProperty(book,"author"));