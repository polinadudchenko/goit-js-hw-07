'use srict'

const amountOfChildren = id => {
    const element = document.getElementById(id);
    const amount = element.children.length;
    return `This list includes ${amount} categories`
}


const getInfoAboutCategory = selector => {
    const elements = document.getElementsByClassName(selector);
    for (const element of elements) {
        console.log('----------------------');
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Amount of elements: ${element.lastElementChild.children.length}`);
    }
}

console.log(amountOfChildren("categories"));
getInfoAboutCategory('item');