let left = document.getElementById("arrow_left");
let right = document.getElementById("arrow_right");

let slides = document.querySelector("#slides");



function translateLeft() {
    let styles = getComputedStyle(document.documentElement);
    let currentValue = styles.getPropertyValue("--imgPosition");
        
    console.log(currentValue);

    numberiser = parseInt(currentValue);
    console.log(numberiser);    

    newValue = numberiser - 100;

    console.log(newValue);
    
    document.documentElement.style
    .setProperty("--imgPosition", newValue + "px");     
};



function translateRight() {

    let styles = getComputedStyle(document.documentElement);
    let currentValue = styles.getPropertyValue("--imgPosition");
        
    console.log(currentValue);

    numberiser = parseInt(currentValue);
    console.log(numberiser);    

    newValue = numberiser + 100;
   
    document.documentElement.style
    .setProperty("--imgPosition", newValue + "px");       
    
};






let sliderArray = [];

sliderArray.push("slide_show/newImage4.jpg");
sliderArray.push("slide_show/newIamge6.jpg");
sliderArray.push("slide_show/newImage5.jpg");
sliderArray.push("slide_show/eye red lash.jpg");
sliderArray.push("slide_show/eye red lash.jpg");
sliderArray.push("slide_show/FullSizeRender.jpg");

console.log(sliderArray);

for (let i = 0; i < sliderArray.length; i++) {

    function createImage(src) {

        let image_container = document.createElement("div");
        image_container.setAttribute("class", "image-container");

        let newImage = document.createElement("img");
        newImage.setAttribute("src", src);

        image_container.appendChild(newImage);
        slides.appendChild(image_container);

    };

    createImage(sliderArray[i]);


    left.addEventListener("click", function () {
       
        translateLeft();
    
        // i = i - 1;
        // if (i < 0) {
        //     i = sliderArray.length - 1
        // };
    
    });
    
    right.addEventListener("click", function () {
        
        
        translateRight();
       
        // i = i + 1;
        // if (i >= sliderArray.length) {
        //     i = 0
        // };



    });

}





// function createImage(src){

//     let image_container = document.createElement("div");
//     image_container.setAttribute("class","image-container");

//     let newImage = document.createElement("img");
//         newImage.setAttribute("src",src);

//         image_container.appendChild(newImage);
//         slides.appendChild(image_container);

// };

// createImage(sliderArray[i]);










