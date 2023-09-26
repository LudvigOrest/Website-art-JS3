export let artArr;

const URL = "https://api.pexels.com/v1/search?query=art";

export const testar = fetch(URL, {headers: { Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ" } }
    )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let res = data;
        artArr = res.photos;
        //console.log(artArr);
        //console.log(artArr[1].src.original);
        return artArr[1].src.original;
    })
    .catch(function(error) {
        console.log(error);
    })

//Async fetch function to get artwork for the shop thumbnails
export async function getArtwork(index) {
    const testar = fetch(URL, {headers: { Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ" } }
    )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let res = data;
        artArr = res.photos;
        console.log(artArr);
        console.log(artArr[1].src.original);
        return artArr[1].src.original;
    })
    .catch(function(error) {
        console.log(error);
    })  
}

/**
 * let arr = [];
    let arr2 = [];

    let result = await fetch("https://api.pexels.com/v1/search?query=art" ,{
        headers: {
            Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"
        }
    }).then(result => result.json())
    .then(result => {
        arr.push(result.photos);
        arr2 = arr.map(getPhotosFromArr);
        console.log(arr[0].src);
        console.log(arr2)
    }).then(arr => console.log(arr))
}

function getPhotosFromArr(array) {
    return array;
 * 
 * 
 * ;
    let artwork = await result.json();
    return artwork;
 */