//Question 40: Album: Create objects for music albums.


function make_album(artist:string , title:string ) : {artist:string , title:string } {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
  } 
  let album = make_album("Artist One", "The First Album")
 console.log(album)

 album = make_album("Artist Two", "The Second Album")
 console.log(album)

 album = make_album("Artist Three", "The Third Album")
   console.log(album)