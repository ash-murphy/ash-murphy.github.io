
 

    $(document).ready(function(){
      $('.slider').slick({
         centerMode: true,
         variableWidth:true,
         adaptiveHeight:true,
				 autoplay:false,
				 prevArrow: false,
    		 nextArrow: false,
    		 dots:true,
             autoplay:true
      });

      var titles= ["TRAIL OF TERROR", "MALDIVES", "MOTYF ","ONCE UPON A TIME..."];
      var details= ["Editorial Design", "Motion Design", "Visual Identity","Window Display Design"];

      $('.slider').on('afterChange', function() {
	    var dataId = $('.slick-current').attr("data-slick-index");   
	    var project = document.getElementById("desc"); 
		  $('.descTitle').html(titles[dataId]);
   
		  $('.descDetail').html(details[dataId]);
        var DescTitle = document.getElementById('webDescTitle');
        var DescDet = document.getElementById('webDescDetail');

        var titleAnim = new WordShuffler(DescTitle,{
          textColor : '#fff',
          timeOffset : 1,
          fontSize :'25px',
          mixCapital : true,
          mixSpecialCharacters : true
        });


        var detailAnim = new WordShuffler(DescDet,{
          textColor : '#fff',
          timeOffset : 1
        });
       titleAnim.restart();
        detailAnim.restart();
	});
      

      //  $('.slick-slider').on('click', '.slick-slide', function (e) {
      //   e.stopPropagation();
      //   var index = $(this).data("slick-index");
      //   if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      //     $('.slick-slider').slick('slickGoTo', index);
      //   }
      // });

      $('.navButton').click(function(){
      	 $(this).toggleClass('rotated');
      	 $('.navMobile').toggleClass('navMobileVis');
         $('#mobLogo').toggleClass('logoHide');
      })
		  
    });

    function hover(element) {
  		element.setAttribute('src', 'icons/football_hover.png');
  		var myVideo = document.getElementById("video1"); 
  		myVideo.style.visibility = "visible";
  		myVideo.style.transition= "visibility 0s, opacity 0.5s linear";
  		myVideo.style.opacity = 1;
  		myVideo.play(); 
  		
		}

		function unhover(element) {
		  element.setAttribute('src', 'icons/football.png');
		  var myVideo = document.getElementById("video1"); 
		  myVideo.style.opacity = 0;
		  myVideo.style.transition= "visibility 1s, opacity 0.5s linear";
		  myVideo.style.visibility = "hidden";
		  myVideo.pause(); 
		}


		function mobhover(element) {
  		element.setAttribute('src', 'icons/football_hover.png');
  		var myVideo = document.getElementById("video2"); 
  		myVideo.style.visibility = "visible";
  		myVideo.style.transition= "visibility 0s, opacity 0.5s linear";
  		myVideo.style.opacity = 1;
  		myVideo.play(); 
  		
		}

		function mobunhover(element) {
		  element.setAttribute('src', 'icons/football.png');
		  var myVideo = document.getElementById("video2"); 
		  myVideo.style.opacity = 0;
		  myVideo.style.transition= "visibility 1s, opacity 0.5s linear";
		  myVideo.style.visibility = "hidden";
		  myVideo.pause(); 
		}

    var check=1;
    var pagetop, menu, yPos;
      function yScroll(){
      desc = document.getElementById('mobdescTitle');
      details = document.getElementById('mobdescDetail');
      yPos = window.pageYOffset;
      if(yPos < 400){
        desc.innerHTML = "TRAIL OF TERROR";
        details.innerHTML = "Editorial Design";
        var newcheck=1;
        if (newcheck!=check){
          check=1;
          mobwordshuffle();
        }
        

      } else if(yPos < 900) {
        desc.innerHTML = "MALDIVES";
        details.innerHTML = "Motion Design";
        var newcheck=2;
        if (newcheck!=check){
          check=2;
          mobwordshuffle();
        }
      }
      else if(yPos < 1400) {
        desc.innerHTML = "MOTYF";
        details.innerHTML = "Visual Identity ";
        var newcheck=3;
        if (newcheck!=check){
          check=3;
          mobwordshuffle();
        }
      }
      else {
        desc.innerHTML = "ONCE UPON A TIME...";
        details.innerHTML = "Window Display Design";
        var newcheck=4;
        if (newcheck!=check){
          check=4;
          mobwordshuffle();
        }
      }
      
    }


    var x = window.matchMedia("(max-width: 480px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    function myFunction(x) {
    window.addEventListener("scroll", yScroll);
    }



    function mobwordshuffle(){
      var DescTitle = document.getElementById('mobdescTitle');
        var DescDet = document.getElementById('mobdescDetail');

        var titleAnim = new WordShuffler(DescTitle,{
          textColor : '#fff',
          timeOffset : 1,
          fontSize :'25px',
          mixCapital : true,
          mixSpecialCharacters : true
        });


        var detailAnim = new WordShuffler(DescDet,{
          textColor : '#fff',
          timeOffset : 1
        });
       titleAnim.restart();
        detailAnim.restart();
    }

    function WordShuffler(holder,opt){
      var that = this;
      var time = 0;
      this.now;
      this.then = Date.now();
      
      this.delta;
      this.currentTimeOffset = 0;
      
      this.word = null;
      this.currentWord = null;
      this.currentCharacter = 0;
      this.currentWordLength = 0;


      var options = {
        fps : 15,
        timeOffset : 5,
        textColor : '#000',
        fontSize : "50px",
        useCanvas : false,
        mixCapital : false,
        mixSpecialCharacters : false,
        needUpdate : true,
        colors : [
          '#fff'
        ]
      }

      if(typeof opt != "undefined"){
        for(key in opt){
          options[key] = opt[key];
        }
      }


      
      this.needUpdate = true;
      this.fps = options.fps;
      this.interval = 1000/this.fps;
      this.timeOffset = options.timeOffset;
      this.textColor = options.textColor;
      this.fontSize = options.fontSize;
      this.mixCapital = options.mixCapital;
      this.mixSpecialCharacters = options.mixSpecialCharacters;
      this.colors = options.colors;

       this.useCanvas = options.useCanvas;
      
      this.chars = [
        'A','B','C','D',
        'E','F','G','H',
        'I','J','K','L',
        'M','N','O','P',
        'Q','R','S','T',
        'U','V','W','X',
        'Y','Z'
      ];
      this.specialCharacters = [
        '!','§','$','%',
        '&','/','(',')'
      ]

      if(this.mixSpecialCharacters){
        this.chars = this.chars.concat(this.specialCharacters);
      }

      this.getRandomColor = function () {
        var randNum = Math.floor( Math.random() * this.colors.length );
        return this.colors[randNum];
      }

      //if Canvas
     
      this.position = {
        x : 0,
        y : 50
      }

      //if DOM
      if(typeof holder != "undefined"){
        this.holder = holder;
      }

      if(!this.useCanvas && typeof this.holder == "undefined"){
        console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
      }


      this.getRandCharacter = function(characterToReplace){    
        if(characterToReplace == " "){
          return ' ';
        }
        var randNum = Math.floor(Math.random() * this.chars.length);
        var lowChoice =  -.5 + Math.random();
        var picketCharacter = this.chars[randNum];
        var choosen = picketCharacter.toLowerCase();
        if(this.mixCapital){
          choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
        }
        return choosen;
        
      }

      this.writeWord = function(word){
        this.word = word;
        this.currentWord = word.split('');
        this.currentWordLength = this.currentWord.length;

      }

      this.generateSingleCharacter = function (color,character) {
        var span = document.createElement('span');
        span.style.color = color;
        span.innerHTML = character;
        return span;
      }

      this.updateCharacter = function (time) {
        
          this.now = Date.now();
          this.delta = this.now - this.then;

           

          if (this.delta > this.interval) {
            this.currentTimeOffset++;
          
            var word = [];

            if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength){
              this.currentCharacter++;
              this.currentTimeOffset = 0;
            }
            for(var k=0;k<this.currentCharacter;k++){
              word.push(this.currentWord[k]);
            }

            for(var i=0;i<this.currentWordLength - this.currentCharacter;i++){
              word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
            }


            if(that.useCanvas){
              c.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
              c.font = that.fontSize + " sans-serif";
              var spacing = 0;
              word.forEach(function (w,index) {
                if(index > that.currentCharacter){
                  c.fillStyle = that.getRandomColor();
                }else{
                  c.fillStyle = that.textColor;
                }
                c.fillText(w, that.position.x + spacing, that.position.y);
                spacing += c.measureText(w).width;
              });
            }else{

              if(that.currentCharacter === that.currentWordLength){
                that.needUpdate = false;
              }
              this.holder.innerHTML = '';
              word.forEach(function (w,index) {
                var color = null
                if(index > that.currentCharacter){
                  color = that.getRandomColor();
                }else{
                  color = that.textColor;
                }
                that.holder.appendChild(that.generateSingleCharacter(color, w));
              }); 
            }
            this.then = this.now - (this.delta % this.interval);
          }
      }

      this.restart = function () {
        this.currentCharacter = 0;
        this.needUpdate = true;
      }

      function update(time) {
        time++;
        if(that.needUpdate){
          that.updateCharacter(time);
        }
        requestAnimationFrame(update);
      }

      this.writeWord(this.holder.innerHTML);


      update(time);
    }




