//import { getFish } from "./database.js"
//import { soldierFish, mostHolyFish } from "./database.js"
// import { FishList } from "./fish.js"
// import { TipList } from "./tips.js"
// import { LocationList } from "./locations.js"
// const soldier = soldierFish()
// const holy = mostHolyFish()
// console.log(soldier)
// console.log(holy)
// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

// Import the FishList function from the correct module

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */


// const parentHTMLElement = document.querySelector(".container")


// parentHTMLElement.innerHTML = FishList()
import { MartinsAquarium } from "./MartinsAquarium.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = MartinsAquarium()
}

renderAllHTML()



