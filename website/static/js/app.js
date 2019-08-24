/* JQUERY VARIABLES */
var windowHeight;
var contentBox;
var myForm;
var topScroll;
var scrollOffset;
var landscape;
var scAnimDone;
var scTransDone;

/* PAGE VARIABLES */
var page;
var windowRunning;
var navMenuOut;
var slideAnim;

/* ME SLIDE ANIMATIONS */
var seenTime;
var seenTimer;
var seen;
var firstSee;

var text;
var click;

/* Carousel Var */
var slideIndex;

/* RAIN ANIMATIONS */
var rainTimer;

$(document).ready(function(){
    $('#website').animate({
        scrollTop: 0
    }, 10);

    windowHeight = $(window).height();
    contentBox = $("#content");
    myForm = $("#myForm");
    topScroll = true;

    scAnimDone = false;
    scTransDone = true;

    if (window.innerHeight > window.innerWidth) {
        /* PORTRAIT */
        $("#mainSpacer").css({"height" : "106%"});
        landscape = false;
    } else {
        /* LANDSCAPE */
        $("#mainSpacer").css({"height" : "110%"});
        landscape = true;
    }

    // Set Initial Content -------------------------------------------------
    page = 1;
    windowRunning = 0;
    navMenuOut = null;
    slideAnim = false;

    // Set Initial meSlide variables ----------------------------------------
    seenTime = 0;
    seen = false;
    firstSee = 0;

    text = false;
    click = false;

    slideIndex = 1;

    // Setting English or Spanish words
    dataInit();
    // Setting Quote
    // Setting words inside Nav
    // Setting words inside Form
    setAll();

    if(scrollError == true){
        changing(3);
    }
    else if(scrollError == false){
        // Setting the home page
        setHome();
        // Initializing the animations
        animInit(1);
    }

    /* RAIN ANIMATIONS */
    rainTimer = setInterval(timer, 500);

    // Landing Page Scroll Animations ---------------------------------------------------
    $('#website').scroll(function(){
        var dFromTop = -1 * ($('#mainSpacer').offset().top);
        var divSize = $('#website').height();
        var percentLeft = 100 * ((divSize - dFromTop)/divSize);

        if(percentLeft <= 0){
            percentLeft = 0;
        }else if(percentLeft >= 100){
            percentLeft = 100;
        }else{
            scAnimDone = false;
            $('.links').css({"pointer-events" : "none"});
            $('#menuIcon').css({"pointer-events" : "none"});
        }

        if(!scAnimDone){
            if (!landscape) {
                /* PORTRAIT */
                transitionFunc(100, 6, "#mainPage", "height", "%", percentLeft, false);
                transitionFunc(7, 4, ".name", "font-size", "rem", percentLeft, false);
                transitionFunc(-10, 3, "#menuIcon", "right", "%", percentLeft, false);
            } else {
                /* LANDSCAPE */
                transitionFunc(100, 10, "#mainPage", "height", "%", percentLeft, false);
                transitionFunc(7, 3.5, ".name", "font-size", "rem", percentLeft, false);
                transitionFunc(-50, 1, "#nav", "right", "%", percentLeft, false);
            }

            transitionFunc(6, 0, "#lang", "height", "vh", percentLeft, false);
            transitionFunc(1, -5, "#lang", "top", "rem", percentLeft, false);
            //transitionFunc(1, -1, "#words", "opacity", "", percentLeft, false);
            transitionFunc(10, -10, "#navLinks", "height", "%", percentLeft, false);

            var xTran = transitionFunc(50, 0, "#fullName", "left", "%", percentLeft, true);
            var yTran = transitionFunc(30, 50, "#fullName", "top", "%", percentLeft, true);
            var nameTransform = "translate(-" + xTran + "%, -" + yTran + "%)";
            $('#fullName').css({"transform" : nameTransform});
        }

        if(percentLeft == 0){
            scAnimDone = true;
            $('.links').css({"pointer-events" : "auto"});
            $('#menuIcon').css({"pointer-events" : "auto"});
        }

        if(percentLeft >= 99 && !scTransDone){
            scTransDone = true;
            TweenLite.to(".navBtns", 2, {opacity: 1, ease:Linear.easeNone});

            // fullName animations
            $('#fullName').css({"background-color" : "#E7E5E4"});
            $('#fullName').css({"border" : ".5rem solid black"});
            $('#fullName').css({"border-radius" : "2rem"});
            $('#fullName').css({"flex-direction" : "column"});

            // Name animations
            $('.name').css({"-webkit-animation" : "bigShadow 5s forwards"});

            // Words animations
            $('#words').css({"-webkit-animation" : "fadeIn 3s forwards"});

            // Check if div exists, if not create one
            if($('#scrollBox').length == 0){
                $('#mainPage').append("<div id=scrollBox></div>");
                rainBox = $('#scrollBox');
                rainTimer = setInterval(timer, 500);
            }
        }
        else if(percentLeft < 99 && scTransDone){
            scTransDone = false;
            TweenLite.to(".navBtns", .5, {opacity: 0, ease:Linear.easeNone});
            TweenLite.to("#words", 1, {opacity: 0, ease:Linear.easeNone});

            // fullName animations
            $('#fullName').css({"background-color" : "#f2f2f2"});
            $('#fullName').css({"border" : "none"});
            $('#fullName').css({"flex-direction" : "row"});

            // Name animations
            $('.name').css({"-webkit-animation" : "none"});
            $('.name').css({"text-shadow" : "none"});

            // Words animations
            $('#words').css({"-webkit-animation" : "none"});

            // Remove div to improve processing
            $('#scrollBox').remove();
            clearInterval(rainTimer);
            rainBox = null;
        }
    });

});

function transitionFunc(max, min, item, attr, scale, percent, special){
    if(min <= 0){
        var diff = Math.abs(max - min);
    }
    else{
        var diff = max - min;
    }

    var multiplier = diff/100;

    var current = Math.round(((percent*multiplier) + min) * 100)/100;

    var wrap = current + scale;
    $(item).css(attr, wrap);

    if(special){
        return current;
    }
}

//Reload Functions -----------------------------------------------------
window.onorientationchange = function() {
    var orientation = window.orientation;
    switch(orientation) {
        case 0:
        case 90:
        case -90:
            $(this).scrollTop(0);
            window.location.reload();
            break;
    }
};

$(window).resize(function() {

});

// SET Funcitons -----------------------------------------------------
function setHome(){
    myForm.css({"height" : "0%"});

    contentBox.html('<div class="myBlock" id="evHasIdea">\
                <div id="ehiHeader">' + hFinal["ehiHeader"] + '</div>\
                <div id="ehiInfo">\
                <div class="ehiInfoBlock" id="ehiInfoBlockOne">\
                <img class="ehiPic" id="ehiPic1" src="/static/images/business.png" alt="business">\
                <div class="ehiContent" id="ehiContent1">' + hFinal["ehiContent1"] + '</div>\
                </div>\
                <div class="ehiInfoBlock" id="ehiInfoBlockTwo">\
                <img class="ehiPic" id="ehiPic2" src="/static/images/app.png" alt="game">\
                <div class="ehiContent" id="ehiContent2">' + hFinal["ehiContent2"] + '</div>\
                </div>\
                <div class="ehiInfoBlock" id="ehiInfoBlockThree">\
                <img class="ehiPic" id="ehiPic3" src="/static/images/game.png" alt="app">\
                <div class="ehiContent" id="ehiContent3">' + hFinal["ehiContent3"] + '</div>\
                </div>\
                <div class="ehiInfoBlock" id="ehiInfoBlockFour">\
                <img class="ehiPic" id="ehiPic4" src="/static/images/self.png" alt="self">\
                <div class="ehiContent" id="ehiContent4">' + hFinal["ehiContent4"] + '</div>\
                </div>\
                </div>\
                <div id="ehiFooterContain"><span id="ehiFooter">' + hFinal["ehiFooter"] + '</span></div>\
                </div>\
                <div class="myBlock" id="me">\
                <div id="meHeader">' + hFinal["meHeader"] + '</div>\
                <div class="mySlide" id="meSlide" onclick="slideClick(this);">\
                <div class="slidePic"><img id="mePic" src="/static/images/myself3.png" alt="Picture of me"></div>\
                <div class="slideText" id="meText">' + hFinal["meContent"] + '</div>\
                <div class="slideClick"><div class="clickBack"></div><img class="clickImg" src="/static/images/click.png" alt="clickIcon"></div>\
                </div>\
                </div>\
                <div class="myBlock" id="contactMeBox">\
                <div id="contactMeInfo">' + hFinal["contactMeInfo"] + '</div>\
                <button onclick="changing(3);" id="contactMeBtn">' + hFinal["contactMe"] + '</button>\
                </div>');
};

function setAboutMe(){
    myForm.css({"height" : "0%"});

    contentBox.html('<div id="aboutIntro">\
                <div id="aboutPic"><img id="aboutmePic" src="/static/images/myself3.png" alt="Picture of me"></div>\
                <div id="aboutInfo">\
                <div class="aboutInfoClass" id="aboutName">' + aFinal["aboutName"] + '</div>\
                <div class="aboutInfoClass" id="aboutOccupation">' + aFinal["aboutOccupation"] + '</div>\
                <div class="aboutInfoClass" id="aboutSpeak">' + aFinal["aboutSpeak"] + '</div>\
                <div class="aboutInfoClass" id="aboutAge">' + aFinal["aboutAge"] + '</div>\
                <div class="aboutInfoClass" id="aboutFrom">' + aFinal["aboutFrom"] + '</div>\
                <div class="aboutInfoClass" id="aboutEmail">' + aFinal["aboutEmail"] + '</div>\
                <div class="aboutInfoClass" id="aboutPower">' + aFinal["aboutPower"] + '</div>\
                </div>\
                </div>\
                \
                <div class="aboutContentHeader" id="descHead">' + aFinal["aboutContentH"] + '</div>\
                <div id="aboutContent">' + aFinal["aboutContent"] + '</div>\
                \
                <div class="aboutContentHeader" id="attrHead">' + aFinal["aboutGraphsH"] + '</div>\
                <div class="myBlock" id="aboutGraphs">\
                <div id="aboutLang">' + aFinal["aboutLang"] + '</div>\
                <div class="chartContain" id="aboutLangContain"><canvas id="aboutLangGraph"></canvas></div>\
                \
                <div id="aboutSW">' + aFinal["aboutSW"] + '</div>\
                <div class="chartContain" id="aboutSWContain"><canvas id="aboutSWGraph"></canvas></div>\
                \
                <div id="aboutExp">' + aFinal["aboutExp"] + '</div>\
                <div class="chartContain" id="aboutExpContain"><canvas id="aboutExpGraph"></canvas></div>\
                </div>\
                \
                <div class="aboutContentHeader" id="accompHead">' + aFinal["aboutAccomplishH"] + '</div>\
                <div id="accomplish">\
                \
                <div class="myCarousel">\
                <div class="mySlide aSlide fade" id="aSlide" onclick="slideClick(this);">\
                <div class="slidePic"><img id="mePic" src="/static/images/diploma.png" alt="diploma"></div>\
                <div class="slideText" id="dipText">' + eFinal["dipContent"] + '</div>\
                <div class="slideClick"><div class="clickBack"></div><img class="clickImg" src="/static/images/click.png" alt="clickIcon"></div>\
                </div>\
                \
                <div class="mySlide aSlide fade" id="nanoSlide" onclick="slideClick(this);">\
                <div class="slidePic"><img id="mePic" src="/static/images/nano.png" alt="nanoDegree"></div>\
                <div class="slideText" id="nanoText">' + eFinal["nanoContent"] + '</div>\
                <div class="slideClick"><div class="clickBack"></div><img class="clickImg" src="/static/images/click.png" alt="clickIcon"></div>\
                </div>\
                \
                <div class="mySlide aSlide fade" id="aplusSlide" onclick="slideClick(this);">\
                <div class="slidePic"><img id="mePic" src="/static/images/aplus.png" alt="aplus cert"></div>\
                <div class="slideText" id="aplusText">' + eFinal["aplusContent"] + '</div>\
                <div class="slideClick"><div class="clickBack"></div><img class="clickImg" src="/static/images/click.png" alt="clickIcon"></div>\
                </div>\
                \
                <div class="mySlide aSlide fade" id="capSlide" onclick="slideClick(this);">\
                <div class="slidePic"><img id="mePic" src="/static/images/cap.png" alt="Capital One Icon"></div>\
                <div class="slideText" id="capText">' + eFinal["capContent"] + '</div>\
                <div class="slideClick"><div class="clickBack"></div><img class="clickImg" src="/static/images/click.png" alt="clickIcon"></div>\
                </div>\
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>\
                <a class="next" onclick="plusSlides(1)">&#10095;</a>\
                </div>\
                <div style="text-align:center;margin-top:5%;">\
                <span class="dot" onclick="currentSlide(1)"></span>\
                <span class="dot" onclick="currentSlide(2)"></span>\
                <span class="dot" onclick="currentSlide(3)"></span>\
                <span class="dot" onclick="currentSlide(4)"></span></div>\
                </div>\
                <div class="aboutContentHeader" id="resumeHead">' + aFinal["aboutResumeH"] + '</div>\
                <div id="resume">\
                <div id="resumeContent">' + aFinal["resumeContent"] + '</div>\
                <a id="resumeButton" href="/static/files/Web_Resume.pdf">' + aFinal["resumeButton"] + '</a>\
                </div>');

    showSlides(slideIndex);
};

function setContact(){
    contentBox.html('');
    contentBox.css({"height" : "0%"});
};

// Changing Content --------------------------------------------------
function changing(newPage){
    // Check if "windowBlind" animation can run again
    if(windowRunning == 1){
        return;
    }

    // Set variable showing that animation is running
    windowRunning = 1;

    // This is for mobile only and move the menu out
    if(navMenuOut == 1){
        burgerNav(navMenuOut);
    }

    windowBlind(newPage);
};

// windowBlind Animation --------------------------------------------------
function windowBlind(newPage){
    // Scroll up, and reset the content based on where the window is
    if($('#website').scrollTop() != 0){
        $('#website').animate({
            scrollTop: 0
        }, 1000);

        setTimeout(function() {
            setContent(newPage);
        }, 750);

        // Reset the animation after 2 seconds
        // if the animation is running all the way
        setTimeout(function() {
            windowRunning = 0;
        }, 1500);
    }
    else{
        setContent(newPage);

        // Reset the animation after 1 second
        // if the animation is running half way
        setTimeout(function() {
            windowRunning = 0;
        }, 750);
    }

    $('#website').animate({
        scrollTop: windowHeight
    }, 750);
};

// burgerNav Animation --------------------------------------------------
function burgerNav(){
    if(navMenuOut == null){
        navMenuOut = 0;
    }

    if(navMenuOut == 0){
        setBurgerColor();
        navMenuOut = 1;
        navMenu(1);
    }
    else{
        navMenuOut = 0;
        navMenu(0);
    }
};

function setBurgerColor(){
    var burgColors = ['rgba(238, 36, 249, 0.9)', 'rgba(112, 143, 245, 0.9)', 'rgba(58, 230, 238, 0.9)', 'rgba(64, 237, 170, 0.9)', 'rgba(70, 247, 34, 0.9)'];

    var myColor = Math.floor(Math.random() * 5);
    var myBack = burgColors[myColor];

    $("#burgerNav").css({"background-color" : myBack});
};

// Setting Content --------------------------------------------------
function setContent(num){
    contentBox.empty();

    switch(num){
    case 1:
        setHome();
        break;
    case 2:
        setAboutMe();
        break;
    case 3:
        setContact();
        break;
    default:
        console.log("Error- Setting Content");
  }

    page = num;
    animInit(num);
};

// Changing Language --------------------------------------------------
function changeLang(){
    var langTemp;
    if(localStorage.getItem('myLang') == "0"){
        localStorage.setItem('myLang', "1");
        langTemp = 1;
    }
    else{
        localStorage.setItem('myLang', "0");
        langTemp = 0;
    }
    contentBox.empty();

    setWords(langTemp);
    setAll();

    switch(page){
        case 1:
            setHome();
            break;
        case 2:
            setAboutMe();
            break;
        case 3:
            setContact();
            break;
        default:
            console.log("Error- Setting Content");
    }

    animInit(page);
};

// Setting Words --------------------------------------------------
function setAll(){
    setNav();
    setQuote();
    setForm();
}

// Setting Navigation --------------------------------------------------
function setNav(){
    $('#lang').html(headerFinal["lang"]);

    // Regular navs
    $('#home').html(headerFinal["home"]);
    $('#pro').html(headerFinal["pro"]);
    $('#exp').html(headerFinal["exp"]);
    $('#contact').html(headerFinal["contact"]);

    // Burger navs
    $('#bhome').html(headerFinal["home"]);
    $('#bpro').html(headerFinal["pro"]);
    $('#bexp').html(headerFinal["exp"]);
    $('#bcontact').html(headerFinal["contact"]);
};

// Setting Quote --------------------------------------------------
function setQuote(){
    $('#words').html(headerFinal["words"]);
};

// Setting Form --------------------------------------------------
function setForm(){
    $('#mfContent').html(fFinal["mfContent"]);
    $('#tName').html(fFinal["tName"]);
    $('#tTele').html(fFinal["tTele"]);
    $('#tEmail').html(fFinal["tEmail"]);
    $('#tDesc').html(fFinal["tDesc"]);
};

// My Carousel Function --------------------------------------------------
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("aSlide");
    var dots = document.getElementsByClassName("dot");

    // Setting slide index
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    // Changing Slide or dot
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// My Slide Function --------------------------------------------------
function slideClick(slideID){
    var slidePic = $(slideID).find(".slidePic");
    var slideText = $(slideID).find(".slideText");

    if(text){
        text = false;
        var showPic = TweenLite.to(slidePic, 1, {css: "filter: grayscale(0) blur(0);", ease:Linear.easeNone});
        var showText = TweenLite.to(slideText, 1, {opacity: 0, ease:Linear.easeNone});
    }
    else{
        text = true;
        var showPic = TweenLite.to(slidePic, 1, {css: "filter: grayscale(100%) blur(.5rem);", ease:Linear.easeNone});
        var showText = TweenLite.to(slideText, 1, {opacity: 1, ease:Linear.easeNone});
    }

    if(click == false){
        TweenLite.to($(slideID).children(".slideClick"), .5, {opacity: 0, ease:Linear.easeNone});
    }
};
