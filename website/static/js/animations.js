/* BASIC VARS */
var windowHeight;

/* SCROLL MAGIC */
var magicCtrl = new ScrollMagic.Controller();
var tl = new TimelineLite();

/* RAIN ANIMATION */
var rainBox;
var raining;

$(document).ready(function(){
    // Setting initials variables
    windowHeight = $(window).height();

    raining = true;
    rainBox = $('#scrollBox');
});


function animInit(newPage){
    // Reset Controller 
    magicCtrl.destroy(true);
    magicCtrl = null;
    magicCtrl = new ScrollMagic.Controller();

    //setting the height of the div thats about to be used
    if(window.innerHeight > window.innerWidth){
        if(newPage == 3){
            $("#myForm").css({"height" : "94%"});
        }
        else{
            $("#content").css({"height" : "94%"});
        }
    }
    else{
        if(newPage == 3){
            $("#myForm").css({"height" : "90%"});
        }
        else{
            $("#content").css({"height" : "90%"});
        }
    }

    setPageAnim(newPage);
};

function setPageAnim(newPage){
    switch(newPage){
        case 1:
            // EHI Header Animation
            var ehiHeader = TweenLite.from("#ehiHeader", 1, {y: -25, opacity: 0, ease:Linear.easeNone});

            var homeHeader = new ScrollMagic.Scene({
              triggerElement: "#content", 
              triggerHook: .9
            })
            .setTween(ehiHeader)
            .addTo(magicCtrl);

            // EHI Content Animation
            $(".ehiInfoBlock").each(function(i){
                var tlContent = new TimelineLite();

                var contentString = "#ehiContent" + (i+1);
                var picString =  "#ehiPic" + (i+1);

                var ehiCon = TweenLite.from(contentString, 1, {css: "background-size: 0% .5rem; opacity: 0;", ease:Linear.easeNone});
                var ehiPic = TweenLite.from(picString, 1, {y: -25, opacity: 0, ease:Linear.easeNone});

                tlContent.add(ehiCon);
                tlContent.add(ehiPic, 0);

                var homeContent = new ScrollMagic.Scene({
                  triggerElement: this, 
                  triggerHook: .75
                })
                .setTween(tlContent)
                .addTo(magicCtrl);
            });

            // EHI Footer Animation
            var tlFooter = new TimelineLite();
            var footerIn = TweenLite.from("#ehiFooterContain", .5, {x: -1000, ease:Linear.easeNone});
            var footerShow = TweenLite.to("#ehiFooter", 1, {css: "opacity: 1;", ease:Linear.easeNone});
            var footerUnderline = TweenLite.to("#ehiFooter", 1, {css: "background-size: 100% 1rem;", ease:Linear.easeNone});

            tlFooter.add(footerIn);
            tlFooter.add(footerShow, "-=.1");
            tlFooter.add(footerUnderline, "-=.1");

            var ehiFootScene = new ScrollMagic.Scene({
              triggerElement: "#ehiFooter", 
              triggerHook: .5
            })
            .setTween(tlFooter)
            .addTo(magicCtrl);

            // ME Header Animation
            $(".revealContain").each(function(){
                var tlMeHeader = new TimelineLite();

                var revealDiv = $(this).find(".revealDiv");
                var meHeaderBlock = $(this).find(".meHeaderBlock");

                var meDivGrow = TweenLite.to(revealDiv, .1, {css: "width: 100%;", ease:Linear.easeNone});
                var meWordsR = TweenLite.from(meHeaderBlock, 1, {height: 0, ease:Linear.easeNone});
                var meDivR = TweenLite.to(revealDiv, 1, {bottom: 0, top: "auto", ease:Linear.easeNone});
                var meDivShrink = TweenLite.to(revealDiv, 1, {css: "width: 0%;", ease:Linear.easeNone});

                tlMeHeader.add(meDivGrow);
                tlMeHeader.add(meWordsR, "reveal");
                tlMeHeader.add(meDivR, "reveal");
                tlMeHeader.add(meDivShrink);

                var homeHeader = new ScrollMagic.Scene({
                  triggerElement: "#meHeader", 
                  triggerHook: .75
                })
                .setTween(tlMeHeader)
                .addTo(magicCtrl);
            });

            // ME Content Animations
            var meContentIn = TweenLite.to("#meSlide", 1, {opacity: 1, ease:Linear.easeNone});
            

            var meContentScene = new ScrollMagic.Scene({
              triggerElement: "#meSlide", 
              triggerHook: .7
            })
            .setTween(meContentIn)
            .addTo(magicCtrl);

            // ME Footer Animations
            var meFooterIn = TweenLite.from("#contactMeBox", 1, {opacity: 0, ease:Linear.easeNone});
            
            var meFooterScene = new ScrollMagic.Scene({
              triggerElement: "#contactMeBox", 
              triggerHook: .9
            })
            .setTween(meFooterIn)
            .addTo(magicCtrl);
            break;
        case 2: 
            // About Header Animation
            var aboutHeaderTL = new TimelineLite();
            var abtHeader = TweenLite.from("#aboutPic", 1, {x: -500, opacity: 0, ease:Linear.easeNone});
            aboutHeaderTL.add(abtHeader, 0);

            $(".aboutInfoClass").each(function(index){
                var aboutInfo = TweenLite.from(this, .5, {y: -25, opacity: 0, ease:Linear.easeNone});

                if(index != 0){
                    aboutHeaderTL.add(aboutInfo, "-=.2");
                }
                else{
                    aboutHeaderTL.add(aboutInfo, 0);
                }
            });


            var aboutHeaderSC = new ScrollMagic.Scene({
              triggerElement: "#content", 
              triggerHook: .3
            })
            .setTween(aboutHeaderTL)
            .addTo(magicCtrl);

            // About Description Animation
            var aboutDescTL = new TimelineLite();
            var aboutContentHeader = TweenLite.from("#descHead", 1, {y:-100, opacity: 0, ease:Linear.easeNone});
            var abtHeader = TweenLite.from("#aboutContent", 1, {opacity: 0, x: -100, ease:Linear.easeNone});

            aboutDescTL.add(aboutContentHeader);
            aboutDescTL.add(abtHeader, 0);

            var aboutDescSC = new ScrollMagic.Scene({
              triggerElement: "#aboutContent", 
              triggerHook: .7
            })
            .setTween(aboutDescTL)
            .addTo(magicCtrl);

            // About Attributes Animation
            var aboutDescTL = new TimelineLite();

            var aboutGraphHeader = TweenLite.from("#attrHead", 1, {y:-100, opacity: 0, ease:Linear.easeNone});
            var aboutGraphBlocl = TweenLite.from("#aboutGraphs", 1, {opacity: 0, x: -100, ease:Linear.easeNone});

            aboutDescTL.add(aboutGraphHeader);
            aboutDescTL.add(aboutGraphBlocl, 0);

            var aboutDescSC = new ScrollMagic.Scene({
              triggerElement: "#aboutGraphs", 
              triggerHook: .7
            })
            .setTween(aboutDescTL)
            .addTo(magicCtrl);

            /* Chart One - LANG */
            new ScrollMagic.Scene({ 
                triggerElement: "#aboutLangContain",
                triggerHook: .7
            })
            .on('start', function () {
                langChart();
            })
            .addTo(magicCtrl);
            /* Chart One - SW */
            new ScrollMagic.Scene({ 
                triggerElement: "#aboutSWContain",
                triggerHook: .7
            })
            .on('start', function () {
                SWChart();
            })
            .addTo(magicCtrl);
            /* Chart One - EXP */
            new ScrollMagic.Scene({ 
                triggerElement: "#aboutExpContain",
                triggerHook: .7
            })
            .on('start', function () {
                expChart();
            })
            .addTo(magicCtrl);

            // About Attributes Animation
            var aboutVictTL = new TimelineLite();

            var aboutVictHeader = TweenLite.from("#accompHead", 1, {y:-100, opacity: 0, ease:Linear.easeNone});
            var aboutVictBlock = TweenLite.from("#accomplish", 1, {opacity: 0, x: -100, ease:Linear.easeNone});

            aboutVictTL.add(aboutVictHeader);
            aboutVictTL.add(aboutVictBlock, 0);

            var aboutDescSC = new ScrollMagic.Scene({
              triggerElement: "#accomplish", 
              triggerHook: .7
            })
            .setTween(aboutVictTL)
            .addTo(magicCtrl);

            // About Attributes Animation
            var aboutResumeTL = new TimelineLite();

            var aboutResHeader = TweenLite.from("#resumeHead", 1, {y:-100, opacity: 0, ease:Linear.easeNone});
            var aboutResBlock = TweenLite.from("#resume", 1, {opacity: 0, x: -100, ease:Linear.easeNone});
            var aboutResBtn = TweenLite.from("#resumeButton", 1, {opacity: 0, y: 100, ease:Linear.easeNone});

            aboutResumeTL.add(aboutResHeader);
            aboutResumeTL.add(aboutResBlock, 0);
            aboutResumeTL.add(aboutResBtn);

            var aboutDescSC = new ScrollMagic.Scene({
              triggerElement: "#resume", 
              triggerHook: .7
            })
            .setTween(aboutResumeTL)
            .addTo(magicCtrl);
            
            break;
        case 3:
            TweenLite.set("#mfContent", {clearProps:"all"});
            TweenLite.set("#mfForm", {clearProps:"all"});
            TweenLite.set("#mySocials", {clearProps:"all"});

            // Contact Content Animations
            var contentIn = TweenLite.from("#mfContent", 1, {opacity: 0, y: -100, ease:Linear.easeNone});
            
            var cContentScene = new ScrollMagic.Scene({
              triggerElement: "#mfContent", 
              triggerHook: .4
            })
            .setTween(contentIn)
            .addTo(magicCtrl);
        
            // Contact Content Animations
            var formIn = TweenLite.from("#mfForm", 1, {opacity: 0, x: -100, ease:Linear.easeNone});
            
            var cContentScene = new ScrollMagic.Scene({
              triggerElement: "#mfForm", 
              triggerHook: .4,
              reverse:false
            })
            .setTween(formIn)
            .addTo(magicCtrl);
        
            // Contact Social Animations
            var socialIn = TweenLite.from("#mySocials", 1, {opacity: 0, x: 100, ease:Linear.easeNone});
            
            var cFooterScene = new ScrollMagic.Scene({
              triggerElement: "#mySocials", 
              triggerHook: .4,
              reverse:false
            })
            .setTween(socialIn)
            .addTo(magicCtrl);
        
            
            break;
        default: 
            console.log("Error- Setting Animation");
    }
}

