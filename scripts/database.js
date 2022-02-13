const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "sheepshead",
            location: "Atlantic Coast"
        },
        {
            name: "Brando",
            food: "kelp",
            length: 6,
            species: "Longfin Tetra",
            location: "Gulf of Mexico"
        },
        {
            name: "Madame President",
            food: "sand dollars",
            length: 10,
            species: "Electric Blue Acara Cichlid",
            location: "Great Blue Hole"
        },
        {
            name: "Pip and Lily",
            food: "fish flakes",
            length: 4,
            species: "Ryukin Goldfish",
            location: "Pet Smart"
        }
    ], 
    tips: [
        {
            name: "feeding",
            type: "care",
            duration: 5
        },
        {
            name: "tank cleaning",
            type: "maintenance",
            duration: 35
        }
    ],
    locations: [
        {
            name: "Atlantic Coast",
            temperature: "temperate",
        },
        {
            name: "Gulf of Mexico",
            temperature: "hot",
        },
        {
            name: "Great Blue Hole",
            temperature: "cool"
        }

    ]

}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
//define and export getter functions for tips and locations
export const getTips = () => {
    return database.tips.map(tip => ({...tip}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}
const fishies = getFish()

export const mostHolyFish = () => {

    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishy of fishies) {
       
        if (fishy.length % 3 === 0) {
            holyFish.push(fishy)
            return holyFish
    }

    //return holyFish
}
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fishy of fishies) {

        if (fishy.length % 5 === 0) {
            soldiers.push(fishy)
            return soldiers
        }
    }
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}
