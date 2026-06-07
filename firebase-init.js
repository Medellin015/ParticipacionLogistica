  import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import {
    getFirestore, collection, getDocs, getDoc, doc, setDoc, addDoc, updateDoc, deleteDoc,
    query, where, orderBy, limit, onSnapshot,
    serverTimestamp, runTransaction, writeBatch
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  import {
    getAuth,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCustomToken,
    onAuthStateChanged, signOut, sendPasswordResetEmail
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCwXhbWRkl1mqrVNMahEVgszYgVpIgQ-iw",
    authDomain: "matriz-logistica-37752.firebaseapp.com",
    projectId: "matriz-logistica-37752",
    storageBucket: "matriz-logistica-37752.firebasestorage.app",
    messagingSenderId: "390366592137",
    appId: "1:390366592137:web:735ef7d16ca1318c7cda58",
    measurementId: "G-749SP593N4"
  };

  // Indicador visual del estado de conexión en la pantalla de login
  function mostrarEstado(ok, mensaje) {
    const insertar = () => {
      const tag = document.querySelector('.login-demo-tag');
      if (!tag || document.getElementById('fbStatusBanner')) return;
      const banner = document.createElement('div');
      banner.id = 'fbStatusBanner';
      const color = ok ? '#2d6a4f' : '#9a2a2a';
      const bg    = ok ? '#e1efe6' : '#f4dede';
      banner.style.cssText = `margin-top:8px;padding:10px 12px;background:${bg};border-left:3px solid ${color};border-radius:4px;font-size:12px;color:${color};font-weight:500;line-height:1.4;`;
      banner.innerHTML = (ok
        ? `● Firebase conectado · <span style="font-family:'IBM Plex Mono',monospace;font-weight:600;">${firebaseConfig.projectId}</span>`
        : `● Error de conexión a Firebase<br><span style="font-weight:400;opacity:0.85;">${String(mensaje).replace(/</g,'&lt;')}</span>`);
      tag.parentNode.insertBefore(banner, tag.nextSibling);
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', insertar);
    } else {
      insertar();
    }
  }

  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    // Exponer instancias y helpers para que el resto del script (no-module) pueda usarlos cuando se conecten las pantallas
    window.fb = {
      app, db, auth, config: firebaseConfig, ready: true,
      // Firestore helpers
      collection, getDocs, getDoc, doc, setDoc, addDoc, updateDoc, deleteDoc,
      query, where, orderBy, limit, onSnapshot,
      serverTimestamp, runTransaction, writeBatch,
      // Auth helpers
      signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithCustomToken,
      onAuthStateChanged, signOut, sendPasswordResetEmail
    };

    console.info('✓ Firebase inicializado · proyecto', firebaseConfig.projectId);
    mostrarEstado(true);
    document.dispatchEvent(new CustomEvent('firebase-ready'));
  } catch (err) {
    console.error('✗ Error inicializando Firebase:', err);
    window.fb = { ready: false, error: err };
    mostrarEstado(false, err.message);
  }
