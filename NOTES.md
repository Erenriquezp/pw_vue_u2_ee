### 1\. Estructura del Proyecto (El ecosistema de archivos)

Esta sección define "dónde va cada cosa". Entender esto es vital para no perderse en proyectos grandes.

#### 📂 Directorios Principales

  * **`node_modules/`**: **El motor oculto.** Aquí se descargan físicamente todas las librerías y dependencias (paquetes) que definiste en el `package.json`. *Nota: Nunca se edita manualmente ni se sube a GitHub.*
  * **`public/`**: **Archivos estáticos puros.** Contiene el `index.html` (donde se inyecta Vue) y archivos (imágenes, favicons) que son accesibles directamente desde la URL del navegador sin pasar por la lógica de compilación de Vue (webpack/vite). No requieren autenticación ni procesamiento.
  * **`src/` (Source):** **Tu área de trabajo.** Aquí vive el código fuente de tu aplicación.

#### 📂 Dentro de `src/`

  * **`assets/`**: Recursos utilitarios que **sí** pasan por el compilador (imágenes, fuentes, estilos globales). A diferencia de `public`, estos archivos pueden ser optimizados por Vue.
  * **`components/`**: **Bloques de construcción (LEGOs).** Son las piezas independientes y reutilizables de la interfaz (Botones, Cabecera, Menú, Formularios, Banners).
      * *Filosofía:* Se comunican entre sí, pero deben ser lo suficientemente independientes para funcionar en cualquier parte.
  * **`views/` (o Pages):** **Contenedores o Pantallas.**
      * *Regla de oro:* Todo componente debe vivir dentro de una vista o página.
      * Una "View" representa una ruta URL (ej: `/home`, `/contacto`) y su trabajo es agrupar varios `components` para formar la pantalla completa.

#### 📄 Archivos Críticos de Arranque

  * **`App.vue`**: **El Componente Raíz.** Es el padre de todos los componentes. Toda la aplicación se renderiza dentro de este archivo.
  * **`main.js`**: **El punto de entrada JS.** Es el archivo de configuración que importa Vue, carga el `App.vue`, inyecta librerías globales (como el Router o Pinia/Vuex) y "monta" la aplicación en el DOM (en el `index.html`).

-----

### 2\. Archivos de Configuración (La "Fontanería")

Estos archivos controlan cómo se comporta el entorno de desarrollo.

  * **`.gitignore`**: Lista de archivos/carpetas que git debe ignorar (ej: `node_modules`, archivos de claves `.env`).
  * **`package.json`**: **El DNI del proyecto.** Contiene el nombre, scripts de ejecución y la lista de dependencias que el proyecto *necesita*.
  * **`package-lock.json`**: **El árbol genealógico exacto.** Registra las versiones *exactas* de las dependencias instaladas para asegurar que todos los desarrolladores tengan idénticas versiones.
  * **`babel.config.js`**: **El traductor.** Configura Babel, que transforma JavaScript moderno (ES6+) a una versión antigua compatible con navegadores viejos.
  * **`.browserslistrc`**: Define qué versiones de navegadores (Chrome, Firefox, Safari) vas a soportar. Babel usa esto para saber cuánto "traducir" el código.
  * **`jest.config.js`**: Configuración para **pruebas unitarias** (Testing) usando Jest.
  * **`jsconfig.json`**: Ayuda al editor (VS Code) a entender el proyecto para mejorar el autocompletado y la inteligencia de código.
  * **`README.md`**: Documentación humana del proyecto (instrucciones de instalación, comandos, descripción).

#### 🛠 Configuración Especial: `vue.config.js`

Este archivo permite modificar la configuración interna de Webpack/Vue CLI.
**Tu caso de uso (Codespaces):** El código que proporcionaste soluciona el problema de "Invalid Host Header" o problemas de conexión de WebSockets cuando trabajas en la nube (GitHub Codespaces).

```javascript
module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        protocol: "wss", // WebScokets Seguros
      },
    },
    allowedHosts: "all", // Importante agregar esto a veces en Codespaces
    port: 8080,
    host: "0.0.0.0" // Permite acceso desde fuera del contenedor
  }
};
```

-----

### 3\. Conceptos de Vue.js (Options API)

