# ToolKit Pro — Kurulum Rehberi

## Klasör Yapısı
```
toolkit-pro/
├── public/
│   ├── index.html      ← Ana uygulama
│   └── success.html    ← Ödeme sonrası sayfa
├── api/
│   └── create-checkout.js  ← Stripe API
├── package.json
├── vercel.json
└── README.md
```

---

## ADIM 1: Stripe Kurulumu

1. stripe.com'a git → Hesap aç
2. Dashboard → Developers → API Keys
3. **Publishable Key** ve **Secret Key**'i kopyala

---

## ADIM 2: GitHub'a Yükle

1. github.com → "New repository" → "toolkit-pro" → Create
2. Bilgisayarında terminal aç ve şunları çalıştır:

```bash
cd toolkit-pro
git init
git add .
git commit -m "İlk versiyon"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/toolkit-pro.git
git push -u origin main
```

---

## ADIM 3: Vercel'e Deploy Et

1. vercel.com → GitHub ile giriş yap
2. "New Project" → GitHub reposunu seç → Import
3. **Environment Variables** bölümüne ekle:
   - Key: `STRIPE_SECRET_KEY`
   - Value: `sk_live_...` (Stripe'dan kopyaladığın secret key)
4. "Deploy" tıkla → 2 dakika bekle → Siteniz hazır! 🎉

---

## ADIM 4: Stripe'da Fiyatı Ayarla (İsteğe Bağlı)

`api/create-checkout.js` dosyasında fiyatı değiştirebilirsin:
- `unit_amount: 29900` → 299 TL (kuruş cinsinden yazılır)
- `currency: 'try'` → Türk Lirası

---

## Freemium Sistemi

- Kullanıcılar **3 ücretsiz indirme** hakkına sahip
- Sonrasında ödeme ekranı açılır
- Ödeme sonrası "Pro" etiketi aktif olur

---

## Destek

Sorun yaşarsan, tüm kodu Claude'a yapıştır ve "hata var" de!
