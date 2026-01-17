# Company Website - React & Express.js Projesi

Bu proje, React frontend ve Express.js backend kullanılarak geliştirilmiş modern bir şirket web sitesidir. Uzun scroll sayfa tasarımı ile şirket bilgileri, takım üyeleri ve iş ilanları gösterilir.

## 🚀 Teknolojiler

- **Frontend**: React 18.2.0
- **Backend**: Express.js 4.18.2
- **Stil**: Plain CSS (kütüphane kullanılmamıştır)

## 📋 Proje Yapısı

```
Qvin_cursor/
├── backend/          # Express.js backend API
│   ├── server.js     # API endpoint'leri
│   └── package.json  # Backend bağımlılıkları
├── frontend/         # React frontend uygulaması
│   ├── src/
│   │   ├── components/  # React bileşenleri
│   │   ├── App.js       # Ana uygulama bileşeni
│   │   └── index.js     # Giriş noktası
│   └── package.json     # Frontend bağımlılıkları
└── README.md
```

## 📦 Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın veya indirin:**

   ```bash
   git clone <repository-url>
   cd Qvin_cursor
   ```

2. **Backend bağımlılıklarını yükleyin:**

   ```bash
   cd backend
   npm install
   ```

3. **Frontend bağımlılıklarını yükleyin:**
   ```bash
   cd ../frontend
   npm install
   ```

## 🏃 Projeyi Çalıştırma

### Backend Sunucusunu Başlatma

Terminal'de backend klasörüne gidin ve sunucuyu başlatın:

```bash
cd backend
npm start
```

Backend sunucusu `http://localhost:3001` portunda çalışacaktır.

### Frontend Uygulamasını Başlatma

Yeni bir terminal penceresi açın ve frontend klasörüne gidin:

```bash
cd frontend
npm start
```

Frontend uygulaması `http://localhost:3000` adresinde açılacaktır. Tarayıcı otomatik olarak açılacaktır.

**Not:** Her iki sunucunun da aynı anda çalışması gerekmektedir.

## 🔌 API Endpoint'leri

### 1. GET `/team_members`

Takım üyelerini listeler.

**Response:**

```json
[
  {
    "id": 1,
    "name": "Ahmet Yılmaz",
    "title": "Senior Software Engineer",
    "picture": "https://i.pravatar.cc/150?img=1"
  }
]
```

### 2. GET `/jobs`

İş ilanlarını listeler.

**Response:**

```json
[
  {
    "id": 1,
    "title": "Senior Frontend Developer",
    "url": "https://company.com/jobs/senior-frontend"
  }
]
```

### 3. POST `/job/:id`

İş başvurusu gönderir.

**Request Body:**

```json
{
  "name": "İsim Soyisim",
  "email": "email@example.com",
  "linkedinUrl": "https://linkedin.com/in/profil"
}
```

**Success Response (200):**

```json
{
  "message": "Başvuru başarıyla gönderildi",
  "jobTitle": "Senior Frontend Developer",
  "candidate": {
    "name": "İsim Soyisim",
    "email": "email@example.com",
    "linkedinUrl": "https://linkedin.com/in/profil"
  }
}
```

**Error Response (400):**

```json
{
  "error": "Hata mesajı"
}
```

### 4. GET `/health`

Backend sağlık kontrolü.

**Response:**

```json
{
  "status": "OK"
}
```

## 🎨 Özellikler

- **Responsive Tasarım**: Tüm ekran boyutlarında uyumlu çalışır
- **Smooth Scroll**: Navigasyon menüsünden bölümler arası geçiş
- **Dynamic Content**: API'den gelen verilerle dinamik içerik
- **Job Application Form**: Sidebar içinde iş başvurusu formu
- **Form Validation**: Email ve LinkedIn URL validasyonu

## 📄 Sayfa Bölümleri

1. **About (Hakkımızda)**: Şirket hakkında bilgiler
2. **Values (Değerlerimiz)**: Şirket değerleri (3 sütun grid)
3. **Team Members (Ekibimiz)**: API'den gelen takım üyeleri
4. **Jobs (İş İlanları)**: API'den gelen iş ilanları (tıklanınca sidebar açılır)
5. **Mission (Misyonumuz)**: Şirket misyonu

## 🛠️ Geliştirme

### Backend Geliştirme Modu

Backend için nodemon kullanabilirsiniz (otomatik yeniden başlatma):

```bash
cd backend
npm run dev
```

### Frontend Build

Production build oluşturmak için:

```bash
cd frontend
npm run build
```

Build dosyaları `frontend/build/` klasörüne oluşturulacaktır.

## 🔧 Yapılandırma

### Backend Port

Backend portu environment variable ile değiştirilebilir:

```bash
PORT=3002 npm start
```

Varsayılan port: `3001`

### Frontend API URL

Frontend'de API URL'i environment variable ile değiştirilebilir:

`.env` dosyası oluşturun:

```
REACT_APP_API_URL=http://localhost:3001
```

## 📝 Notlar

- Backend mock data kullanmaktadır (veritabanı yoktur)
- Frontend ve backend ayrı portlarda çalışmaktadır
- CORS backend'de aktif olarak yapılandırılmıştır
- Tüm stiller plain CSS ile yazılmıştır (kütüphane kullanılmamıştır)

## 🐛 Bilinen Sorunlar

- React Scripts 5.0.1'de "checkout popup config" hatası görülebilir. Bu hata zararsızdır ve uygulamanın çalışmasını etkilemez.

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👤 Yazar

Proje geliştirici tarafından oluşturulmuştur.

---

**Sorun mu yaşıyorsunuz?** İssue açarak bildirebilirsiniz.
