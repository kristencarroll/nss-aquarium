//import getTips function
//define function that automates html for tips

import { getTips } from './database.js'




export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tips">'

    // Create HTML representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tip card">
        <div class="tip__name">${tip.name}</div>
        <div class="tip__type">${tip.type}</div>
        <div class="tip__duration">${tip.duration}</div>
        </section>
        `
        // <div><img  class="fish__image image--card" src="${fish.image}" /></div>
    }
    htmlString += '</article>'

    return htmlString
}