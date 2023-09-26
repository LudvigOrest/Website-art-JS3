export let artArr;

export let imageList = [];
export let imageList2 = [];

//Pexel-api
const url = "https://api.pexels.com/v1/search?query=modernart?page=2&per_page=40";
const auth = { headers: {Authorization: "xxzPD6eb7sa0eA6uVDd0hhPcjU66MArp6vnVNZRrD1l37UnZ2bz2VNSQ"}};

//Function used to fetch artwork image-sources
export async function getArtwork(func, index) {
    fetch(url, auth)
     .then(resp => {
      return resp.json()
    })
     .then((images) => {
      for (let i = 0; i < images.photos.length; i++) {
          imageList.push(images.photos[i]);  
     }
      //func(imageList[index].src.original);
     })
     .then(() => {func(imageList[index].src.original)})
     .catch(() => {console.log("run it back"); getArtwork(func, index)});
    }
