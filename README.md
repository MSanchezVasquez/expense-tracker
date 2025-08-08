# 💰 Expense Tracker

**Expense Tracker** es una aplicación web diseñada para registrar, visualizar y gestionar tus gastos de forma sencilla.  
Permite agregar, listar y eliminar transacciones, ofreciendo una interfaz rápida y optimizada gracias a **Vite** y un manejo eficiente del estado global con **Redux Toolkit**.

---

## 🖥️ Funcionalidades principales

- ✅ Registrar gastos con descripción, monto y fecha.
- ✅ Visualizar una lista de todas las transacciones.
- ✅ Eliminar transacciones individualmente.
- ✅ Persistencia del estado durante la sesión.
- ✅ Interfaz rápida y responsiva.

---

## 🚀 Tecnologías utilizadas y por qué

### **Frontend**

- **[React 19](https://react.dev/)**  
  Librería de JavaScript para construir interfaces declarativas y basadas en componentes.  
  _Usada para separar la UI en componentes reutilizables y manejar el renderizado eficiente._

- **[Vite](https://vitejs.dev/)**  
  Herramienta de construcción ultrarrápida para desarrollo y producción.  
  _Elegida por su velocidad en el arranque del servidor de desarrollo y optimización del bundle final._

- **[React Redux](https://react-redux.js.org/)**  
  Librería oficial de integración entre React y Redux.  
  _Facilita la conexión de componentes con el estado global._

- **[Redux Toolkit](https://redux-toolkit.js.org/)**  
  Abstracción oficial sobre Redux que simplifica la configuración, reduce código repetitivo y mejora la organización.  
  _Usada para manejar el estado global de transacciones de forma predecible._

- **[UUID](https://www.npmjs.com/package/uuid)**  
  Librería para generar identificadores únicos.  
  _Usada para asignar IDs a las transacciones._

---

## 📦 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/usuario/expense-tracker.git
cd expense-tracker
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 4️⃣ Generar build de producción

```bash
npm run build
```

Esto crea la carpeta `dist` lista para desplegar.

### 5️⃣ Previsualizar build

```bash
npm run preview
```

---

## 📂 Estructura del proyecto

```
expense-tracker/
├── public/             # Recursos estáticos (favicon, redirects, etc.)
├── src/                # Código fuente
│   ├── components/     # Componentes reutilizables de UI
│   ├── features/       # Slices y lógica de Redux Toolkit
│   ├── pages/          # Páginas de la app
│   ├── App.jsx         # Componente raíz
│   └── main.jsx        # Punto de entrada de React
├── package.json        # Configuración de dependencias y scripts
├── vite.config.js      # Configuración de Vite
└── README.md           # Documentación del proyecto
```

---

## 🌐 Despliegue en Netlify

1. Ejecutar:

```bash
npm run build
```

2. Subir la carpeta `dist` a [Netlify](https://www.netlify.com/) o conectar el repositorio de GitHub.
3. Configuración recomendada:

   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

4. Si usas React Router, en `public/` crea un archivo `_redirects` con:

```
/*    /index.html   200
```

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**, por lo que puedes usarlo y modificarlo libremente.

---

## 📅 Mejoras futuras

- [ ] Añadir gráficos de gastos por categoría.
- [ ] Persistencia de datos en LocalStorage o Base de Datos.
- [ ] Filtrado y búsqueda de transacciones.
- [ ] Soporte para múltiples monedas.
