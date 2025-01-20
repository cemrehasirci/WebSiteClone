import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
import { defineNuxtPlugin, type NuxtApp } from 'nuxt/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
    // Firebase Config için tür tanımlaması
    const firebaseConfig: Record<string, string> = {
        apiKey: "AIzaSyAgvjEGElZIXSYu19IaFzNwneryYMhcPkg" as string,
        authDomain: "web-final-ac544.firebaseapp.com" as string,
        projectId: "web-final-ac544" as string,
        storageBucket: "web-final-ac544.firebasestorage.app" as string,
        messagingSenderId: "658759875004" as string,
        appId: "1:658759875004:web:1fab2bccd0014c511e53b9" as string,
        measurementId: "G-SLGG6XC7KW"as string
    };


    // Firebase Uygulamasını Başlat
    const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);


    // const analytics = getAnalytics(firebaseApp);

    // Auth modülünü başlat
    const auth: Auth = getAuth(firebaseApp);


    return {
        provide: {
            firebase: firebaseApp,
            auth,
        },
    };

});