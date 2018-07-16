
// Get guest characters
export const getGuestCharacters = (episodes) => {

    let guests = [];
    episodes.forEach(episode => {
        const featuredGuestStars = episode.FeaturedGuestStars.split(",");
        featuredGuestStars.forEach(guest => {
            if (!!guest && !guests.includes(guest)) {
                guests.push(guest);
            }
        });
    });
    
    return guests.sort();
};


