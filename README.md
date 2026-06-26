# ToolKit Pro — Kurulum Rehberi

## Klasör Yapısı
```
toolkit-pro/
├── index.html           ← Ana uygulama
├── success.html         ← Ödeme sonrası sayfa
├── api/
│   └── create-checkout.js  ← Stripe API (Serverless Function)
├── package.json
├── vercel.json
└── README.md
```

---

## ADIM 1: Stripe Kurulumu

1. stripe.com'a git → Hesap aç
2. Dashboard → Developers → API Keys
3. **Secret Key**'i kopyala (`sk_test_...` veya `sk_live_...`)

---

## ADIM 2: GitHub'a Yükle

1. github.com → "New repository" → "toolkit-pro" → Create
2. Terminal:
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
3. **Environment Variables** ekle:
   - Key: `STRIPE_SECRET_KEY`
   - Value: `sk_test_...` (Stripe Secret Key)
   - Environments: **Production, Preview, Development** (hepsini işaretle)
4. "Deploy" → 2 dk bekle → Canlı! 🎉

---

## ADIM 4: Fiyat Değiştirmek (İsteğe Bağlı)

`api/create-checkout.js`:
- `unit_amount: 29900` → 299 TL (kuruş cinsinden)
- `currency: 'try'` → Türk Lirası

---

## Freemium Sistemi

- 3 ücretsiz indirme/kullanım
- Sonrası paywall açılır
- Ödeme sonrası "Pro" aktif (localStorage)

---

## Test Kartı (Stripe Test Modu)

```
4242 4242 4242 4242
12/34 (gelecek tarih)
123 (CVC)
12345 (ZIP)
```

---

## Sorun Giderme

- **API 404 verirse**: Vercel Dashboard → Functions → `create-checkout` var mı?
- **JSON parse hatası**: Functions loglarını kontrol et
- **Ödeme çalışmıyor**: STRIPE_SECRET_KEY doğru mu? (sk_test_ ile başlar)
```