window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (this.window.scrollY > 40) {
        document.getElementById("thisPartMoves").style.width = scrolled + "%";
    } else {
        document.getElementById("thisPartMoves").style.width = "0%";
    }
}