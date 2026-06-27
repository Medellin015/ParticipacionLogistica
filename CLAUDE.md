# Instrucciones del proyecto — ParticipacionLogistica

App web de página única (HTML/CSS/JS vanilla) con backend Firebase Firestore.
Archivos principales: `app.js` (toda la lógica), `index.html`, `styles.css`,
`firestore.rules`, `firebase-init.js`.

## Flujo de trabajo (preferencia permanente del usuario)

- Al terminar **cualquier** trabajo (corrección o funcionalidad nueva), **siempre**
  crear un Pull Request y **mergearlo a `main`** sin pedir confirmación.
- Antes de mergear: `node --check app.js` debe pasar y la rama debe reconciliarse con
  el `main` actual (resolver divergencias/conflictos primero).
- Desarrollar en la rama de feature indicada para la sesión; no pushear directo a `main`.

## Notas

- El login es solo selección de rol local (fase de pruebas, sin contraseñas): no
  trabajar la seguridad de auth/login ni las reglas de Firestore salvo petición explícita.
- Convención numérica es-CO: coma = decimal, punto = separador de miles.
