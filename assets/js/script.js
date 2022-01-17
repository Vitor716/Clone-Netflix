var slider = tns({  
    container: ".my-slider",
    gutter: 10,
    controls: false,
    nav: false,
    responsive: {
        "0":{
            items:2,     
        },    
        "600": {
            items: 3,
            controls: false,
            edgePadding: 30
        },
        "1000": {
            items: 5
        }
    },
    swipeAngle: false,
    speed: 400,
    mouseDrag: true
});