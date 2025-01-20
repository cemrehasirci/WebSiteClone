<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="footer-brand">
        <!--<img src="/images/footer/nadir_logo.svg" alt="Logo" />-->
        <h2>Nadir Kitap</h2>
      </div>
      <div class="footer-columns">
        <div class="footer-column">
          <ul>
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#">Bana Özel</a></li>
            <li><a href="#">Yardım</a></li>
          </ul>
          <hr class="footer-divider" />
          <div class="app-links">
            <div class="app-link">
              <a href="#"><img src="/images/footer/App-Store.png" alt="Apple Logo" /></a>
            </div>
            <div class="app-link">
              <a href="#"><img src="/images/footer/google_Play.png" alt="Google Play Logo" /></a>
            </div>
            <div class="app-link">
              <a href="#"><img src="/images/footer/App_Gallery.png" alt="Huawei Logo" /></a>
            </div>
          </div>
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Kategoriler</a></li>
            <li><a href="#">Sahaflar</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <hr class="footer-divider" />
          
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Detaylı Arama</a></li>
            <li><a href="#">Site Haritası</a></li>
          </ul>
          <hr class="footer-divider" />
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Kullanıcı Sözleşmesi</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
            <li><a href="#">Bize Ulaşın</a></li>
          </ul>
          <hr class="footer-divider" />
          <div class="social-links">
              <span>🌍 EN</span>    
              <div class="social-icons">
                  <a href="#"><img src="/images/footer/x.png" alt="Twitter Logo" /></a>
                  <a href="#"><img src="/images/footer/insta.png" alt="Instagram Logo" /></a>
                  <a href="#"><img src="/images/footer/face.png" alt="Facebook Logo" /></a>
              </div>
            <div class="small-image">
              <img src="/images/footer/footer_logo_troy.png" alt="Küçük Görsel" />
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-additional-text">
        <p>Copyright 2007-2024 Nadirkitap Bilişim ve Reklamcılık A.Ş. Tüm Hakları Saklıdır.</p>
        <p>Bu siteye üye olanlar Kullanıcı Sözleşmesini okumuş ve kabul etmiş sayılırlar.</p>
        <p>Bilgilendirme! Çerezler NadirKitap.com deneyiminizi iyileştirmek için kullanılmaktadır.</p>
      </div>
    </div>
  </footer>
</template>
  
<script>
  export default {
    name: "Footer",
  };
</script>

<style scoped>

.footer {
  margin-top: 30px;
  background-color: #981515;
  color: white;
  padding-top: 30px;
  padding-bottom: 70px;
}
.footer_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-brand {
  margin-bottom: 20px;
  text-align: center;
}
.footer-columns {
  display: flex;
  justify-content: center;
  width: 100%;
}
.footer-column {
  flex: 1;
  padding: 0 10px;
  text-align: center;
}
.footer-column ul {
  list-style: none;
  padding: 0;
}
.footer-column ul li {
  margin-bottom: 10px;
}
.footer-column ul li a {
  text-decoration: none;
  color: white;
}
.app-links {
  margin-top: 30px;
margin-left: 20px;
}
.app-link {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 50px;
}
.app-link img {
  width: 120px;
  height: 40px;
  margin-right: 0px;
}
.footer-text {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
}
.social-links {
  margin-top: 20px;
}
.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.social-icons a {
  margin: 0 5px;
}
.social-icons img {
  width: 24px;
  height: 24px;
}
.small-image {
  margin-top: 10px;
}
.small-image img {
  width: 150px;
  height: 90px;
}
.footer-divider {
  width: 100%;
  border: 1px solid white;
  margin-top: 20px;
}
.footer-additional-text {
  margin-top: -100px;
  width: 80%; 
  text-align: center;
  font-size: 10px;
}
</style>