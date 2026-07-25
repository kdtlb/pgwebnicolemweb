/* VENDIMIA · Casa de Eventos — interacciones compartidas */

/* =========================================================
   TEMPORAL · Selector de tono de verde (vista previa cliente)
   Para quitarlo: eliminar este bloque + el bloque en styles.css
   ========================================================= */
(function(){
  const PALETTES = [
    { id:'',   name:'Verde actual', color:'#1e4d39' },
    { id:'p1', name:'Olivo oscuro', color:'#272b00' },
    { id:'p2', name:'Olivo',        color:'#54582f' },
    { id:'p3', name:'Salvia',       color:'#86895d' }
  ];
  const saved = localStorage.getItem('nm-palette') || '';
  if (saved) document.documentElement.setAttribute('data-palette', saved);

  document.addEventListener('DOMContentLoaded', () => {
    const panel = document.createElement('div');
    panel.className = 'palette-switch';
    const title = document.createElement('span');
    title.className = 'ps-title';
    title.textContent = 'Tono de verde · vista previa';
    const row = document.createElement('div');
    row.className = 'ps-row';

    PALETTES.forEach(p => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ps-dot';
      b.style.background = p.color;
      b.title = p.name;
      b.setAttribute('aria-label', 'Tono ' + p.name);
      if ((saved || '') === p.id) b.classList.add('active');
      b.addEventListener('click', () => {
        if (p.id) document.documentElement.setAttribute('data-palette', p.id);
        else document.documentElement.removeAttribute('data-palette');
        localStorage.setItem('nm-palette', p.id);
        row.querySelectorAll('.ps-dot').forEach(d => d.classList.remove('active'));
        b.classList.add('active');
      });
      row.appendChild(b);
    });

    panel.appendChild(title);
    panel.appendChild(row);
    document.body.appendChild(panel);
  });
})();

document.addEventListener('DOMContentLoaded', () => {

  /* --- Fondo del nav al hacer scroll --- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Menú móvil --- */
  const burger = document.querySelector('.burger');
  const links  = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      links.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    });
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
        document.body.classList.remove('menu-open');
      })
    );
    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        burger.classList.remove('open');
        links.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  /* --- Reveal al hacer scroll --- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* --- Carruseles de imágenes (si existen) --- */
  document.querySelectorAll('[data-carousel]').forEach((car) => {
    const track  = car.querySelector('.car-track');
    const slides = Array.from(car.querySelectorAll('.car-slide'));
    if (!track || slides.length === 0) return;

    const prev = car.querySelector('.car-btn.prev');
    const next = car.querySelector('.car-btn.next');
    const dotsWrap = car.querySelector('.car-dots');
    let index = 0;
    let timer = null;

    // Puntos de navegación
    const dots = slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Ir a la imagen ' + (i + 1));
      b.addEventListener('click', () => { go(i); restart(); });
      dotsWrap && dotsWrap.appendChild(b);
      return b;
    });

    const go = (i) => {
      index = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-index * 100) + '%)';
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    };

    prev && prev.addEventListener('click', () => { go(index - 1); restart(); });
    next && next.addEventListener('click', () => { go(index + 1); restart(); });

    const start = () => {
      if (slides.length < 2) return;
      timer = setInterval(() => go(index + 1), 6000);
    };
    const restart = () => { clearInterval(timer); start(); };

    // Pausa al pasar el cursor
    car.addEventListener('mouseenter', () => clearInterval(timer));
    car.addEventListener('mouseleave', restart);

    go(0);
    start();
  });

  /* --- Conteo animado de estadísticas (si existen) --- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur = 1600; const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        co.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(c => co.observe(c));
  }
});
