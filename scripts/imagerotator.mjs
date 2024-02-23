// A little image changer I experimented with just for fun, it's not the prettiest but gets the job done.

  var images = [
    "./images/game_images/reddeadcover.jpg",
    "./images/game_images/22222.jpg", 
    "./images/game_images/baldursgate.jpg", 
    "./images/game_images/hunt.jpg",
    "./images/game_images/isaac.jpg",
    "./images/game_images/jedi.jpg",
    "./images/game_images/payday.jpg",
    "./images/game_images/ratchet.jpg",
    "./images/game_images/spmann.jpg",

    ];

 
  var currentImageIndex = 0;

  function rotateImage() {

    document.getElementById("imagebackround").src = images[currentImageIndex];
    
    currentImageIndex ++;
    
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  }

  setInterval(rotateImage, 8000);
