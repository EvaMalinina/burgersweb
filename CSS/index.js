document.querySelector('#humburger').addEventListener('click', function() {
  var header = document.querySelector('#header');

  header.classList.toggle('header_fullmenu');
});

var title = document.getElementsByClassName('team-acco__member'),
    wrap = document.getElementsByClassName('team-acco__wrap');

for (var i=0; i<title.length; i++) {
    title[i].addEventListener('click', function() {
      if (!(this.classList.contains('active'))) {
        for (var j=0; j<title.length; j++) {
          title[j].classList.remove('active');
        }
        this.classList.add('active');
      }
    })
}
var page = document.getElementsByClassName('bigmenu__page'),
    menuwrap = document.getElementsByClassName('bigmenu__wrap');

for (var i=0; i<page.length; i++) {
  page[i].addEventListener('click', function() {
    if (!(this.classList.contains('active'))) {
      for (var i=0; i<page.length; i++) {
        page[i].classList.remove('active');
      }
      this.classList.add('active');
    }
  })
}

document.querySelector('#ingridients').addEventListener('click', function() {
  var ingridients = document.querySelector('#burgers-pic__consist');
  burgers-pic__consist.classList.add('active');
});
document.querySelector('#dagger').addEventListener('click', function() {
  var dagger = document.querySelector('#burgers-pic__consist');
  burgers-pic__consist.classList.remove('active');
});


document.querySelector('#cross').addEventListener('click', function() {
  var cross = document.querySelector('#cross');
  bigmenu__page.classList.toggle('active');
});