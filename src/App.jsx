import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Shop from './components/Shop.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [page, setPage] = useState('home');
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const products = useMemo(() => ([
    {
      id: 'cg-01',
      name: 'Nocturne Reserva Cigar',
      price: 29.0,
      category: 'Cigars',
      flavors: ['Maduro', 'Habano', 'Connecticut'],
      image: 'https://images.unsplash.com/photo-1601821924561-8ee7078feb76?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb2N0dXJuZSUyMFJlc2VydmElMjBDaWdhcnxlbnwwfDB8fHwxNzYyMjgzMTQ5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      description: 'Hand-rolled long-filler cigar aged in oak for a velvety, complex finish. Presented in matte black and gold foil packaging.'
    },
    {
      id: 'pt-02',
      name: 'Estate Pipe Blend No. 7',
      price: 18.5,
      category: 'Pipe Tobacco',
      flavors: ['English', 'Virginia', 'Aromatic'],
      image: 'https://images.unsplash.com/photo-1560883123-04646fef95df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFc3RhdGUlMjBQaXBlJTIwQmxlbmQlMjBOby4lMjA3fGVufDB8MHx8fDE3NjIyODMxNTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      description: 'A refined mixture of matured Virginias and Orientals with subtle smokiness. Packed in a gold-embossed tin.'
    },
    {
      id: 'rt-03',
      name: 'Velour Fine Cut',
      price: 12.0,
      category: 'Rolling Tobacco',
      flavors: ['Classic', 'Smooth', 'Bold'],
      image: 'https://images.unsplash.com/photo-1613309644571-50404b1333e6?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyODMxNTF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      description: 'Silky fine-cut blend with balanced character. Hermetic pouch with luxe detailing.'
    },
    {
      id: 'ac-04',
      name: 'Gilded Torch Lighter',
      price: 45.0,
      category: 'Accessories',
      flavors: ['—'],
      image: 'https://images.unsplash.com/photo-1524394689709-6e984afa1461?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHaWxkZWQlMjBUb3JjaCUyMExpZ2h0ZXJ8ZW58MHwwfHx8MTc2MjI4MzE1Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      description: 'Windproof triple-jet torch lighter with tactile knurling and satin gold finish.'
    },
    {
      id: 'cg-05',
      name: 'Orion Double Corona',
      price: 24.0,
      category: 'Cigars',
      flavors: ['Habano', 'Sumatra'],
      image: 'https://images.unsplash.com/photo-1738443230249-f8019e3db80f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmlvbiUyMERvdWJsZSUyMENvcm9uYXxlbnwwfDB8fHwxNzYyMjgzMTUyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      description: 'Graceful body with notes of cedar and cacao. Individually sleeved in elegant tubes.'
    },
    {
      id: 'ac-06',
      name: 'Midnight Cutter',
      price: 28.0,
      category: 'Accessories',
      flavors: ['—'],
      image: 'https://images.unsplash.com/photo-1563112177-7928bbe40232?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWRuaWdodCUyMEN1dHRlcnxlbnwwfDB8fHwxNzYyMjgzMTUyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      description: 'Precision guillotine cutter in anodized black with micro-bevel steel.'
    }
  ]), []);

  const onViewProduct = (p) => {
    setSelected(p);
    setPage('product');
  };

  const addToCart = (p, qty = 1, flavor = null) => {
    setCart(prev => {
      const key = `${p.id}-${flavor ?? 'std'}`;
      const exists = prev.find(i => i.key === key);
      if (exists) {
        return prev.map(i => i.key === key ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { key, id: p.id, name: p.name, price: p.price, image: p.image, flavor, qty }];
    });
  };

  const updateQty = (key, qty) => {
    setCart(prev => prev.map(i => i.key === key ? { ...i, qty: Math.max(1, qty) } : i));
  };

  const removeItem = (key) => setCart(prev => prev.filter(i => i.key !== key));

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const HomePage = () => (
    <>
      <Hero onShop={() => setPage('shop')} />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title: 'Curated Quality', text: 'We partner with heritage houses and boutique makers for uncompromising standards.'},
            {title: 'Thoughtful Design', text: 'Understated packaging with luxe materials and gold accents, tailored for gifting.'},
            {title: 'Discreet Delivery', text: 'Secure, trackable, and carefully packaged shipments to your door.'}
          ].map((b) => (
            <div key={b.title} className="rounded-lg bg-gradient-to-b from-zinc-900 to-black p-6 border border-zinc-800 hover:border-yellow-600/40 transition">
              <div className="text-yellow-400 font-semibold">{b.title}</div>
              <p className="text-zinc-400 mt-2">{b.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const ProductDetail = () => {
    if (!selected) return null;
    const [flavor, setFlavor] = useState(selected.flavors?.[0] ?? null);
    const [qty, setQty] = useState(1);
    return (
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border border-zinc-800 bg-black">
            <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-yellow-400/90">Aurum Leaf Selection</p>
            <h2 className="text-3xl font-semibold text-zinc-100 mt-2">{selected.name}</h2>
            <p className="text-zinc-400 mt-3">{selected.description}</p>
            <div className="mt-6">
              <div className="text-yellow-400 text-2xl font-semibold">${selected.price.toFixed(2)}</div>
            </div>

            {selected.flavors && selected.flavors[0] !== '—' && (
              <div className="mt-6">
                <label className="block text-sm text-zinc-300 mb-2">Flavor</label>
                <div className="flex flex-wrap gap-2">
                  {selected.flavors.map(f => (
                    <button key={f} onClick={() => setFlavor(f)} className={`px-3 py-1.5 rounded-md border ${flavor === f ? 'border-yellow-500 text-yellow-300' : 'border-zinc-800 text-zinc-300 hover:border-yellow-600/40'} transition`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-3">
              <label className="text-sm text-zinc-300">Quantity</label>
              <input type="number" min={1} value={qty} onChange={e => setQty(parseInt(e.target.value || '1', 10))} className="w-20 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100" />
            </div>

            <div className="mt-8 flex gap-3">
              <button onClick={() => addToCart(selected, qty, flavor)} className="px-6 py-3 rounded-md bg-yellow-500 text-black font-semibold hover:brightness-110 transition">Add to Cart</button>
              <button onClick={() => setPage('cart')} className="px-6 py-3 rounded-md border border-zinc-800 text-zinc-200 hover:border-yellow-600/40 hover:text-yellow-300 transition">View Cart</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CartPage = () => (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold text-zinc-100 mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-zinc-400">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.key} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">{item.name}</div>
                  {item.flavor && <div className="text-xs text-zinc-400">Flavor: {item.flavor}</div>}
                  <div className="text-yellow-400 font-semibold mt-1">${item.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" min={1} value={item.qty} onChange={e => updateQty(item.key, parseInt(e.target.value || '1', 10))} className="w-20 px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100" />
                  <button onClick={() => removeItem(item.key)} className="px-3 py-2 rounded-md border border-zinc-800 text-zinc-300 hover:border-yellow-600/40 hover:text-yellow-300 transition">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 h-fit">
            <div className="flex items-center justify-between text-zinc-300">
              <span>Subtotal</span>
              <span className="text-yellow-400 font-semibold">${total.toFixed(2)}</span>
            </div>
            <button onClick={() => setPage('checkout')} className="mt-6 w-full px-4 py-3 rounded-md bg-yellow-500 text-black font-semibold hover:brightness-110 transition">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </section>
  );

  const CheckoutPage = () => {
    const [form, setForm] = useState({ name: '', address: '', city: '', state: '', zip: '', card: '', exp: '', cvv: '' });
    const onSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your purchase. Your order has been placed.');
      setCart([]);
      setPage('home');
    };
    return (
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-6">Checkout</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {k: 'name', label: 'Full Name'},
            {k: 'address', label: 'Address', span: true},
            {k: 'city', label: 'City'},
            {k: 'state', label: 'State/Region'},
            {k: 'zip', label: 'Postal Code'},
            {k: 'card', label: 'Card Number', span: true},
            {k: 'exp', label: 'Expiry (MM/YY)'},
            {k: 'cvv', label: 'CVV'}
          ].map(f => (
            <div key={f.k} className={f.span ? 'md:col-span-2' : ''}>
              <label className="block text-sm text-zinc-300 mb-1">{f.label}</label>
              <input
                required
                value={form[f.k]}
                onChange={e => setForm(prev => ({ ...prev, [f.k]: e.target.value }))}
                className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <button type="submit" className="w-full px-4 py-3 rounded-md bg-yellow-500 text-black font-semibold hover:brightness-110 transition">Place Order</button>
          </div>
        </form>
      </section>
    );
  };

  const AboutPage = () => (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-zinc-100">About Aurum Leaf</h2>
      <p className="text-zinc-400 mt-4">
        Aurum Leaf celebrates the art of slow living. Our collections spotlight premium tobacco products and accessories with
        a quiet luxury aesthetic. We source responsibly and emphasize packaging that feels as refined as what lies within.
      </p>
      <p className="text-zinc-400 mt-4">
        We avoid explicit smoking imagery in favor of elegant product presentation. Each release is limited and quality checked
        by expert curators to ensure a remarkable experience.
      </p>
    </section>
  );

  const ContactPage = () => {
    const [msg, setMsg] = useState({ name: '', email: '', message: '' });
    const submit = (e) => {
      e.preventDefault();
      alert('Message sent. We will get back to you shortly.');
      setMsg({ name: '', email: '', message: '' });
    };
    return (
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-100">Contact Us</h2>
          <p className="text-zinc-400 mt-2">Questions about our collection or your order? We are here to help.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Name</label>
              <input value={msg.name} onChange={e => setMsg(prev => ({...prev, name: e.target.value}))} className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100" required />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Email</label>
              <input type="email" value={msg.email} onChange={e => setMsg(prev => ({...prev, email: e.target.value}))} className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100" required />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Message</label>
              <textarea rows={5} value={msg.message} onChange={e => setMsg(prev => ({...prev, message: e.target.value}))} className="w-full px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-100" required />
            </div>
            <button className="px-5 py-2 rounded-md bg-yellow-500 text-black font-semibold hover:brightness-110 transition">Send</button>
          </form>
        </div>
        <div className="rounded-lg overflow-hidden border border-zinc-800 h-[350px]">
          <iframe
            title="Aurum Leaf Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.552597953599!2d-0.14626505787930364!3d51.513897593923584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052b2db7a31d%3A0x7a7a0f2c5b08d3b!2sNew%20Bond%20St%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black text-zinc-100">
      <Navbar onNavigate={(p) => setPage(p)} cartCount={cart.reduce((s, i) => s + i.qty, 0)} />

      {page === 'home' && <HomePage />}
      {page === 'shop' && (
        <Shop
          products={products}
          onAdd={addToCart}
          onView={onViewProduct}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
        />
      )}
      {page === 'product' && <ProductDetail />}
      {page === 'cart' && <CartPage />}
      {page === 'checkout' && <CheckoutPage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}

      <Footer />
    </div>
  );
}

export default App;