Vue tiene dos formas de trabajar: **Options API** (tradicional) y **Composition API** (moderna). Tus notas se centran en la **Options API**, que organiza el código por "opciones" (`data`, `methods`, `computed`).

#### 🧠 Data (Propiedades Reactivas)

  * Son las variables de estado del componente.
  * **Reactividad:** Si cambias el valor de una variable en el script, el HTML se actualiza automáticamente. No necesitas hacer `document.getElementById().value = ...`.
  * **Uso:** Dentro del script (Options API), siempre debes usar `this.nombreVariable` para acceder a ellas.

#### ⚡ Computed (Propiedades Computadas)

  * Parecen métodos, pero se usan como variables.
  * **Caché (La clave):** Solo se recalculan si las variables de las que dependen cambian. Si no cambian, devuelven el valor guardado en memoria (caché), ahorrando procesamiento.
  * **Regla estricta:** **Nunca reciben parámetros**. Deben ser funciones puras que retornan un valor basado en `data`.

#### 📡 Props (Comunicación Padre -\> Hijo)

  * Son variables que un componente hijo espera recibir de su padre.
  * Permiten que el componente sea dinámico y reutilizable. El padre "inyecta" los datos.

-----

### 4\. Directivas (El poder en el HTML)

Son atributos especiales de Vue (empiezan con `v-`) que manipulan el DOM.

| Directiva | Descripción | Detalle Técnico Importante |
| :--- | :--- | :--- |
| **`v-bind`** | Convierte un atributo HTML estático en código JS dinámico. | Abreviatura común: **`:`** (ej: `:src="imagen"`). |
| **`v-model`** | **Binding Bidireccional.** | Conecta un `input` con una variable. Si escribes en el input, la variable cambia; si cambias la variable, el input cambia. |
| **`v-if`** | Renderizado condicional real. | Si es `false`, el elemento **no existe** en el DOM (se destruye). Costoso de alternar muchas veces. |
| **`v-show`** | Visibilidad condicional. | El elemento **siempre existe** en el DOM, solo cambia `display: none`. Útil para menús desplegables (toggles frecuentes). |
| **`v-for`** | Bucles / Iteraciones. | Recorre arrays. **Importante:** Siempre debe llevar un `:key` único para que Vue no pierda el rastro de los elementos. |

-----

### 5\. Anatomía de un Componente (`.vue`)

Cuando usas `vue+tab` (o generas un snippet), creas un **Single File Component (SFC)**. Tiene 3 partes:

1.  **`<template>` (HTML):**
      * La estructura visual.
      * Solo puede haber un elemento raíz (en Vue 2) o múltiples (en Vue 3).
2.  **`<script>` (JS - Lógica):**
      * Aquí va el `export default` (Options API).
      * Contiene `name`, `data()`, `methods`, `computed`, `props`, etc.
3.  **`<style>` (CSS - Diseño):**
      * Define la apariencia.
      * **Tip:** Usa `<style scoped>` para que los estilos definidos aquí *solo* afecten a este componente y no rompan el resto de la web.

-----

### 6\. Comandos de Terminal (Workflow)

Estos son los comandos de Node.js (NPM) necesarios para el ciclo de vida.

1.  **`npm install`**:

      * Lee el archivo `package.json`.
      * Descarga todas las librerías necesarias de internet.
      * Crea la carpeta `node_modules`.
      * *Cuándo usarlo:* La primera vez que descargas un proyecto o cuando clonas un repositorio (ya que `node_modules` nunca se sube).

2.  **`npm run serve`** (o `npm run dev` en Vite):

      * Compila el proyecto en memoria.
      * Levanta un servidor de desarrollo local (usualmente `localhost:8080`).
      * Activa el "Hot Reload" (guardas el archivo y el navegador se actualiza solo).

### Resumen:

Tu flujo de trabajo mental debe ser:

1.  Creo estructura en **Views/Components**.
2.  Defino lógica en **Script** (Data/Computed/Methods).
3.  Conecto datos al HTML con **Directivas** (`v-bind`, `v-model`).
4.  Controlo visualización con **Directivas Lógicas** (`v-if`, `v-for`).
5.  Configuro el entorno con **Archivos Raíz** (`vue.config.js`).