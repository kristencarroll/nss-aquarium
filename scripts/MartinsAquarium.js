
import { FishList } from "./fish.js"
import { TipList } from "./tips.js"
import { LocationList } from "./locations.js"

export const MartinsAquarium = () => {
    return `
        <h1>Martin's Aquarium</h1>

        <article class="fish">
            <section class="fishList">
                <h2>Fish</h2>
                ${FishList()}
            </section>
            <section class="tips">
                <h2>Tips</h2>
                ${TipList()}
            </section>
            <section class="locations">
                <h2>Locations</h2>
                ${LocationList()}
            </section>
        </article>
    `
}