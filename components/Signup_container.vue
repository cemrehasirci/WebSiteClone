<template>
    <div class="stitle">
        <h2>Üye Girişi</h2>
        <div class="stitleright">
            <a href="#" class="login-link">Zaten üye misiniz?</a>
            <button @click="redirectToLogin" class="login-button">Giriş Yap</button>     
        </div>
    </div>
    
    <div class="signup-container">

        <div class="signup-box">
            
            
            <form @submit.prevent="SignupUser">

                
                <div class="form-group">
                    <label for="name">Ad* :</label>
                    <input type="text" id="name" name="name" required>
                </div>
      
                <div class="form-group">
                    <label for="surname">Soyad* :</label>
                    <input type="text" id="surname" name="surname" required>
                </div>
    
                <div class="form-group">
                    <label for="country">Ülke* :</label>
                    <select id="country" name="country" required>
                        <option value="Türkiye">Türkiye</option>
                        <!-- Diğer ülkeler buraya eklenebilir -->
                    </select>
                </div>
    
                <div class="form-group">
                    <label for="city">Şehir* :</label>
                    <select id="city" name="city" required>
                        <option value="">İl Seçin</option>
                        <option value="">Yalova</option>
                        <option value="">İstanbul</option>
                        <!-- Şehir seçenekleri buraya eklenebilir -->
                    </select>
                </div>
    
                <div class="form-group">
                    <label for="email">E-posta :</label>
                    <input type="email" id="email" name="email" v-model="email" required>
                </div>
    
                <div class="form-group">
                    <label for="password">Şifre* :</label>
                    <input type="password" id="password" name="password" v-model="password" required>
                </div>
    
                <div class="form-group">
                    <label for="password-repeat">Şifre (Tekrar)* :</label>
                    <input type="password" id="password-repeat" name="password-repeat" v-model="passwordRepeat" required>
                </div>
    
                <div class="form-group radio-group">
                    <span>Kampanya, duyuru e-postası almak istiyorum:</span>
                    <label><input type="radio" name="campaign" value="Evet"> Evet</label>
                    <label><input type="radio" name="campaign" value="Hayır" checked> Hayır</label>
                </div>
    
                <div class="form-group">
                    <label style="color: blue; font-size: 13px;">
                        <input type="checkbox" name="terms" required> Kullanıcı Sözleşmesini Kabul Ediyorum
                    </label>
                </div>
  
                <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

                <button type="submit" class="login-button">Gönder</button>
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

            </form>
        </div>


    <div class="info-box">
        <div class="register-box">
          <p>Üyelik Avantajları;</p>
          <ul>
            <li>Satın almak istediğiniz ürünleri güvenli ticaret döngüsüyle rahatlıkla sipariş edebilirsiniz.</li>
            <li>Ürünlerle ilgili satıcılara mesaj göndererek bilgi alabilirsiniz.</li>
            <li>Beğendiğiniz ürünleri izlediklerinize ekleyerek daha sonra incelemek ya da sipariş etmek üzere saklayabilirsiniz.</li>
            <li>İlginizi çeken kategorileri ve satıcıları favorilerinize ekleyebilir, favori kelimeler oluşturabilirsiniz. Favorilerinizle ilgili ürünler siteye eklendiğinde bilgi maili alabilirsiniz.</li>
          </ul>
        </div>
    </div>
  

    </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
    name: "SignupUser",
    setup() {
        // Router'ı al
        const router = useRouter();
        const name = ref<string>(""); // Kullanıcıdan alınan ad
        const surname = ref<string>(""); // Kullanıcıdan alınan soyad
        const country = ref<string>(""); // Kullanıcıdan alınan telefon numarası
        const city = ref<string>(""); // Kullanıcıdan alınan cinsiyet
        const email = ref<string>(""); // Kullanıcıdan alınan e-posta
        const password = ref<string>(""); // Kullanıcıdan alınan şifre
        const passwordRepeat = ref<string>(""); // Şifre tekrarı için ekleme
        const passwordVisible = ref<boolean>(false); // Şifre görünür/gizli
        const errorMessage = ref<string | null>(null); // Hata mesajı
        const successMessage = ref<string | null>(null); // Başarı mesajı
    
    // Yönlendirme fonksiyonu
    const redirectToLogin = () => {
      router.push("/login"); // "/login" rotasına yönlendirme
    };

    // Şifre görünürlüğünü değiştirme
    const togglePasswordVisibility = () => {
        passwordVisible.value = !passwordVisible.value;
    };

    // Firebase ile kullanıcıyı kaydetme
    const SignupUser = async () => {
      errorMessage.value = null;
      successMessage.value = null;

      // Şifrelerin eşleşip eşleşmediğini kontrol et
        if (password.value !== passwordRepeat.value) {
            errorMessage.value = "Şifreler eşleşmiyor!";
            return;
        }

      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        successMessage.value = "Başarıyla kayıt oldunuz!";
        name.value = "";
        surname.value = "";
        country.value = "";
        city.value = "";
        email.value = "";
        password.value = "";
        passwordRepeat.value = "";
      } catch (error: any) {
        errorMessage.value = error.message || "Bir hata oluştu!";
      }
    };

    return {
      name,
      surname,
      country,
      city,
      email,
      password,
      passwordRepeat,
      passwordVisible,
      togglePasswordVisibility,
      SignupUser,
      redirectToLogin,
      errorMessage,
      successMessage,
    };
  },
});



</script>
  
<style scoped>

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 10px;
}


.stitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.stitleright {
    display: flex;
    gap: 10px;
    margin-left: auto; /* Sağ tarafa hizalama */
    align-items: center;
}
.stitleright a {
    text-decoration: none;
    color: #931818;
    font-size: 14px;
}

.stitleright button {
    background-color: #931818;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
}


.signup-container {
    display: flex;
    gap: 40px;
    margin: 20px 0px;
    padding: 20px 20px;
    border: 1px solid #eee4cd;
    background-color: #fff;
    height: 950px;
    }

    .signup-box {
        flex: 1;
        max-width: 40%;
    }
  
    .info-box {
        display: flex;
        width: 60%;
        margin-left: auto;
        flex-direction: column; 
        justify-content: flex-start;
    }

    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      width: 100%;
      padding: 10px;
      border: 1px #ccc;
      border-radius: 5px;
    }
    
    select,
    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 300px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
  
    .login-button,
    .register-button {
        background-color: #931818;
        color: white;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 20px;
    }
    
    .login-button:hover,
    .register-button:hover {
        background-color: #b22222;
    }
    
    .register-box {
        margin-bottom: 20px;
    }
    
    .register-box ul {
      list-style-type: disc;
      padding-left: 20px;
    }
    
    .register-box li {
        margin-bottom: 10px;
        font-size: 14px;
        color: rgb(93, 96, 96);
    }


</style>
  