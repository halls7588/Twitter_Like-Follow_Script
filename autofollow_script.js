
//Auto follow all users on current page
//Scroll every 10 seconds and repeat
setInterval(function () {
    window.scrollTo(0, document.body.scrollHeight);
    $('.EdgeButton.EdgeButton--secondary.EdgeButton--small.button-text.follow-text').click();
}, 10000);
