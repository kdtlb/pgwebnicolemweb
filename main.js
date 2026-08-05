/* VENDIMIA · Casa de Eventos — interacciones compartidas */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Botón flotante de WhatsApp (presente en todas las páginas) --- */
  (() => {
    if (document.querySelector('.wa-float')) return;
    const WA_NUMBER = '59167393012';
    const t = (window.NM_I18N && window.NM_I18N.t) ? window.NM_I18N.t : () => '';

    const wa = document.createElement('a');
    wa.className = 'wa-float';
    wa.target = '_blank';
    wa.rel = 'noopener';
    wa.setAttribute('data-i18n-aria', 'wa_aria');
    wa.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.3.1.5.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.4.1.1.1.6-.2 1.3z"/></svg>';

    const refresh = () => {
      const msg = t('wa_text');
      wa.href = 'https://wa.me/' + WA_NUMBER + (msg ? '?text=' + encodeURIComponent(msg) : '');
      const aria = t('wa_aria');
      if (aria) wa.setAttribute('aria-label', aria);
    };
    refresh();
    document.body.appendChild(wa);

    // Mantiene el mensaje e idioma sincronizados al cambiar de idioma.
    // (El manejador de idioma de i18n.js se registra antes, así que al
    //  ejecutarse este ya se aplicó el nuevo idioma.)
    document.querySelectorAll('.lang-switch [data-lang]').forEach((b) =>
      b.addEventListener('click', refresh)
    );
  })();

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
