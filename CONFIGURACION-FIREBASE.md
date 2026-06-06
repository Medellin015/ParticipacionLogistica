# Configuración de Firebase — ParticipacionLogistica

Proyecto Firebase: **`matriz-logistica-37752`**
App pública: https://medellin015.github.io/ParticipacionLogistica/

---

## Diagnóstico (06/06/2026)

Se verificó el backend contra la API de Firestore y el resultado fue:

| Prueba                                   | Resultado                          |
| ---------------------------------------- | ---------------------------------- |
| Lectura anónima a `requerimientos`       | ❌ `403 PERMISSION_DENIED`         |
| Escritura anónima a `requerimientos`     | ❌ `403 PERMISSION_DENIED`         |
| Autenticación anónima habilitada         | ❌ `CONFIGURATION_NOT_FOUND`       |

**La base de datos NO estaba lista para pruebas.** La app todavía no hace
login real contra Firebase Auth (la pantalla de inicio solo elige un rol de
forma local), así que **todas las llamadas a Firestore salen sin usuario
autenticado**. Con las reglas bloqueadas que tiene el proyecto, al entrar con
cualquier rol la carga falla con *"Missing or insufficient permissions"* y no
se puede crear ni guardar nada.

Para poder probar **ya, sin contraseñas**, hay que abrir temporalmente las
reglas de Firestore. Este repo incluye las reglas listas en
[`firestore.rules`](./firestore.rules).

---

## Cómo habilitar las pruebas (elige UNA opción)

### Opción A — Pegar las reglas en la consola (más rápido, sin instalar nada)

1. Entra a la consola: https://console.firebase.google.com/project/matriz-logistica-37752/firestore/rules
2. Borra el contenido del editor de reglas.
3. Copia y pega **todo** el contenido del archivo [`firestore.rules`](./firestore.rules) de este repo.
4. Pulsa **Publicar** (Publish).
5. Listo: ya puedes abrir la app, elegir un rol y cargar/crear requerimientos.

### Opción B — Desplegar con Firebase CLI (desde tu equipo)

```bash
npm install -g firebase-tools     # si no lo tienes
firebase login
firebase use matriz-logistica-37752
firebase deploy --only firestore:rules
```

(Usa el `firebase.json` y `firestore.rules` ya incluidos en el repo.)

---

## Verificar que quedó bien

Después de publicar las reglas, en una terminal:

```bash
curl -s -o /dev/null -w "%{http_code}\n" \
 "https://firestore.googleapis.com/v1/projects/matriz-logistica-37752/databases/(default)/documents/requerimientos?key=AIzaSyCwXhbWRkl1mqrVNMahEVgszYgVpIgQ-iw"
```

Debe responder **`200`** (antes daba `403`). También puedes abrir la app: en la
pantalla de login debe verse "● Firebase conectado", elegir un rol, y usar el
botón **"Cargar 12 requerimientos de ejemplo"** para sembrar datos de prueba.

---

## ⚠️ Importante sobre las reglas de prueba

Las reglas incluidas dan **acceso abierto de lectura y escritura a cualquiera
con el enlace**, y por seguridad **caducan el 30/09/2026**. Son apropiadas solo
para la fase de pruebas. Cuando definan las contraseñas de los roles:

1. Conectar el login de la app a **Firebase Auth** (`signInWithEmailAndPassword`,
   que ya está importado en `index.html` pero aún no se usa).
2. Guardar el rol de cada usuario (en `usuarios/{uid}` o como *custom claim*).
3. Reemplazar el bloque de pruebas por el **bloque de producción** que está
   comentado al final de [`firestore.rules`](./firestore.rules) y volver a publicar.

---

## Notas sobre el código actual

- Única colección de Firestore en uso: **`requerimientos`** (el tarifario y la
  auditoría son datos locales de demostración por ahora).
- En `index.html` ya están importados y expuestos los helpers de Auth
  (`signInWithEmailAndPassword`, `onAuthStateChanged`, etc.) pero **todavía no
  se invocan**: ese es el trabajo pendiente para el login con contraseñas.
- "Firebase Storage" se menciona para soportes documentales, pero el código solo
  referencia URLs; no sube archivos, así que no requiere reglas de Storage aún.
