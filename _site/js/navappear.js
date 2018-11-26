$(window).scroll(
    {
        previousTop: 0
    },
    function () {
        // get current distance from top of viewport
    var currentTop = $(window).scrollTop();
        // define the header height here
    var headerHeight = 100;
        // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if( $(window).scrollTop() > headerHeight ) {
     if (currentTop < this.previousTop) {
       $(".headerMain").css("opacity", "1");
     } else {
       $(".headerMain").css("opacity", "0");
     }
   }
    this.previousTop = currentTop;
});
