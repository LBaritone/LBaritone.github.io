$(document).ready(function() {


    $('#fullpage').fullpage({
        menu: '#menu',
        lockAnchors: false,
        // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ["Trump's Speech", 'Worldwide Comsumption',
            'Deaths in 2016', 'Deaths On the Rise', 'Death in Your Community', 'Map', 'Help'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        scrollBar:true,
        // autoScrolling:false


        // automatic scroll
        afterRender: function() {}
    });

    //play and pause of beginning youtube video
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);


    var clicked = false;
    player.on('timeupdate', function(data) {
        if (data["seconds"] >= 405.700 && !clicked) {
            clicked = true;

            var currentvolume = 1;
            downsizeVolume(currentvolume);
            function downsizeVolume(set_volume){
                console.log(currentvolume);
                currentvolume -= 0.1;

                if (currentvolume <= 0) {
                    player.pause().then(function() {
                        // the video was paused
                    }).catch(function(error) {
                        switch (error.name) {
                            case 'PasswordError':
                                // the video is password-protected and the viewer needs to enter the
                                // password first
                                break;

                            case 'PrivacyError':
                                // the video is private
                                break;

                            default:
                                // some other error occurred
                                break;
                        }
                    });
                }
                else {
                    setTimeout(function () {
                        player.setVolume(currentvolume);
                        downsizeVolume(currentvolume);
                    }, 100);
                }
            }
        }
    });


});