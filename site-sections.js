function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WorkSection() {
  const {
    Eyebrow,
    ServiceCard
  } = window.DS;
  return React.createElement("section", {
    id: "work",
    style: {
      position: 'relative',
      background: 'var(--espresso)',
      color: 'var(--paper)',
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 3,
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, React.createElement(Eyebrow, {
    onDark: true
  }, "What we do"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(28px,4.5vw,52px)',
      letterSpacing: '-0.005em',
      lineHeight: 1.1,
      margin: '0 0 48px',
      maxWidth: '20em',
      color: 'var(--paper)'
    }
  }, "Everything a brand needs to be noticed, remembered and chosen."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 16
    }
  }, MR.services.map(s => React.createElement("div", {
    key: s.name,
    className: "mr-reveal"
  }, React.createElement(ServiceCard, s))))));
}
const twoCol = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
  gap: 'var(--column-gap)',
  alignItems: 'start'
};
const sec = {
  position: 'relative',
  zIndex: 1,
  padding: 'var(--section-pad-y) var(--section-pad-x)',
  maxWidth: 1100,
  margin: '0 auto',
  boxSizing: 'content-box'
};
const bp = {
  fontSize: 17,
  lineHeight: 1.65,
  color: 'var(--ink-2)',
  margin: '0 0 10px'
};
function PricingSection() {
  const {
    SectionIntro,
    PriceRow,
    Button
  } = window.DS;
  return React.createElement("section", {
    id: "pricing",
    style: sec
  }, React.createElement("div", {
    style: twoCol
  }, React.createElement(SectionIntro, {
    sticky: true,
    eyebrow: "Pricing",
    title: "What does it cost?",
    weight: 400
  }, React.createElement("p", {
    style: bp
  }, "We price work around what you actually need."), React.createElement("p", {
    style: bp
  }, "The cost depends on the service, the size of your business, how much work is involved and how much support you need from us."), React.createElement("p", {
    style: {
      ...bp,
      margin: '0 0 28px'
    }
  }, "Here is a guide so you know what to expect."), React.createElement(Button, {
    href: "#contact"
  }, "Book a free discovery call")), React.createElement("div", null, React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      margin: '0 0 44px'
    }
  }, MR.prices.map(p => React.createElement(PriceRow, _extends({
    key: p.name
  }, p)))), React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(21px,2.6vw,26px)',
      margin: '0 0 14px'
    }
  }, "Why isn't everything a fixed price?"), React.createElement("p", {
    style: {
      ...bp,
      fontSize: 16,
      margin: '0 0 12px'
    }
  }, "A website for a new business is different from a website for a company with hundreds of products. A research project for one market is different from research across five. The same applies to branding, campaigns, systems and apps."), React.createElement("p", {
    style: {
      ...bp,
      fontSize: 16,
      margin: '0 0 20px'
    }
  }, "So we give you a clear price before any paid work begins, based on what you need, the size of the business, the size of the project and the level of support involved."), React.createElement("p", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 'clamp(19px,2.3vw,23px)',
      fontWeight: 600,
      lineHeight: 1.35,
      margin: 0,
      maxWidth: '20em'
    }
  }, "No obligation starts with the discovery call."))));
}
function AboutSection() {
  const {
    SectionIntro
  } = window.DS;
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) {
        io.disconnect();
        const t0 = performance.now();
        const tk = t => {
          const p = Math.min(1, (t - t0) / 1400);
          setY(Math.round(32 * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tk);
        };
        requestAnimationFrame(tk);
      }
    }, {
      threshold: .5
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const p = {
    margin: '0 0 20px'
  };
  return React.createElement("section", {
    id: "about",
    style: sec
  }, React.createElement("div", {
    style: {
      ...twoCol,
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))'
    }
  }, React.createElement(SectionIntro, {
    sticky: true,
    eyebrow: "About",
    title: "People who make things work."
  }), React.createElement("div", {
    style: {
      fontSize: 'clamp(17px,1.9vw,20px)',
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, React.createElement("p", {
    style: p
  }, "We are a team of creatives, marketers and software engineers."), React.createElement("p", {
    style: p
  }, "Together, we have ", React.createElement("strong", {
    ref: ref,
    style: {
      color: 'var(--berry)'
    }
  }, y, "+ years"), " of experience."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We have worked on brands, websites, apps, campaigns, content, paid ads and growth."))));
}
Object.assign(window, {
  WorkSection,
  PricingSection,
  AboutSection
});
