import { getFish } from "./database.js"
import { FishList } from "./fishList.js"

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */


// const parentHTMLElement = document.querySelector(".container")


// parentHTMLElement.innerHTML = FishList()

const mainContainer = document.querySelector(".container")

const renderAllHTML = () => {
    mainContainer.innerHTML = FishList()
}

renderAllHTML()