# 📬 Node Contact API

Bu proje, basit bir iletişim formu üzerinden gelen mesajları Node.js (Express) ve Nodemailer kullanarak Gmail hesabınıza göndermenizi sağlar.

## 🚀 Özellikler

- 📩 Kullanıcıdan ad, e-posta ve mesaj bilgisi alır
- 📬 Nodemailer ile Gmail üzerinden e-posta gönderimi yapar
- 🔐 Çevre değişkenleri (environment variables) ile güvenli yapılandırma
- 🔄 JSON formatında başarılı veya hatalı yanıtlar döner

---

## 🛠️ Kurulum

### 1. Projeyi klonlayın
 ```
git clone https://github.com/kullanici-adi/node-contact-api.git
cd node-contact-api
```

2. Gerekli bağımlılıkları yükleyin 
```
npm install
```
### 3. .env dosyasını oluşturun
Aşağıdaki gibi bir .env dosyası oluşturun ve kendi Gmail hesabınızın bilgilerini girin:
```
EMAIL_USER=ornek@gmail.com
EMAIL_PASS=uygulama-sifresi
```
Not: Gmail artık doğrudan şifre ile girişe izin vermez. “Uygulama şifresi” oluşturmalısınız. Detaylı bilgi

### 4. Sunucuyu başlatın
```node index.js```

veya nodemon yüklüyse:
```nodemon index.js```

##🔌 API Kullanımı
İstek:
```
POST http://localhost:3000/contact
Content-Type: application/json

{
  "name": "Ali Veli",
  "email": "ali@example.com",
  "message": "Merhaba! Size bir mesajım var."
}
```
Yanıt:
```
{
  "message": "Mesaj başarıyla gönderildi!"
}
```
## 🧪 Test Etme
İstersen Postman ile test edebilirsin:

Endpoint: http://localhost:3000/contact

Method: POST

Body: JSON formatında yukarıdaki gibi

## 🤝 Katkıda Bulun
PR’lar, öneriler ve katkılar memnuniyetle karşılanır.
İyi kodlamalar! 🚀
