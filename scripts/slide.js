window.onload = function() {
    var i = 0;
    var video = document.getElementById('snow');
    var source = document.createElement('source');
    source.setAttribute('src', 'images/jump.mp4');
    video.appendChild(source);
    video.play();}
/*


setInterval(function() {  
    var clip;
    video.pause();
    if (i==0){
        clip = 'images/powshot.mp4';
        i++;
    }
    else {
        clip = 'images/jump.mp4'
        i = 0;
    }
    source.setAttribute('src', clip); 
    video.load();
    video.play();
}, 20000);
}

*/