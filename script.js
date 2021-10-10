$(document).ready(function(){
    //menu dynamic generation
    $(".app-container").prepend($("<nav></nav>"));
    for (let i = 0; i < index.length; i++) {
    let navChap = $("<a class='navPoint' href='"+index[i].ref+"'>"+index[i].title+"</a>");
    navChap.mouseover(function(){
        $(this).css({backgroundColor: "#eb836a", fontWeight: "bold"})
        $(this).animate({marginLeft: "-25%"}, 200);
    });
    navChap.mouseout(function(){
        $(this).css({backgroundColor: "#d7232a",  fontWeight: "normal"});
        $(this).animate({marginLeft: "5%"}, 200);
    });
    $("nav").append(navChap);
    }
    let menu = $("<input type='image' src='svg/menu.svg' id='menu'/>")
    $(".app-container").prepend(menu);
    menu.click(function(){
        $("nav").toggle(300, "swing", ()=>{
            if ($("nav").css("display") === "block"){
                $("#menu").attr("src", "svg/close_menu.svg")
            } else {
                $("#menu").attr("src", "svg/menu.svg")
            }
        })
    })
    //scrollbar dynamic generation
    let barBox = $("<div class='progress-container'></div>");
    let bar = $("<div class='progress-bar' id='myBar'></div>");
    $("body").prepend(barBox);
    barBox.append(bar);
    
    let title = $("h2").text();
    for (let n=0; n<index.length; n++){
        if (title == index[n].title){
            let prevT = index[n-1].title;
            let prevR = index[n-1].ref;
            if(n==index.length-1){     
                n= -1;
            }
            let nextT = index[n+1].title;
            let nextR = index[n+1].ref;
            let div = $(`
                <p id="browser">
                    <a href="${prevR}"><span>${prevT}&lt;&lt;</span></a>
                    &#8287;&#8287;
                    <a href="${nextR}"><span>&gt;&gt;${nextT}</span></a>
                </p>
            `);
            $(".app-container").append(div);
            break;
        }
    }
    //footer dynamic generation
    let footer = $(`
        <footer>
            <p><b>A cura di</b><br/>
            Anna Ghezzi<br/> Alessandro Lodovini<br/> Benedetta Tonnini<br/> Matteo Scannavini</p>
            <p>
            Un ringraziamento speciale agli intervistati <b>Alessandro Mumolo</b>, <b>Cecilia Fazioli</b>, <b>Natalia Ciccarello</b>,
            a <b>Dataninja</b>, che ci ha permesso di lavorare a questo Project Work, e a <b>Medici Senza Frontiere</b>, per la 
            collaborazione.
            </p>
            <p><b>foto:</b> La Provincia Pavese, Medici Senza Frontiere </p>
            <p><b>contatti:</b> matteo.scanna1999@gmail.com</p>
        </footer>
    `);
    $(".app-container").append(footer);



    $(".intro").mouseover(function(){
        $("img").attr("class", "color");
    })
    $(".intro").mouseout(function(){
        $("img").attr("class", "gray");
    })

    $('#up, .E-Rviz').hide();
    $('circle').css({'fill': 'transparent'});
    $(".L").attr('checked', 'true');
    //show and hide notes
    $('.close').click(function(){$(this).parent().parent().fadeOut()});
    $('.note').click(function(){$(this).parent().next('.modal').fadeIn()});

    //slide viz
    $("input[type=radio]").change(function(){
    if ($(this).attr('checked', 'true')){
        $(this).siblings().css({"font-weight": "normal"});
        $(this).next().css({"font-weight": "bolder"});
        let viz = $(this).parent().next();
        switch(this.className){
        case "L": {
            viz.find('.E-Rviz').fadeOut(300);
            viz.find('.Lviz').fadeIn(300);
        }
        break;
        case "E-R": {
            viz.find('.Lviz').fadeOut(300);
            viz.find('.E-Rviz').fadeIn(300);
        } 
        break;
        }
    }
    })

    $(document).on("scroll", function() {
        let pxScrolled = $(document).scrollTop();
        let docHeight = $(document).height()-$(window).height();
        let scrolled = (pxScrolled / docHeight) * 100;
        $("#myBar").css("width", scrolled + "%");
        
    var homeH = ($("#home").height())+($("nav").height());//se uso questa riga ora devo togliere nav
    var s0 = homeH +($("#section0").height());
    var s1 = s0 +($("#section1").height());
    var s2 = s1 +($("#section2").height());
    if(pxScrolled > homeH){
        onHome = false;
        $('#up').show();
        $('#s0').css({fill: '#d8efef'});
    
        if(pxScrolled <= s0){
        $(".logoBack").css({fill: '#d7232a'});
        $('#s1').css({fill: 'transparent'});
        $('#s0').css({fill: '#eb836a'});
        }
        else if (pxScrolled>s0 && pxScrolled<= s1) {
        $(".logoBack").css({fill: '#d7232a'});
        $('#s1').css({fill: '#eb836a'});
        }
        else if (pxScrolled>s1 && pxScrolled<= s2) {
        $(".logoBack").css({fill: '#d7232a'});
        $('#s1').css({fill: 'transparent'});
        $('#s2').css({fill: '#eb836a'});
        } 
        else if (pxScrolled>s2) {
        $(".logoBack").css({fill: '#d7232a'});
        $('#s1').css({fill: 'transparent'});
        $('#s3').css({fill: '#eb836a'});
        }   
    } else {
        onHome=true;
        $('#up').hide();
        $(".logoBack").css({fill: '#d7232a'});
        $('#s1').css({fill: 'transparent'});
    }; 
    })
})
var index = [
    {title: 'Home', ref: "index.html"},
    {title: 'Curarsi senza documenti', ref: "section1.html"}, 
    {title: 'Tamponi impossibili', ref: "section2.html"}, 
    {title: 'Salute universale ma...', ref: "section3.html"},
    {title: 'E adesso? La questione vaccini', ref: "section4.html"}, 
    {title: 'Il popolo degli Stp', ref: "section5.html"}
];
var onHome = true;/*
window.onscroll = function() {scrollProgress()};

function scrollProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}*/
    