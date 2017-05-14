



var imgArr = ["images/my_brand1.jpg",
              "images/my_brand2.jpg",
              "images/my_brand3.jpg",
              "images/my_brand4.jpg",
              "images/my_brand5.jpg",
              "images/my_brand6.jpg",
              "images/my_brand7.jpg"];

var change;
var imgCha; 
var counter = 0; 

    function changeBrand() {
      imgCha = setInterval(changePic, 2000);
    }
 

 
    function changePic() {
      if (counter === imgArr.length) {
        counter = 0;
      }
      $('.brand').attr('src', imgArr[counter]);         counter++;
    }


changeBrand();