// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// إعداد Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0jUmQQxMIpAZCVFBa4oq3HOJTrJh_w5A",
    authDomain: "umrahwebsite-f9671.firebaseapp.com",
    projectId: "umrahwebsite-f9671",
    storageBucket: "umrahwebsite-f9671.firebasestorage.app",
    messagingSenderId: "744455640371",
    appId: "1:744455640371:web:b2527bcd51187e91ac5a46",
    measurementId: "G-5S9S9XMNXY"
  };

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// إرسال التهنئة إلى Firestore
window.submitMessage = async function() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText === "") {
        alert("متسيبوش الرسالة فاضية");
        return;
    }

    try {
        await addDoc(collection(db, "birthdayMessages"), {
            message: messageText,
            timestamp: new Date()
        });
        document.getElementById("statusMessage").innerText = "تمام اتبعتت الرسالة!";
        messageInput.value = "";
    } catch (error) {
        console.error("خطأ:", error);
        document.getElementById("statusMessage").innerText = "جرب تاني";
    }
};
