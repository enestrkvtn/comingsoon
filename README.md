# Yayınlanmış statik site - kaynak dosyası değil.
# indiecore.online

`indiecore.online` adresinde gösterilen "Yakında" sayfası.

Bağımlılık yok, derleme yok. GitHub Pages dosyaları doğrudan sunar.

## Dosyalar

| Dosya | Ne yapar |
|---|---|
| `index.html` | Tek sayfa |
| `style.css` | Tasarım (renkler ana uygulamadan alındı) |
| `theme.js` | Açık/koyu tema düğmesi (`prefers-color-scheme` varsayılan) |
| `favicon.svg` | Logo (ana uygulamayla aynı) |
| `CNAME` | Özel alan adı — GitHub Pages bunu okuyarak `indiecore.online`'ı buraya yönlendirir |

## Alan adını bağlama

`CNAME` dosyası sayesinde Settings → Pages bölümünde alan adı "indiecore.online"
görünecek. DNS kayıtları doğru olduğunda **sertifikayı GitHub kendisi üretir** —
registrar kim olursa olsun (GoDaddy dahil) bu değişmez, sertifika ayrıca satın
alınmaz.

> **Sertifika:** Let's Encrypt tarafından imzalanır. Konu `CN=indiecore.online`;
> SAN alanları `indiecore.online` ve `www.indiecore.online`. Geçerlilik 90 gün,
> GitHub kendisi yeniler.
>
> **Süre:** DNS yayılımı + doğrulama + imzalama. Genelde dakikalar, bazen birkaç
> saat. `www` için sertifika ayrıca üretilir ve o aralıkta
> `www.indiecore.online` tarayıcıda uyarı gösterir; `indiecore.online` bu
> sırada sorunsuz açılır.

DNS'in GoDaddy'de şu kayıtlara sahip olması gerekir:

**Kök alan adı** (`indiecore.online`) — dört A kaydı:

| Tip | Ad | Değer |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**www:**

| Tip | Ad | Değer |
|---|---|---|
| CNAME | `www` | `enestrkvtn.github.io` |

> Tek A kaydı yetmez — GitHub dört IP döndürür. Dördü de eklenmeli.

GitHub'da **Settings → Pages → Enforce HTTPS** açık olmalı. Bu ayar, `http`
isteklerini `https`'e (301) yönlendirir; kapalıyken site düz metin olarak da
sunulur ve istemci tarafından güvenliğe zorlanmaz. Düğme, sertifika üretildikten
sonra tıklanabilir hâle gelir.

> Alan adı doğrulaması sürerken kutunun pasif görünmesi normaldir; DNS
> kontrolü bitince (yeşil tik) etkinleşir.

## Alan adı gizliliği ve DNSSEC

**Whois:** `.online` bir gTLD olduğu için ICANN Geçici Şartnamesi gereği kişisel
iletişim bilgileri (ad, adres, telefon, e-posta) WHOIS/RDAP yanıtlarından
**çıkarılır**. Yani `whois indiecore.online` sorgusu adın, adresin veya telefonun
numarasını göstermez; yalnızca registrar (GoDaddy), oluşturma/bitiş tarihi ve
durum kodları görünür.

**DNSSEC:** şu anda **kapalı** (WHOIS'te `DNSSEC: unsigned`, parent sunucusunda DS
kaydı yok). DNS'in DNSSEC ile imzalanması, sahte sunucu kayıtlarının
(cache poisoning) ziyaretçilere iletilmesini engeller. GoDaddy panelinde
*Domain Management → DNS* bölümünde DNSSEC için DS kaydı alınabilir; desteklenen
TLD'ler listesinde `.online` varsa ücretsiz açılabilir.

Açıldıktan sonra DS kaydının kayıt sunucusuna (`.online`) yayılması **1–24 saat**
sürebilir. Doğrulama:

```
whois indiecore.online | findstr /i DNSSEC
```

`unsigned` yerine `signed` yazıyorsa DNSSEC aktif demektir.

## Değiştirmek için

Metinleri `index.html` içinde düzenleyin, `git push` yapın. GitHub Pages
yeniden derlemeye gerek duymadan birkaç dakika içinde yeni sürümü gösterir.

## Yayındayken sayfayı kaldırmak

Bu depo GitHub'ın `main` dalından yayınlanır. İçeriği değiştirmek yerine
kaldırmak isterseniz `index.html` yerine boş bir dosya koyun veya
Settings → Pages'ten kaynağı kapatın — bu durumda GoDaddy'nin "Yakında
Sitesi" ayarına geri dönülür.