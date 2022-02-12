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
            length: 12,
            species: "Longfin Tetra",
            location: "Gulf of Mexico"
        },
        {
            name: "Madame President",
            food: "sand dollars",
            length: 8,
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
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
