

 window.scroll(0,0);
  function getmedia(e){

  
 
  if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: e.title,
    artist: 'BibaTok',
    album: '',
    artwork: [
      { src: e.poster, sizes: '128x128',  type: 'image/png' },
      { src: e.poster, sizes: '128x128', type: 'image/png' },
      { src: e.poster, sizes: '192x192', type: 'image/png' },
      { src: e.poster, sizes: '256x256', type: 'image/png' },
      { src: e.poster, sizes: '384x384', type: 'image/png' },
      { src: e.poster, sizes: '512x512', type: 'image/png' },
    ]
  });
}
}
window.scroll(0,0);
function morevideos(){
  window.scroll(0,0);
  setTimeout(()=>{
    window.scroll(0,0);
    window.location.reload();
  },1000);
  
}
/*
  const mediaQuery = window.matchMedia('(max-width: 400px)')
 
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
 scrollbar();
  }
  
}
 
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

var prevScrollpos = window.pageYOffset;

function scrollbar(){
 
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } 
  else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
 
    
   window.scroll(0,0);
   setTimeout(()=>{
     window.scroll(0,0);
    location.reload();
   },1500);
    
  }
  else {
    document.getElementById("header").style.top = "-100px";
  }
  
  prevScrollpos = currentScrollPos;
}
}

*/
  var svg_likes='<svg id="svg_like" version="1.0" xmlns="http://www.w3.org/2000/svg"width="53px" height="53px" viewBox="0 0 1280.000000 1280.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"fill="#FE2C55" stroke="none"><path d="M4080 10685 c-191 -18 -320 -39 -435 -70 -33 -9 -76 -21 -95 -25 -51 -12 -116 -34 -205 -70 -11 -4 -36 -14 -55 -21 -83 -30 -298 -144 -407 -215 -230 -150 -434 -332 -609 -544 -80 -96 -216 -297 -267 -392 -19 -34 -45 -83 -59 -108 -14 -25 -38 -74 -53 -110 -15 -36 -34 -81 -42 -100 -42 -98 -45 -107 -88 -245 -45 -147 -50 -164 -65 -240 -6 -33 -15 -76 -20 -95 -30 -123 -63 -450 -63 -625 0 -112 15 -317 33 -435 5 -36 12 -85 15 -110 3 -25 10 -62 15 -82 6 -21 14 -55 19 -75 43 -170 57 -217 87 -307 19 -55 39 -109 44 -118 6 -10 10 -22 10 -28 0 -5 16 -45 36 -87 75 -161 94 -204 94 -207 0 -3 23 -44 51 -93 28 -48 61 -106 74 -128 12 -22 31 -56 42 -75 25 -44 217 -325 246 -360 12 -15 33 -42 47 -60 14 -19 37 -48 51 -64 14 -17 32 -40 40 -52 16 -24 86 -108 140 -169 20 -22 49 -56 65 -74 174 -206 713 -735 1069 -1051 83 -73 166 -146 185 -164 19 -17 71 -62 115 -101 44 -38 82 -72 85 -75 3 -3 41 -37 85 -75 44 -39 82 -72 85 -75 3 -3 32 -27 65 -55 33 -27 62 -52 65 -55 3 -3 82 -71 175 -150 94 -79 190 -162 215 -184 25 -23 72 -63 105 -91 33 -27 98 -83 145 -124 47 -40 96 -83 110 -95 68 -58 166 -142 170 -146 3 -3 36 -32 75 -65 38 -33 81 -70 95 -82 212 -182 429 -367 483 -410 186 -149 414 -174 616 -68 66 35 82 47 236 180 44 39 107 93 139 120 33 28 64 55 70 60 6 6 38 33 71 60 33 28 67 57 75 65 8 9 42 38 75 65 33 28 62 52 65 55 3 3 37 32 75 65 39 33 72 62 75 65 4 5 499 429 590 506 14 12 50 43 80 69 30 26 66 57 80 69 42 35 165 140 170 146 3 3 32 27 65 55 33 27 67 56 75 65 8 8 51 46 95 85 44 38 82 72 85 75 3 3 41 37 85 75 44 39 89 79 101 90 11 11 37 34 56 50 59 50 207 184 292 265 44 41 90 84 102 95 143 132 538 535 660 675 21 25 41 47 44 50 33 33 135 157 235 285 47 61 93 118 101 129 9 10 32 43 51 75 20 31 40 58 45 59 4 2 8 7 8 12 0 5 24 44 54 87 29 43 63 95 75 116 11 20 31 54 42 75 12 20 35 60 50 87 54 93 174 349 195 415 8 25 19 54 24 65 41 94 128 411 145 530 4 28 11 75 16 105 17 102 32 314 33 440 0 193 -29 487 -64 645 -5 22 -18 81 -29 130 -26 115 -88 304 -142 436 -63 153 -215 444 -252 481 -7 7 -30 40 -52 73 -58 92 -210 268 -337 390 -62 61 -122 117 -133 125 -11 8 -59 45 -107 83 -48 37 -89 67 -92 67 -3 0 -49 28 -103 63 -101 65 -270 150 -383 194 -36 14 -74 29 -85 33 -76 33 -313 95 -440 116 -49 8 -177 22 -284 31 -180 15 -207 15 -370 -1 -176 -16 -367 -50 -471 -82 -106 -32 -175 -56 -205 -69 -16 -7 -53 -22 -80 -33 -115 -45 -345 -175 -464 -261 -99 -72 -218 -170 -305 -251 -84 -78 -247 -261 -319 -357 -34 -45 -67 -83 -74 -83 -6 0 -51 50 -100 112 -88 113 -341 376 -422 439 -24 19 -48 39 -55 44 -108 101 -459 309 -636 378 -14 5 -35 14 -47 18 -13 5 -33 13 -45 18 -13 5 -32 12 -43 14 -11 3 -51 15 -90 26 -143 43 -313 74 -505 91 -139 12 -213 11 -390 -5z"/></g></svg>';
  
  var svg_plays ='<svg version="1.0" xmlns="http://www.w3.org/2000/svg"width="50" height="50" viewBox="0 0 1280.000000 1280.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"fill="white" stroke="none"><path d="M3930 11070 c-8 -5 -32 -10 -52 -10 -20 0 -47 -4 -60 -9 -13 -5 -41 -14 -63 -21 -74 -24 -144 -60 -207 -108 -98 -75 -107 -83 -163 -159 -86 -114 -141 -233 -180 -388 -53 -210 -50 -1 -50 -4110 0 -3579 1 -3827 17 -3925 36 -216 97 -382 191 -520 103 -150 279 -272 447 -309 30 -7 71 -17 91 -22 47 -12 197 -12 251 0 338 75 326 70 943 421 53 30 719 412 750 430 17 10 107 62 200 115 94 54 184 105 200 115 31 17 697 399 750 430 17 9 185 106 375 215 190 109 360 206 377 216 64 36 101 58 408 234 305 175 343 197 408 233 29 17 678 390 751 432 78 45 234 134 266 152 19 11 127 73 240 138 224 128 215 124 410 235 74 42 149 85 165 95 17 9 111 64 210 120 99 57 194 111 210 120 17 10 91 53 165 95 74 43 149 85 165 95 122 70 288 195 361 272 201 212 285 397 285 628 0 232 -95 435 -297 632 -86 83 -188 165 -274 217 -79 49 -271 161 -274 161 -2 0 -55 30 -117 66 -63 37 -130 76 -149 87 -19 10 -127 72 -240 137 -113 65 -221 127 -240 138 -19 11 -80 45 -135 77 -55 31 -120 69 -145 82 -25 14 -70 40 -100 58 -63 37 -589 339 -707 406 -21 12 -173 99 -338 194 -165 95 -317 182 -337 194 -21 11 -54 30 -73 41 -19 11 -50 28 -67 38 -18 11 -172 99 -343 197 -170 98 -325 186 -342 197 -18 10 -48 26 -65 36 -18 11 -172 99 -343 197 -170 98 -325 186 -342 197 -18 10 -48 26 -65 36 -38 22 -478 274 -778 447 -210 121 -243 140 -307 176 -21 12 -130 74 -243 139 -113 65 -221 127 -240 138 -19 11 -80 46 -135 77 -55 32 -118 68 -140 80 -22 13 -94 54 -160 92 -250 143 -415 208 -615 245 -81 15 -233 20 -250 8z"/></g></svg>';
