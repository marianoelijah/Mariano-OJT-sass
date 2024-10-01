var slider = tns({
    container: ".homeTest__slider",
    items: 3,
    speed: 200,
    gutter: 100,
    slideBy: "page",
    autoplay: true,
    navPosition: "button",
    containerControls: "#conrols",
    prevButton: ".prev",
    nextButton: ".next",
    responsive: {
        1250: {
            items: 3,
        },
        200: {
            items: 1,
        },
    },
});