const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const setActiveMenuItem = ItemEq => {
  $('.fixed-menu__item')
    .eq(ItemEq)
    .addClass('active')
    .siblings()
    .removeClass('active');
};

const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;
  const mouseInertionIsFinished = 200;
  const sectionInertionIsFinished = 2000;

  if (inScroll === false) {
   inScroll = true;
    display.css({
    transform: `translateY(${position})`
    });

    sections
    .eq(sectionEq)
    .addClass('active')
    .siblings()
    .removeClass('active'); 

  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, sectionInertionIsFinished + mouseInertionIsFinished);
 }
};
const Scrolltosection = direction =>{
  const activeSection = sections.filter('.active');
  const prevSection = activeSection.prev();
  const nextSection = activeSection.next();

  if (direction === 'up' && prevSection.length) {
    performTransition(prevSection.index());
  }

  if (direction === 'down'&& nextSection.length) {
    performTransition(nextSection.index());
  }
}

$(document).on({

  wheel: e => {
    const direction = e.originalEvent.deltaY > 0 ? 'up':'down';
    Scrolltosection(direction);
  },
  keydown: e => {
    console.log(e.keyCode);

    switch (e.keyCode) {
      case 40:
        Scrolltosection('down');
        break;
      case 38:
        Scrolltosection('up');
        break;
    }
   },
   touchmove: e => e.preventDefault
  
});

if (isMobile) {
    $(document).swipe( {
    swipe:function(
      event, 
      direction, 
      distance, 
      duration, 
      fingerCount, 
      fingerData
    ) {
      /*
      * потому что библиотека...
      */
      let scrollDirection = direction ==='down' ? 'up' : 'down';
      Scrolltosection(scrollDirection);  
    }
  });
}



$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');

  performTransition(target);
})




document.querySelector('#humburger').addEventListener('click', function() {
  var header = document.querySelector('#header');

  header.classList.toggle('header_fullmenu');
});

(function (selector) {
    var slider = document.querySelector(selector);
    var listb = slider.querySelector('.slider__list');
    var itemsCount = listb.children.length;
    var widthWrap = slider.querySelector('.slider__wrap').clientWidth;
    var widthList = widthWrap * itemsCount;
    var posX = 0;

    listb.style.width = `${widthList}px`;
   
    slider.addEventListener ('click', function (e) {
      var arrow = e.target.closest('a');
           
      if (arrow.classList.contains('slider__control')) {
        e.preventDefault();

        console.log(arrow);

        var vector= arrow.dataset.vector;
        var active = slider.querySelector('.active');

        console.log(active);

        if (vector === 'next') {
          if (active.nextElementSibling) {
            posX += widthWrap;
            listb.style.transform = `translateX(${-posX}px)`;
            active.classList.remove('active');
            active.nextElementSibling.classList.add('active');
          }
        } else {
          if (active.previousElementSibling) {
            posX -= widthWrap;
            listb.style.transform = `translateX(${-posX}px)`;
            active.classList.remove('active');
            active.previousElementSibling.classList.add('active');
          }
        }
      }
    })
}) ('#slider');

// var title = document.getElementsByClassName('team-acco__member'),
//     wrap = document.getElementsByClassName('team-acco__wrap');

// for (var i=0; i<title.length; i++) {
//     title[i].addEventListener('click', function() {
//       if (!(this.classList.contains('team-acco__member_active'))) {
//         for (var j=0; j<title.length; j++) {
//           title[j].classList.remove('team-acco__member_active');
//         }
//         this.classList.add('team-acco__member_active');
//       }
//     })
// }


(function (accordeon) {
    var list = document.querySelector('#accordeon');

    list.addEventListener('click', function (e) {
      if (e.target.classList.contains('title-name_team-acco')) {
      e.preventDefault();

      var item = e.target.closest('li');
      var items = list.children;
      var wrap = e.target.nextElementSibling;
      var heightContent = wrap.firstElementChild.clientHeight;

      if (!item.classList.contains('team-acco__member_active')) {
        for (let i = 0; i < items.length; i++) {
          const element = items[i];

          element.classList.remove('team-acco__member_active');
          element.lastElementChild.style.height = 0;
        }

        item.classList.add('team-acco__member_active');
        wrap.style.height = `${heightContent}px`;
      } else {
        item.classList.remove ('team-acco__member_active');
        wrap.style.height = 0;
      }
    }
  });

}) ('#accordeon');

// var page = document.getElementsByClassName('bigmenu__page'),
//     menuwrap = document.getElementsByClassName('bigmenu__wrap');

// for (var i=0; i<page.length; i++) {
//   page[i].addEventListener('click', function() {
//     if (!(this.classList.contains('bigmenu__page_active'))) {
//       for (var j=0; j<page.length; j++) {
//         page[j].classList.remove('bigmenu__page_active');
//       }
//       this.classList.add('bigmenu__page_active');
//     }
//   })
// }

(function (accordeonmenu) {
  var list = document.querySelector('#accordeonmenu');

  list.addEventListener('click', function (e) {
    if (e.target.classList.contains('cross')) {
      var active = list.querySelector('.bigmenu__page_active');
  
      active.classList.remove('bigmenu__page_active');
      return;
    }
    var linkk = e.target.closest('a');

    console.log(linkk);
    if (linkk.classList.contains('bigmenu__trigger')) {
    e.preventDefault();

    var item = linkk.closest('li');
    var items = list.children;
    var wrap =linkk.nextElementSibling;
    var widthContent = wrap.firstElementChild.clientWidth;

    if (!item.classList.contains('bigmenu__page_active')) {

      for (let i = 0; i < items.length; i++) {
        const element = items[i];

        element.classList.remove('bigmenu__page_active');
        // element.lastElementChild.style.width = 0;
      }

      item.classList.add('bigmenu__page_active');
      // wrap.style.width = `${widthContent}px`;
    } else {
      item.classList.remove ('bigmenu__page_active');
      // wrap.style.width = 0;
    }
    
  }
  
});


}) ('#accordeonmenu');



document.querySelector('#ingridients').addEventListener('click', function() {
  var ingrid = document.querySelector('.burgers-pic__consist');
 
  ingrid.classList.toggle('burgers-pic__consist_active');
});
document.querySelector('#dagger').addEventListener('click', function() {
  var dagger = document.querySelector('.burgers-pic__drop');
  console.log(dagger);
  dagger.classList.remove('burgers-pic__consist_active');
});




const myform = document.querySelector('#myform');
// const send = document.querySelector('#send');

myform.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(myform);
    data.append('to', 'userdotsenko@gmail.com');
    console.log(data);

  const xhr = new XMLHttpRequest();
 
  xhr.open ('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    var data = JSON.parse(xhr.responseText);
    
    if (data.status == 1) {
      var popup = document.querySelector('#show');
      var message = popup.querySelector('.popup__message');
      message.textContent = data.message;
5
      message.innerHTML = 'Сообщение отправлено ';

      popup.classList.add('popup_active');
     
    }
    // console.log(data.popup);
    }  
  });
 
  // xhr.addEventListener('load', (response) => {
  //   console.log(response);
  //   if(xhr.statusCode) {
  //     console.log('отправка удалась')
  //     console.log(xhr.response.status)
  //   }
  // });
  // fetch('https://webdev-api.loftschool.com/sendmail', {method:'POST', body:data}).then(function(res){ 
  //   return res.json();

  // }).then(function(data){
  //   console.log(data);
  // });
  




function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
      valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.text)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

document.querySelector('#popupclose').addEventListener('click', function() {
  var popupclose = document.querySelector('.popup');

  popupclose.classList.remove('popup_active');
});


const listreviews = document.querySelector('#listreviews')
var reviewspopup = document.querySelector('#reviews__popup');

listreviews.onclick = function(e) {
  var target = e.target;

  console.log(e.target);

  if (target.tagName!=='BUTTON') return;
  
  var item = target.closest('li');
  var name = item.querySelector('.title-name').textContent;
  var text = item.querySelector('.reviews__text').textContent;
  
  reviewspopup.querySelector('.reviews__popup-header').textContent = name;
  reviewspopup.querySelector('.reviews__popup-text').textContent = text;

  reviewspopup.classList.add('reviews__popup_active');
  
}  

var popupcross = document.querySelector('#popupcross');
popupcross.addEventListener ('click', function(e) {
  e.preventDefault();
  var target = e.target;
  

  if (target.tagName!=='IMG') return ;
  reviewspopup.classList.remove('reviews__popup_active');
  
});
  
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      controls: 0,
      disablekb: 0,
      modestbranding: 0,
      rel: 0,
      autoplay:0,
      showinfo:0
    },
    events: {
      'onReady': onPlayerReady
      // 'onStateChange': onPlayerStateChange
    }
  });
}

$('.player__start').on('click', e => {
  // -1 – unstarted
  // 0 – ended
  // 1 – playing
  // 2 – paused
  // 3 – buffering
  // 5 – video cued
  const playerStatus = player.getPlayerState();

  if (playerStatus !== 1) {
    player.playVideo();
    $('.player__start').addClass('paused');
  } else {
    player.pauseVideo();
    $('.player__start').removeClass('paused');
  }
  player.playVideo();
});

function onPlayerReady () {
  const volume = player.getVolume();
  const duration = player.getDuration();
  let interval;

  clearInterval(interval);
  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percent = (completed / duration) * 100;

    changeButtonPosition(percent);
  }, 1000);
};

$('.player__volumeline').on('click', e => {
  const volume = player.getVolume();
  player.setVolume();
})
$('.player__playback').on('click', e => {
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercent = (newButtonPosition / bar.width())*100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

  changeButtonPosition(clickedPercent);
  player.seekTo(newPlayerTime);
});

function changeButtonPosition(percent) {
  $('.player__playback-button').css({
    left: `${percent}%`
  });
};


function initMap() {
  //coздание карты
  var mapg = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 55.754471, lng: 37.605409 },
      zoom: 10,
      disableDefaultUI: true,
      styles: [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
          },
          {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
          },
          {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{ color: '#ff0000' }]
          },
          {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#111' }]
          },
          {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#38414e' }]
          },
          {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#212a37' }]
          },
          {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9ca5b3' }]
          },
          {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#746855' }]
          },
          {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#1f2835' }]
          },
          {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#f3d19c' }]
          },
          {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#2f3948' }]
          },
          {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#d59563' }]
          },
          {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#00FFFF' }]
          },
          {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#515c6d' }]
          },
          {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#17263c' }]
          }
      ]
  });

  var coords = [
    {lat:55.753025, lng:37.653314 },
    {lat:55.715248, lng:37.628032 },
    {lat:55.773947, lng:37.505904 }
  ];

  for (let i=0; i<coords.length; i++) {
    new google.maps.Marker({
      position: coords[i],
      icon: '../pictures/icons/map-marker.svg',
      map: mapg
    });
  }
  
}


 