var svg_download ='<svg  id="icon_download_video" version="1.0" xmlns="http://www.w3.org/2000/svg"width="50px" height="57px" viewBox="0 0 1280.000000 1280.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"fill="yellow" stroke="none"><path d="M6060 11587 c-86 -34 -114 -52 -162 -106 -55 -61 -83 -117 -97 -196 -8 -41 -11 -809 -11 -2587 0 -1390 -3 -2528 -7 -2528 -4 0 -318 310 -698 689 -795 794 -736 746 -915 746 -160 0 -178 -12 -428 -259 -112 -111 -220 -222 -239 -249 -90 -121 -98 -275 -24 -417 17 -31 429 -449 1365 -1383 737 -735 1357 -1348 1377 -1362 117 -83 286 -86 410 -7 55 35 2729 2713 2752 2756 67 128 63 278 -12 395 -49 76 -448 464 -507 494 -104 52 -232 53 -341 2 -51 -24 -145 -114 -748 -716 -380 -379 -694 -689 -698 -689 -4 0 -7 1131 -7 2513 0 1551 -4 2540 -10 2586 -12 88 -36 142 -92 206 -50 57 -93 85 -174 113 -57 21 -77 22 -370 21 -291 -1 -312 -2 -364 -22z"/><path fill="yellow " d="M2908 3279 c-137 -20 -257 -120 -301 -253 -25 -74 -25 -674 0 -752 31 -101 131 -202 237 -240 49 -18 165 -19 3561 -22 2702 -2 3520 0 3555 9 154 41 251 132 298 280 8 24 12 141 12 355 0 289 -2 324 -19 371 -52 143 -160 231 -308 253 -84 12 -6952 11 -7035 -1z"/> </g></svg>';

 
    var svg_comments ='<svg version="1.0" xmlns="http://www.w3.org/2000/svg"width="50px" height="50px" viewBox="0 0 1280.000000 1280.000000"preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"fill="white" stroke="none"><path d="M6170 10889 c-321 -31 -481 -53 -662 -90 -56 -12 -114 -24 -128 -26-128 -26 -494 -132 -565 -163 -11 -5 -42 -16 -68 -25 -195 -63 -574 -242 -829 -391 -215 -126 -505 -334 -698 -502 -100 -88 -381 -369 -461 -463 -481 -561 -807 -1223 -934 -1899 -85 -453 -94 -784 -35 -1276 26 -214 126 -617 201 -809 17 -44 37 -99 45 -122 14 -42 64 -152 130 -289 54 -113 148 -276 251 -436 l95 -147 -11 -113 c-15 -148 -28 -259 -40 -333 -6 -33 -17 -107 -26 -165 -43 -280 -183 -804 -246 -922 -5 -10 -9 -23 -9 -29 0 -6 -25 -63 -55 -126 -30 -64 -55 -117 -55 -119 0 -18 -155 -248 -215 -319 -110 -130 -124 -168 -89 -238 43 -85 108 -111 217 -88 23 5 74 14 112 21 284 48 632 127 970 220 189 52 634 196 710 230 22 10 121 50 220 90 99 40 273 121 388 179 227 115 208 111 302 71 93 -39 353 -123 495 -160 47 -12 99 -26 115 -31 89 -26 389 -81 535 -99 294 -37 388 -42 715 -43 318 0 397 4 645 34 801 97 1536 365 2198 802 656 433 1192 1027 1523 1687 68 137 87 177 132 285 28 68 89 232 106 285 6 19 18 58 27 85 32 101 98 382 111 470 2 17 8 55 13 85 47 283 56 718 20 1010 -69 556 -231 1050 -497 1518 -577 1016 -1570 1785 -2773 2146 -351 105 -680 165 -1144 206 -129 12 -614 11 -736 -1z m-1680 -3688 c298 -96 480 -364 455 -671 -14 -155 -82 -297 -197 -406 -82 -77 -147 -115 -252 -150 -108 -35 -267 -36 -371 -2 -108 35 -193 86 -266 160 -105 104 -159 213 -185 367 -15 91 -8 169 23 281 48 171 227 358 396 412 132 42 282 45 397 9z m2250 -4 c219 -71 374 -238 430 -463 46 -184 0 -397 -118 -544 -47 -58 -47 -58 -111 -109 -118 -92 -237 -132 -393 -132 -59 0 -123 5 -141 10 -17 6 -50 17 -72 24 -133 42 -281 167 -347 292 -57 110 -78 195 -78 316 0 179 62 322 195 454 168 167 411 225 635 152z m2230 4 c397 -127 574 -563 377 -928 -41 -77 -175 -210 -252 -249 -109 -57 -186 -75 -309 -75 -88 0 -126 5 -181 23 -112 37 -193 86 -273 167 -204 206 -243 512 -98 771 61 110 223 245 339 282 132 42 282 45 397 9z"/> </g></svg>';
    var tags = ["funnyvideos","comedy","memes","amazing","respect","amazing videos","videos"];
    var cursor =[0,10,30,40,50,60,70,80,90,100];
  var tag_random = tags[Math.floor((Math.random()*tags.length))];
  var cursor_random = cursor[Math.floor((Math.random()*cursor.length))];

    function getfetch(){
  var url= "https://www.tikwm.com/api/feed/search?keywords="+tag_random+"&count=10&cursor="+cursor_random+"";
      
  fetch(url).then(response=> {return response.json()}).then(da
    getvideos(data);
    getswipe(data);
    document.getElementById("skeleton_videos_foryou").style.display="none";
   
  }).catch(err =>
     reloadpage()
   );
}

 
   getfetch();
    function reloadpage(){
       setTimeout(()=>{
    location.reload()
  },5000);
     }
       
    
    function getswipe(data){
     gsap.registerPlugin(ScrollTrigger);

let allVideoDivs = gsap.utils.toArray('.back_video');

allVideoDivs.forEach((videoDiv, i) => {
  
  let videoElem = videoDiv.querySelector('video');

  
 var cover_media = data.data.videos[i].cover;
  
  var title_media = data.data.videos[i].title;
   ;
  function funplay(){
  
   videoElem.src=data.data.videos[i].play;
   videoElem.controls="true";
   
     
}
function remoplay(){
 
  videoElem.removeAttribute("controls");
  videoElem.src="";
  
}
  
  ScrollTrigger.create({
    trigger: videoElem,
    start: 'top 20%',
    end: 'top -50%',
    markers: false,
    
    onEnter: () => funplay(),
    onEnterBack: () => funplay(),
    onLeave: () => remoplay(),
    onLeaveBack: () => remoplay(),
  });
  
});

    }

      
   
 
     var screenHeight = screen.height/1.19;
    
   function getvideos(data){
    
      

     for(var i =0; i<data.data.videos.length;i++){
  
      
      /*info video likes plays comments */
      
      var count_likes=new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(data.data.videos[i].digg_count);
     
     //count play
     var count_plays=new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(data.data.videos[i].play_count);
     var count_comments=new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(data.data.videos[i].comment_count);
     
      document.getElementById("videos_foryou").innerHTML +='<article id="back_video"  class="back_video"><div id="back_player_video"><div id="right_player_video"><div id="back_avatar_video"><img id="avatar_video" src='+data.data.videos[i].author.avatar+'></div><div id="back_info_video">'+svg_likes+'<div id="count_video" class="count_likes">'+count_likes+'</div></div><div id="back_info_video">'+svg_plays+'<div id="count_video" class="count_plays">'+count_plays+'</div></div><div id="back_info_video">'+svg_comments+'<div id="count_video" class="count_comments">'+count_comments+'</div></div></div><div id="left_player_video"><div id="back_icon_download"><img id="icon_download_video" src="images/download.svg"></div></div></div><video  auto id="video" height="'+screenHeight+'" controlslist="noplaybackrate" title="'+data.data.videos[i].title+'"  onclick=" this.controls=`true`;this.src=`'+data.data.videos[i].play+'`" poster="'+data.data.videos[i].cover+'" onplay="getmedia(this)"onloadeddata="this.play(); " onended="morevideos(this);"></video></article>';
      

}


   }
   


  
    /*script download video */
    
  navigator.clipboard
  .readText()
  .then(
    (clipText) => (
       
      getcopy(clipText))
    
  );
  
  
  function getcopy(clipText){
    var clip = clipText;
    var url = new URL(clip);
    
    if(url.hostname == "vm.tiktok.com" || url.hostname == "www.tiktok.com"){
      
    
    document.getElementById("search").value= clipText;
    search();
    }
  }

            


  
  function search(){
  window.scroll(0,0);
  var search = document.getElementById("search").value;
 
   var url = new URL(search);
    if(url.hostname== "vm.tiktok.com" || url.hostname == "www.tiktok.com"){
   
      document.getElementById("main_download_video").style.display="flex";

    }
  
  fetch("https://www.tikwm.com/api/?url="+search+"").then(response=> {return response.json()}).then(data=>{
    window.scroll(0,0);
 
    document.getElementById("back_player_video").style.display="flex";
    
    document.getElementById("avatar_video").src=data.data.author.avatar;
    document.getElementById("video_download").poster=data.data.cover;
    document.getElementById("video_download").src=data.data.play;
    document.getElementById("video_download").title=data.data.title;
    //count likes
    var count_likes=new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(data.data.digg_count);
     document.querySelector(".count_likes").innerText= count_likes;
     //count play
     var count_plays=new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(data.data.play_count);
     document.querySelector(".count_plays").innerText= count_plays;
     gsap.registerPlugin(ScrollTrigger);

let allVideoDivs = gsap.utils.toArray('#back_video');

allVideoDivs.forEach((videoDiv, i) => {
  
  let videoElem = videoDiv.querySelector("#video_download");

  
   
  function funplay(){
  
   videoElem.play();
   videoElem.controls="true";
   
     
}
function remoplay(){
  videoElem.pause();
  
  
}
  
  ScrollTrigger.create({
    trigger: videoElem,
    start: 'top 25%',
    end: 'top -50%',
    markers: false,
    
    onEnter: () => funplay(),
    onEnterBack: () => funplay(),
    onLeave: () => remoplay(),
    onLeaveBack: () => remoplay(),
  });
  
});
     //count comments
var count_comments=new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(data.data.comment_count);
     document.querySelector(".count_comments").innerText= count_comments;
     /*auto scroll*/
     

  })
  
  }
  
  
  
