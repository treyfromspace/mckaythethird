// FADE-OUT SUCKA
$(document).on("click", ".tm-link", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(300, function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});

// MENU OVERLAY
$('#toggle').click(function() {
   $(this).toggleClass('tm-menu_container-active');
   $('#overlay').toggleClass('open');
  });
