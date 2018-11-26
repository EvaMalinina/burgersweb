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
      if (e.target.classList.contains('slider__control')) {
        e.preventDefault();

        console.log(e.target);

        var vector= e.target.dataset.vector;
        var active = slider.querySelector('slider__burger-info_active');

        if (vector === 'next') {
          if (active.nextElementSibling) {
            posX += widthWrap;
            listb.style.transform = `translateX(${-posX}px)`;
            active.classList.remove('slider__burger-info_active');
            active.nextElementSibling.classList.add('slider__burger-info_active');
          }
        } else {
          if (active.previousElementSibling) {
            posX -= widthWrap;
            listb.style.transform = `translateX(${posX}px)`;
            active.classList.remove('slider__burger-info_active');
            active.previousElementSibling.classList.add('slider__burger-info_active');
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
    if (e.target.classList.contains('bigmenu__trigger')) {
    e.preventDefault();

    var item = e.target.closest('li');
    var items = list.children;
    var wrap = e.target.nextElementSibling;
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

document.querySelector('#cross').addEventListener('click', function() {
  var cross = document.querySelector('.cross');
  console.log(cross);
  
  var close = document.querySelector('.bigmenu__page');
  
  close.classList.toggle('bigmenu__page_active');
  cross.classList.remove('bigmenu__page_active');

  
});



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
const send = document.querySelector('#send');

send.addEventListener('click', event => {
  const FormData = {
    name: myform.elements.name.value,
    phone: myform.elements.phone.value,
    text: myform.elements.text.value
  };
 
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open ('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(JSON.stringify(FormData));
  xhr.addEventListener('load', () => {
    if(xhr.response.status) {
      console.log('отправка удалась')
    }
  });
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