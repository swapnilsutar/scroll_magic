const flightPath ={
    curviness:1.25,
    autoRotate:true,
    values:[
        { x: 200, y: -20 },
        { x: 500, y: 100 },
        { x: 700, y: -50 },
        { x: 250, y: 50 },
        { x: 1900, y: -200 }
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".rocket", 1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement:".animation",
    duration:5000,
    triggerHook:0
})
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);