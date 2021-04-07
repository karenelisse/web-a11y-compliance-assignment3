      // function readMoreFunctions() {
      //   const moreArticles = document.getElementById("moreArticles");
      //   const readMoreButton = document.getElementById("readMoreButton");

      //   console.log('HERE')

      //   if(moreArticles.style.display === "none"){
      //     moreArticles.style.display = "inline";
      //     moreArticles.classList.add('grid');
      //     readMoreButton.style.display = "none";
      //   }
      // }

      var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("newsCard");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }