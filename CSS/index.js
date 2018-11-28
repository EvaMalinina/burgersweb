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
      var popup = document.querySelector('#popup');
      popup.classList.add('popup_active');
      alert(data.popup_active);
    } else {
      alert(data.message);
    }
  }
 
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
  

});


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

