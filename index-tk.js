(function () {
  const h = React.createElement;
  const sec = {
    position: 'relative',
    zIndex: 1,
    padding: 'var(--section-pad-y) var(--section-pad-x)',
    maxWidth: 1100,
    margin: '0 auto'
  };
  const twoCol = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gap: 'var(--column-gap)',
    alignItems: 'start'
  };
  const body = {
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    lineHeight: 1.85,
    color: 'var(--ink-2)',
    margin: 0
  };
  function Eb({ children, onDark, ar }) {
    return h('p', {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: ar ? 15 : 14,
        fontWeight: 600,
        letterSpacing: ar ? 0 : '0.14em',
        textTransform: ar ? 'none' : 'uppercase',
        color: onDark ? 'var(--rose)' : 'var(--berry)',
        margin: '0 0 16px'
      }
    }, children);
  }
  function H2({ children, onDark, style }) {
    return h('h2', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 'clamp(30px,4.5vw,52px)',
        letterSpacing: '-0.005em',
        lineHeight: 1.15,
        margin: 0,
        color: onDark ? 'var(--rose)' : 'var(--ink)',
        textWrap: 'pretty',
        ...style
      }
    }, children);
  }
  function Brand({ t }) {
    return h('a', {
      href: '#top',
      style: { display: 'flex', alignItems: 'baseline', gap: 5, textDecoration: 'none', paddingTop: 24 }
    }, h('img', {
      src: (window.__resources && window.__resources.tukkiLogo) || 'assets/web/tukki-logo-tokki-studio.png',
      alt: t.brandName,
      style: { height: 105, width: 'auto' }
    }));
  }
  function Nav({ t, ar }) {
    const { Button } = window.DS;
    const ids = ['how', 'why', 'faq'];
    const links = t.nav.map((l, i) => h('a', { key: l, href: '#' + ids[i], style: { color: 'var(--ink)' } }, l));
    const lang = h('a', {
      href: '#', 'data-view': 'en', lang: 'en',
      style: {
        fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 600,
        border: '1.5px solid var(--border-button)', borderRadius: 999, padding: '7px 14px', color: 'var(--ink)'
      }
    }, 'English');
    const cta = h(Button, { size: 'sm', href: '#contact' }, t.navCta);
    const right = h('div', {
      style: {
        display: 'flex', alignItems: 'center', gap: 'clamp(14px,3vw,32px)',
        fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500
      }
    }, h('span', { className: 'tk-links', style: { display: 'flex', gap: 'clamp(14px,3vw,28px)' } }, links), lang, cta);
    return h('nav', {
      style: {
        position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 24, padding: '14px clamp(20px,5vw,64px)',
        background: 'var(--nav-glass)', backdropFilter: 'blur(8px)'
      }
    }, h(Brand, { t, ar }), right);
  }
  function App() {
    const { Button, ServiceCard, ContactPanel, WhatsAppIcon } = window.DS;
    const t = TUKKI.ar;
    const ar = true;
    const [layer, onPop] = useStains();
    const L = t.hero;
    const hero = L.join('');
    const h3 = L[2];
    const pop = e => {
      const b = e.currentTarget;
      b.animate && b.animate([
        { transform: 'translate(-50%,-50%) scale(1)' },
        { transform: 'translate(-50%,-50%) scale(.72,.55)' },
        { transform: 'translate(-50%,-50%) scale(1)' }
      ], { duration: 240, easing: 'ease-out' });
      onPop(e.clientX, e.clientY);
    };
    const plant = h('div', { className: 'mr-plant' },
      h('div', { className: 'mr-lean mr-lean-a', 'aria-hidden': 'true' },
        h('div', { className: 'mr-sway-a' }, h('img', { src: MRres('bush', 'assets/web/mulberry-bush.webp'), alt: '' }))),
      h('div', { className: 'mr-lean mr-lean-b', 'aria-hidden': 'true' },
        h('div', { className: 'mr-sway-b' }, h('img', { src: MRres('bush', 'assets/web/mulberry-bush.webp'), alt: '' }))),
      MR.berryPos.map((q, i) => h('button', {
        key: i, className: 'mr-berry', tabIndex: -1, 'aria-hidden': 'true',
        style: { left: q[0] + '%', top: q[1] + '%' }, onClick: pop
      })));
    const heroText = h('div', { style: { position: 'relative', zIndex: 3, pointerEvents: 'none' } },
      h('div', { className: 'mr-hero' }, h(Eb, { ar }, t.eyebrow)),
      h('h1', {
        className: 'mr-hero',
        style: {
          fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px,7vw,84px)',
          lineHeight: 1.5, letterSpacing: 0, margin: '0 0 28px', minHeight: 'auto',
          paddingTop: '.1em', color: 'var(--ink)'
        }
      }, h('span', { style: { color: 'var(--berry)' } }, h3)),
      h('p', {
        className: 'mr-hero',
        style: {
          animationDelay: '.15s', fontSize: 'clamp(18px,2.2vw,22px)', lineHeight: 1.8,
          maxWidth: '34em', margin: '0 0 36px', color: 'var(--ink-2)',
          background: 'rgba(250,247,242,.85)', boxShadow: 'var(--shadow-halo)', borderRadius: 8, width: 'fit-content'
        }
      }, t.heroBody),
      h('div', {
        className: 'mr-hero',
        style: { animationDelay: '.28s', display: 'flex', flexWrap: 'wrap', gap: 14, pointerEvents: 'auto', width: 'fit-content' }
      },
        h(Button, { href: 'https://wa.me/9647885514118', target: '_blank', rel: 'noopener noreferrer' }, t.cta1),
        h(Button, { variant: 'outline', href: '#how' }, t.cta2)),
      h('div', {
        className: 'mr-hero',
        style: {
          animationDelay: '.4s', display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,48px)',
          marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-default)', width: 'fit-content',
          background: 'rgba(250,247,242,.85)', boxShadow: 'var(--shadow-halo)'
        }
      }, t.stats.map(([n, l]) => h('div', { key: l, style: { display: 'flex', flexDirection: 'column', gap: 4 } },
        h('bdi', { dir: 'ltr', style: { fontFamily: "'Cormorant Garamond',serif", fontWeight: 500, fontSize: 'clamp(36px,4.5vw,52px)', lineHeight: 1, color: 'var(--berry)' } }, n),
        h('span', { style: { fontSize: 15, color: 'var(--ink-2)' } }, l)))));
    const header = h('header', {
      id: 'top',
      style: {
        position: 'relative',
        padding: 'clamp(180px,18vw,210px) clamp(20px,5vw,64px) clamp(48px,8vw,110px)',
        maxWidth: 1100, margin: '0 auto'
      }
    }, plant, heroText);
    const how = h('section', { id: 'how', style: { ...sec, zIndex: 3, background: 'var(--paper)', maxWidth: 'none', margin: 0 } },
      h('div', { style: { maxWidth: 1100, margin: '0 auto' } },
        h('div', { style: twoCol },
          h('div', { style: { position: 'sticky', top: 110 } }, h(Eb, { ar }, t.howEyebrow), h(H2, null, t.howTitle)),
          h('ol', { style: { listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--border-default)' } },
            t.steps.map(([hd, d], i) => h('li', {
              key: hd, className: 'mr-reveal',
              style: { display: 'grid', gridTemplateColumns: '56px 1fr', gap: 16, padding: '24px 0', borderBottom: '1px solid var(--border-default)' }
            },
              h('span', { style: { fontFamily: "'Cormorant Garamond',serif", fontSize: 40, lineHeight: 1, color: 'rgba(87,2,40,.35)' } }, '0' + (i + 1)),
              h('div', null,
                h('p', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 23, margin: '0 0 6px', color: 'var(--ink)' } }, hd),
                h('p', { style: { ...body, fontSize: 16 } }, d))))))));
    const why = h('section', { id: 'why', style: { position: 'relative', background: '#FAF7F2', '--rose': '#570228', padding: 'var(--section-pad-y) var(--section-pad-x)' } },
      h('div', { style: { position: 'relative', zIndex: 3, maxWidth: 1100, margin: '0 auto' } },
        h(Eb, { ar, onDark: true }, t.whyEyebrow),
        h(H2, { onDark: true, style: { margin: '0 0 48px', maxWidth: '20em' } }, t.whyTitle),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 } },
          t.benefits.map(([n, d]) => h('div', { key: n, className: 'mr-reveal' }, h(ServiceCard, { name: n, desc: d }))))));
    const program = h('section', { id: 'program', style: { ...sec, maxWidth: 'none', margin: '0 0 var(--section-pad-y)', background: 'var(--oat-1)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', scrollMarginTop: 60 } },
      h('div', { style: { ...twoCol, maxWidth: 1100, margin: '0 auto' } },
        h('div', { style: { position: 'sticky', top: 110 } },
          h(Eb, { ar }, t.programEyebrow),
          h(H2, { style: { margin: '0 0 18px' } }, t.programTitle),
          h('p', { style: { ...body, margin: '0 0 28px' } }, t.programBody)),
        h('ol', { style: { listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--border-default)' } },
          t.program.map(([hd, d], i) => h('li', {
            key: hd, className: 'mr-reveal',
            style: { display: 'grid', gridTemplateColumns: '48px 1fr', gap: 14, padding: '18px 0', borderBottom: '1px solid var(--border-default)' }
          },
            h('bdi', { dir: 'ltr', style: { fontFamily: "'Cormorant Garamond',serif", fontSize: 30, lineHeight: 1.1, color: 'rgba(87,2,40,.35)' } }, String(i + 1).padStart(2, '0')),
            h('div', null,
              h('p', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 21, margin: '0 0 4px', color: 'var(--ink)' } }, hd),
              h('p', { style: { ...body, fontSize: 15 } }, d)))))));
    const quote = h('section', { style: { ...sec, paddingTop: 0 } },
      h('div', { className: 'mr-reveal', style: { maxWidth: 760 } },
        h(H2, { style: { fontSize: 'clamp(26px,3.4vw,36px)', margin: '0 0 22px' } }, t.quoteTitle),
        h('blockquote', { style: { margin: 0, paddingInlineStart: 22, borderInlineStart: '3px solid var(--berry)' } },
          h('p', { style: { fontFamily: 'var(--font-accent)', fontSize: 'clamp(19px,2.4vw,24px)', fontWeight: 500, lineHeight: 1.6, color: 'var(--ink)', margin: '0 0 14px' } }, '"' + t.quote + '"'),
          h('p', { style: { fontSize: 15, color: 'var(--ink-5)', margin: 0 } }, t.quoteBy))));
    const faq = h('section', { id: 'faq', style: { ...sec } },
      h('div', { style: twoCol },
        h('div', { style: { position: 'sticky', top: 110 } }, h(Eb, { ar }, t.faqEyebrow), h(H2, null, t.faqTitle)),
        h('div', { style: { borderTop: '1px solid var(--border-default)' } },
          t.faq.map(([q, a], i) => h('details', {
            key: q, className: 'tk-faq', open: i === 0,
            style: { borderBottom: '1px solid var(--border-default)', padding: '20px 0' }
          },
            h('summary', {
              style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, color: 'var(--ink)' }
            }, q, h('span', {
              className: 'tk-plus',
              style: { flex: 'none', width: 28, height: 28, borderRadius: '50%', border: '1.5px solid var(--border-button)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: 18, color: 'var(--berry)', transition: 'transform .2s ease' }
            }, '+')),
            h('p', { style: { ...body, fontSize: 16, marginTop: 12 } }, a))))));
    const contact = h('section', { id: 'contact', className: 'mr-reveal', style: { position: 'relative', zIndex: 1, padding: '0 var(--section-pad-x) clamp(64px,10vw,120px)' } },
      h(ContactPanel, {
        decorationSide: 'start',
        decoration: MRres('bushLine', 'assets/web/bush-line.png'),
        title: t.contactTitle,
        body: t.contactBody
      },
        h(Button, { variant: 'inverse', size: 'lg', href: 'https://wa.me/9647885514118', target: '_blank', rel: 'noopener noreferrer', iconLeft: h(WhatsAppIcon, null) }, t.wa),
        h(Button, { variant: 'outline-inverse', size: 'lg', href: 'mailto:info@mulberryandreed.com' }, 'info@mulberryandreed.com')));
    const footer = h('footer', { style: { position: 'relative', zIndex: 1, borderTop: '1px solid rgba(87,2,40,.25)', padding: '28px clamp(20px,5vw,64px)', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', maxWidth: 1100, margin: '0 auto', fontSize: 14, color: 'var(--ink-4)' } },
      h(Brand, { t, ar }),
      h('span', { style: { display: 'flex', flexWrap: 'wrap', gap: 20 } },
        h('a', { href: 'mailto:info@mulberryandreed.com', dir: 'ltr', style: { fontWeight: 600 } }, 'info@mulberryandreed.com'),
        h('a', { href: 'https://wa.me/9647885514118', target: '_blank', rel: 'noopener noreferrer', style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600 } }, h(WhatsAppIcon, { size: 16 }), 'WhatsApp')),
      h('span', null, h('bdi', null, '\xA9 2026 Mulberry & Reed.'), ' ', t.rights));
    return h('div', {
      dir: 'rtl', className: 'tk-ar tk-rtl',
      style: { minHeight: '100vh', position: 'relative', overflowX: 'clip', fontFamily: 'var(--font-sans)' }
    }, layer, h(Nav, { t, ar }), header, how, why, program, quote, faq, contact, footer);
  }
  window.TkApp = App;
})();
