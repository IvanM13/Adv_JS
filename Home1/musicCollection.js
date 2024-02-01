"use stict"

const musicCollection = {
    albums: [
        {
            title: "Black Market",
            artist: "Weather Report",
            year: 1976
        },
        {
            title: "Heavy Weather",
            artist: "Weather Report",
            year: 1977
        },
        {
            title: "Romantic Warrior",
            artist: "Return to Forever",
            year: 1976
        },
        {
            title: "Musicmagic",
            artist: "Return to Forever",
            year: 1977
        }
    ]
}

musicCollection[Symbol.iterator] = function(){
    const array = this.albums;
    let current = 0;
    return {
        next() {
            if(current < array.length){
                return { value: array[current++], done: false};
            }
            return { value:undefined, done: true};
        }
    };
};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}