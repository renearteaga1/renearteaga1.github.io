window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  document.querySelector('.hero-color').classList.add('animate');
  document.querySelector('.hero-title').classList.add('scrolled-title');
  document.querySelector('.preambule__text').classList.add('show');

  if (document.querySelector('.bio-element') != null) {
    document.querySelector('.bio-element').style.transform = 'translateY('+(((scrolled/scrollable)*100)-69)+'%)';    
  }
 
  // console.log(document.querySelector('.bio-element').style.transform('translateY'))
  if (Math.ceil(scrolled) < 55) {
    console.log('inicio');
    document.querySelector('.hero-color').classList.remove('animate');
    document.querySelector('.hero-title').classList.remove('scrolled-title');
    document.querySelector('.preambule__text').classList.remove('show');
    document.querySelector('.flecha').style.transform = 'rotate(360deg)';
  }
  // console.log(scrolled);
  if (Math.ceil(scrolled) === scrollable) {
    console.log('fondo');
    document.querySelector('.flecha').style.transform = 'rotate(180deg)';
  }

  if (Math.ceil(scrolled) > (scrollable*0.5)) {
    console.log('> mitad');
    document.querySelector('.preambule__text').classList.add('d-none');
  }
  if (Math.ceil(scrolled) < (scrollable*0.5)) {
    console.log('> mitad');
    document.querySelector('.preambule__text').classList.remove('d-none');
  }

})