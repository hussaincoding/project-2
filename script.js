var tl = gsap.timeline()
tl.from(".logo,.nav-item",{
    y:-100,
    duratiton:1.5,
    delay:0.5,
    opacity:0,
    stagger:0.2, 
})
tl.from(".masthead-subheading,.its-nice,.btn-xl",{
        y:120,
        delay:0.5,
        opacity:0,
        stagger:0.4,
        // scale:0
})
gsap.from(".nav-1,h2,h3",{
        y:100,
        scale:0,
        // delay:1.9,
        duratiton:1,
        stagger:0.4,
        scrollTrigger:".nav-1,h2,h3",
        markers:true,
        start:"top 50%",
        scrub:true,
})
gsap.from(".col-md-4",{
    scale:0,
    // rotate:90,
    // fade:2,
    // delay:1,
    // y:90,
    duratiton:0.5,
    stagger:0.4,
    opacity:0.1,
    scrollTrigger:".col-md-4"
})
gsap.from(".navbar-2,h2,h3",{
    // y:100,
    // scale:0,
    // delay:1.9,
    duratiton:1,
    stagger:0.4,
    scrollTrigger:".navbar-2,h2,h3"
})
gsap.from(".col-lg-4 ",{
    scale:0,
    // rotate:90,
    // fade:2,
    // delay:1,
    // y:90,
    duratiton:0.5,
    stagger:0.4,
    opacity:0.1,
    scrollTrigger:".col-lg-4"
})
gsap.from(".abut-1",{
    // y:100,
    // scale:0,
    // delay:1.9,
    duratiton:1,
    stagger:0.4,
    scrollTrigger:".abut-1"
})
{/* <a href="tel:0300123123">923000123412</a>
<a href="mailto:hussain@gmail.com">hussain@gmail.com</a> */}