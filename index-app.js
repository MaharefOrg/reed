function App() {
  const { Marquee, SiteFooter } = window.DS;
  const [layer, onPop] = useStains();
  const h = React.createElement;
  return h("div", { style: { minHeight: '100vh', position: 'relative', overflowX: 'clip' } },
    h("img", { src: MRres('inkWash', 'assets/illustrations/ink-wash.png'), alt: "", "aria-hidden": "true", style: { position: 'absolute', left: 0, top: '34%', width: '100%', zIndex: 0, pointerEvents: 'none' } }),
    layer,
    h("div", { style: { height: 28 } }),
    h(Nav, null),
    h(Hero, { onPop: onPop }),
    h("div", { style: { position: 'relative', zIndex: 3 } }, h(Marquee, { items: MR.services.map(s => s.name) })),
    h(WorkSection, null),
    h(PricingSection, null),
    h(AboutSection, null),
    h(ContactCTA, null),
    h("div", { style: { position: 'relative', zIndex: 1 } }, h(SiteFooter, null)));
}
function HomeRoot() {
  const [v, setV] = React.useState('en');
  React.useEffect(() => {
    document.documentElement.lang = v === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = v === 'ar' ? 'rtl' : 'ltr';
  }, [v]);
  React.useEffect(() => {
    const f = e => {
      const a = e.target.closest && e.target.closest('a[href="#tokki"],a[data-view="en"]');
      if (!a) return;
      e.preventDefault();
      setV(a.dataset.view === 'en' ? 'en' : 'ar');
      window.scrollTo(0, 0);
    };
    document.addEventListener('click', f);
    return () => document.removeEventListener('click', f);
  }, []);
  return v === 'ar' ? React.createElement(TkApp, null) : React.createElement(App, null);
}
if (!window.DS) { document.getElementById('root').textContent = 'Design bundle not loaded: _ds_bundle.js is missing or failed to load. Check that it sits beside index.html on the server.'; } else { ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(HomeRoot, null)); }