function timer(){
    var colors = ['rgba(238, 36, 249, 1)', 'rgba(112, 143, 245, 1)', 'rgba(58, 230, 238, 1)', 'rgba(64, 237, 170, 1)', 'rgba(70, 247, 34, 1)'];
    var trans = ['rgba(238, 36, 249, 0)', 'rgba(112, 143, 245, 0)', 'rgba(58, 230, 238, 0)', 'rgba(64, 237, 170, 0)', 'rgba(70, 247, 34, 0)'];
    var height;
    var x;
    var y;
    var rainDrops = Math.floor(Math.random() * 1) + 1;

    for (var i = 0; i <= rainDrops; i++) {
        var dropColor = Math.floor(Math.random() * 5);

        height = Math.floor(Math.random() * 71) + 5;
        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 100) + 1;

        var divNum = Math.floor(Math.random() * 10000) + 1;
        var divID = 'code' + divNum;
        var newDiv = '<div class="scroll ' + divID + '" style="postion: absolute;top:' + y + '%; left:' + x + '%;height:' + height + '%;background: linear-gradient(' + trans[dropColor] + ', ' + trans[dropColor] + ', ' + colors[dropColor] + ');"></div>';

        rainBox.append(newDiv);
        deleteRaindrop(divID);
    }
};

function deleteRaindrop(divID){
    setTimeout(function(){
        $('.' + divID).remove();
    }, 2000);
};

function navMenu(num){
  if(num == 1){
    var menuOut = TweenLite.to("#burgerNav", .5, {opacity: 1, left: 0, ease:Linear.easeNone});
  }
  else{
    var menuOut = TweenLite.to("#burgerNav", .5, {opacity: 0, left: "-40%", ease:Linear.easeNone});
  }
};

function langChart(){
    var aboutLang = $("#aboutLangGraph")[0].getContext('2d');

    var langChart = new Chart(aboutLang,{
        type: 'radar',
        responsive:true,
        maintainAspectRatio: false,
        data: {
            labels: ["Python", "Java", "jQuery", "Javascript", "C#", "mySQL", "HTML", "CSS"],
            datasets: [{
                backgroundColor: 'rgba(58, 236, 164, .2)', 
                data: [90, 90, 80, 85, 75, 80, 100, 90],
                borderColor: 'rgba(58, 236, 164, 1)',
                borderWidth: 5,
                lineTension: -.1,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 255, 255, 1)'
            }]
        },
        options: {
            animation: {
                easing: 'easeInOutBounce',
                duration: 2000
            },
            legend: {
                display: false
            },
            scale: {
                ticks: {
                    backdropColor: "rgba(0, 0, 0, 0)",
                    beginAtZero:true,
                    max: 100,
                },
                pointLabels: {
                    fontColor: "#3aa3ff",
                    fontSize: 15
                }
            }
        }
    });
}

function SWChart(){
    var aboutSW = $("#aboutSWGraph")[0].getContext('2d');

    var swChart = new Chart(aboutSW,{
        type: 'doughnut',
        data: {
            labels: ["Web Development", "App Develeopment", "Game Development", "Program Development"],
            datasets: [{
                backgroundColor: ['rgba(170, 42, 245, .2)',
                                  'rgba(64, 159, 239, .2)',
                                  'rgba(58, 236, 164, .2)',
                                  'rgba(64, 251, 54, .2)'], 
                borderColor: ['rgba(170, 42, 245, 1)',
                              'rgba(64, 159, 239, 1)',
                              'rgba(58, 236, 164, 1)',
                              'rgba(64, 251, 54, 1)'],
                data: [40, 20, 30, 10]
            }]
        },
        options: {
            animation: {
                easing: 'easeOutQuart',
                duration: 2000
            },
            legend: {
                labels: {
                    fontColor: "black",
                    fontSize: 10
                }
            }
        }
    });

};

function expChart(){
    var aboutExp = $("#aboutExpGraph")[0].getContext('2d');

    var expChart = new Chart(aboutExp,{
        type: 'horizontalBar',
        data: {
            labels: ["xCode", "Autodesk Maya", "Unity", "Andriod Studio", "Github"],
            datasets: [{
                backgroundColor: ['rgba(238, 36, 249, .2)',
                                  'rgba(112, 143, 245, .2)',
                                  'rgba(58, 230, 238, .2)',
                                  'rgba(64, 237, 170, .2)',
                                  'rgba(70, 247, 34, .2)'], 
                borderColor: ['rgba(238, 36, 249, 1)',
                              'rgba(112, 143, 245, 1)',
                              'rgba(58, 230, 238, 1)',
                              'rgba(64, 237, 170, 1)',
                              'rgba(70, 247, 34, 1)'],
                borderWidth: 3,
                data: [80, 60, 90, 70, 80]
            }]
        },
        options: {
            animation: {
                easing: 'easeOutQuart',
                duration: 2000
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: 100,
                        fontColor: "black",
                        fontSize: 15
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "black",
                        fontSize: 15
                    }
                }]
            }
        }
    });
};
