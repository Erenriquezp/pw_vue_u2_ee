
---
s
# 📘 Guía de Vue.js – Estructura, Conceptos y Flujo de Trabajo

## 1. 🗂️ Estructura del Proyecto (El ecosistema de archivos)

Esta sección define **“dónde va cada cosa”**. Entender esto es vital para no perderse en proyectos grandes.

### 📂 Directorios Principales

* **`node_modules/`**: **El motor oculto**
  Aquí se descargan físicamente todas las librerías y dependencias definidas en `package.json`.

  > ⚠️ Nunca se edita manualmente ni se sube a GitHub.

* **`public/`**: **Archivos estáticos puros**
  Contiene `index.html` (donde se inyecta Vue) y archivos como imágenes o favicons que:

  * Son accesibles directamente por URL
  * No pasan por Vue ni por el proceso de compilación
  * No requieren autenticación ni lógica JS

* **`src/` (Source)**: **Tu área de trabajo**
  Aquí vive todo el código fuente de la aplicación.

### 📂 Dentro de `src/`

* **`assets/`**
  Recursos que **sí pasan por el compilador**:

  * Imágenes
  * Fuentes
  * Estilos globales
    Vue puede optimizarlos automáticamente.

* **`components/`**: **Bloques de construcción (LEGOs)**
  Componentes reutilizables de la interfaz:

  * Botones
  * Headers
  * Menús
  * Formularios
  * Banners

  **Filosofía:**
  Deben ser independientes y reutilizables en cualquier vista.

* **`views/` (o Pages)**: **Pantallas / Contenedores**

  * Representan una ruta URL (`/home`, `/contacto`)
  * Agrupan múltiples `components` para formar una pantalla completa

  **Regla de oro:**

  > Todo componente vive dentro de una vista.

### 📄 Archivos Críticos de Arranque

* **`App.vue`**: **Componente raíz**
  Padre de todos los componentes.
  Toda la app se renderiza dentro de él.

* **`main.js`**: **Punto de entrada JS**

  * Importa Vue
  * Carga `App.vue`
  * Registra Router, Pinia/Vuex
  * Monta la app en el `index.html`

---

## 2. 🔧 Archivos de Configuración (La “Fontanería”)

Controlan cómo se comporta el entorno de desarrollo.

* **`.gitignore`**
  Archivos/carpetas que Git debe ignorar (`node_modules`, `.env`).

* **`package.json`**: **El DNI del proyecto**
  Contiene:

  * Nombre
  * Scripts
  * Dependencias necesarias

* **`package-lock.json`**: **El árbol genealógico exacto**
  Guarda las versiones exactas de cada dependencia.

* **`babel.config.js`**: **El traductor**
  Convierte JS moderno (ES6+) a versiones compatibles con navegadores antiguos.

* **`.browserslistrc`**
  Define qué navegadores y versiones se deben soportar.

* **`jest.config.js`**
  Configuración de pruebas unitarias con Jest.

* **`jsconfig.json`**
  Ayuda a VS Code con autocompletado e inteligencia de código.

* **`README.md`**
  Documentación humana del proyecto.

### 🛠️ Configuración Especial: `vue.config.js`

Permite modificar la configuración interna de Vue CLI / Webpack.

**Caso de uso (Codespaces):**
Soluciona errores como `Invalid Host Header` y problemas con WebSockets.

```js
module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        protocol: "wss", // WebSockets seguros
      },
    },
    allowedHosts: "all",
    port: 8080,
    host: "0.0.0.0"
  }
};
```

---

## 3. 🧠 Conceptos de Vue.js (Options API)

Vue ofrece dos estilos:

* **Options API** (tradicional)
* **Composition API** (moderna)

Estas notas se enfocan en **Options API**.

### 🧠 Data (Propiedades Reactivas)

* Variables de estado del componente
* Son reactivas:

  > Si cambia el valor, el HTML se actualiza solo
* Se accede siempre con `this.variable`

---

### ⚙️ Methods (Comportamiento)

* Funciones que ejecutan lógica
* Manejan eventos (`click`, `submit`, etc.)
* Se ejecutan **cada vez que se llaman**

---

### ⚡ Computed (Propiedades Computadas)

* Se usan como variables, no como funciones
* Tienen **caché**
* Solo se recalculan si cambian sus dependencias

**Regla estricta:**

> ❌ No reciben parámetros

---

### 👀 Watch (Observadores)

* Observan una propiedad específica
* Ejecutan código cuando esa propiedad cambia

**Útil para:**

* Validaciones en tiempo real
* Llamadas automáticas a APIs

---

### 📡 Props (Comunicación Padre → Hijo)

* Datos que el componente hijo recibe del padre
* Permiten reutilización y dinamismo
* El padre **inyecta** los valores

---

## 4. 🧩 Directivas (El poder en el HTML)

Atributos especiales que comienzan con `v-`.

| Directiva | Descripción           | Detalle Técnico     |
| --------- | --------------------- | ------------------- |
| `v-bind`  | Atributos dinámicos   | Abreviatura: `:`    |
| `v-model` | Binding bidireccional | Input ↔ Variable    |
| `v-if`    | Renderizado real      | Se destruye del DOM |
| `v-show`  | Visibilidad           | Usa `display: none` |
| `v-for`   | Iteraciones           | Siempre usar `:key` |
| `v-on`    | Eventos               | Abreviatura: `@`    |

---

## 🏛️ Arquitectura y Asincronía

### ⏳ Async / Await

* Manejo moderno de promesas

```js
async function cargarDatos() {
  const data = await fetch(url);
}
```

* `async`: define función asíncrona
* `await`: pausa hasta recibir datos

---

### 🧱 Patrón Facade / Servicios

**Buena práctica:**

* ❌ No usar `axios` o `fetch` dentro del componente
* ✅ Crear archivos de servicio (ej: `Client.js`)

---

### 🧩 Registro Local de Componentes

```js
import MiComponente from '@/components/MiComponente.vue';

export default {
  components: {
    MiComponente
  }
}
```

---

## 5. 🧬 Anatomía de un Componente (`.vue`)

Un **Single File Component (SFC)** tiene 3 partes:

### 1️⃣ `<template>` (HTML)

* Estructura visual
* Vue 2: un solo elemento raíz
* Vue 3: múltiples raíces permitidas

### 2️⃣ `<script>` (JS)

* Contiene `export default`
* Incluye `data`, `methods`, `computed`, `props`, etc.

### 3️⃣ `<style>` (CSS)

* Apariencia del componente

```html
<style scoped>
/* Solo afecta a este componente */
</style>
```

---

## 🎨 Estilos y Diseño

### Unidades de Viewport

* `100vh` → 100% del alto de la pantalla
* `100vw` → 100% del ancho

### Posicionamiento

* `position: fixed` → ignora el scroll
* `z-index` → controla capas visuales

---

## 6. 🧪 Comandos de Terminal (Workflow)

### Instalación inicial

```bash
npm install -g @vue/cli
vue create nombre-del-proyecto
cd nombre-del-proyecto
```

---

### Comandos Clave

#### 📦 `npm install`

* Lee `package.json`
* Descarga dependencias
* Crea `node_modules`

👉 Usar al clonar un proyecto

---

#### 🚀 `npm run serve` / `npm run dev`

* Compila en memoria
* Levanta servidor local
* Activa Hot Reload

---

## ✅ Resumen Mental de Trabajo

1. Crear estructura en **Views / Components**
2. Definir lógica en **Script**
3. Conectar datos con **Directivas**
4. Controlar renderizado (`v-if`, `v-for`)
5. Configurar entorno con **archivos raíz**

---