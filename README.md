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
görünecek. DNS kayıtları doğru olduğunda **GitHub sertifikayı kendisi
üretir** — sertifika ayrıca satın alınmaz.

> GoDaddy'den alınan alan adlarında sertifikayı **GoDaddy** üretir (Let's
> Encrypt değil). Let's Encrypt kullanılan durumlarda süreç aynıdır: DNS
> doğrulamasından sonra GitHub otomatik yapar.
>
> **Süre:** DNS yayılımı + doğrulama + imzalama. Genelde dakikalar, bazen
> birkaç saat. Bu süre zarfında `http` istekleri `https`'e (308) yönlendirilir
> ama henüz sertifika gelmediği için tarayıcı uyarı gösterir. Normal.

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
| CNAME | `www` | `<kullanici-adiniz>.github.io` |

> Tek A kaydı yetmez — GitHub dört IP döndürür. Dördü de eklenmeli.

GitHub `http` → `https` yönlendirmesini (308) kendisi kapatır. Ek olarak GitHub'da
**Settings → Pages → Enforce HTTPS** açık olursa davranış aynı kalır; düğme
bazen sertifika üretildikten sonra görünür olur.

## Değiştirmek için

Metinleri `index.html` içinde düzenleyin, `git push` yapın. GitHub Pages
yeniden derlemeye gerek duymadan birkaç dakika içinde yeni sürümü gösterir.

## Yayındayken sayfayı kaldırmak

Bu depo GitHub'ın `main` dalından yayınlanır. İçeriği değiştirmek yerine
kaldırmak isterseniz `index.html` yerine boş bir dosya koyun veya
Settings → Pages'ten kaynağı kapatın — bu durumda GoDaddy'nin "Yakında
Sitesi" ayarına geri dönülür.