    function playclip(index){
        var audio = document.getElementById("SH"+index);
        audio.play();
    }
function stopclip(index) {
    var thissound=document.getElementById("SH"+index);
    thissound.pause();
}	