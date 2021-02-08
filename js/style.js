$(document).mousemove(function(e){
    $('.cuosor-ball').css("top", e.pageY);
    $('.cuosor-ball').css("left", e.pageX);
});