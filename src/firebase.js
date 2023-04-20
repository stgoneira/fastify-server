/* CONFIGURACION FIREBASE */
const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyDA9Tcf4Njksua5uqIsoFKNRpDwf5SLuuw",
  authDomain: "prueba-frontend-2023.firebaseapp.com",
  projectId: "prueba-frontend-2023",
  storageBucket: "prueba-frontend-2023.appspot.com",
  messagingSenderId: "853838147071",
  appId: "1:853838147071:web:cd97f553fc3f39d0358bca",
  measurementId: "G-RHZZDY355W"
};
const app = initializeApp(firebaseConfig);

/* CONFIGURACION FIREBASE-ADMIN */
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "prueba-frontend-2023.appspot.com"
});

/* EXPORTAR */
module.exports = {
    app,
    admin
};