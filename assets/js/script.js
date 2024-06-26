$(window).on('load', function(){
    
    let viewPortWidth = $(window).width();

    if(viewPortWidth > 900){
        console.log(viewPortWidth);
        var controller = new ScrollMagic.Controller();

        $('.slide').css('opacity', 0);
        new ScrollMagic.Scene({
            reverse: true,
            duration: 400,
            triggerHook: "onCenter",
            offset: 400,
        })
            .triggerElement('#slide1') // pins the element for the the scene's duration
            .setPin('#slide1')
            .on('start', function(){
                $('#slide1').animate({'opacity': 1});
            })
            .on("end", function(){
                $('#slide1').animate({'opacity': 0});
                
            })
            .addTo(controller);

        new ScrollMagic.Scene({
            reverse: true,
            duration: 400,
            offset: 400,
            triggerHook: "onCenter",
        })
            .triggerElement('#slide2') // pins the element for the the scene's duration
            .setPin('#slide2')
            .on('start', function(){
                $('#slide2').animate({'opacity': 1});
            })
            .on("end", function(){
                $('#slide2').animate({'opacity': 0});
                
            })
            .addTo(controller);

            new ScrollMagic.Scene({
                reverse: true,
                duration: 400,
                offset: 400,
                triggerHook: "onCenter",
            })
                .triggerElement('#slide3') // pins the element for the the scene's duration
                .setPin('#slide3')
                .on('start', function(){
                    $('#slide3').animate({'opacity': 1});
                })
                .on("end", function(){
                    $('#slide3').animate({'opacity': 0});
                    
                })
                .addTo(controller);
    
        }
});