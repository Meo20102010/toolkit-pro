const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'try',
            product_data: {
              name: 'ToolKit Pro — Aylık Plan',
              description: 'CV, Fatura, QR Kod ve Sosyal Medya Görseli — Sınırsız Kullanım',
              images: [],
            },
            unit_amount: 29900, // 299 TL (kuruş cinsinden)
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin || 'http://localhost:3000'}/success.html?success=1`,
      cancel_url: `${req.headers.origin || 'http://localhost:3000'}/index.html`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
};
