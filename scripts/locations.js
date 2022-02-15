
//import getLocations function
//define function that automates and exports html for locations
import { getLocations } from './database.js'




export const LocationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locations">'

    // Create HTML representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location card">
        <div class="location__name">${location.name}</div>
        <div class="location__temperature">${location.temperature}</div>
        </section>
        `
        // <div><img  class="fish__image image--card" src="${fish.image}" /></div>
    }
    htmlString += '</article>'

    return htmlString
}