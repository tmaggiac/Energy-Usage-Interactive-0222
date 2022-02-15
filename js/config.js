siteWidth = window.innerWidth;

var config = {
    width: 800,
    numColumns: 8,
    transitionDuration: 500,
    transitionDelay: 8
};


//function blah() {
//  if (siteWidth <= 800) { // If media query matches
//    document.numColumns = 8;
//  } else {
//    document.numColumns = 4;
//  }
//}
//
//blah() // Call listener function at run time

window.addEventListener('resize', () => {
        siteWidth = window.innerWidth;
        renderGraphics();
    });

    const renderGraphics = () => {
//        const blah = document.querySelector('#chart');
//        console.log("blah")
//        const svg = blah.querySelector('svg')
        if (siteWidth >= 800) {
            console.log(config);
            config = {
                width: 800,
                numColumns: 8,
                transitionDuration: 500,
                transitionDelay: 8,
            };
            updateChart()
        } else if (siteWidth >= 600){
            config = {
                width: 600,
                numColumns: 6,
                transitionDuration: 500,
                transitionDelay: 8,
            };
            updateChart()
        } else {
            config = {
                width: 400,
                numColumns: 4,
                transitionDuration: 500,
                transitionDelay: 8,
            };
            updateChart()
    }}
    
renderGraphics();

