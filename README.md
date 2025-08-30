## Dragon Ball APP

![Logo del proyecto](./src/assets/image_readmin.jpg)


## 🚀 Proyecto React + TailwindCSS + TypeScript

Este proyecto está construido con **React**, **TailwindCSS** y **TypeScript**, siguiendo una arquitectura basada en **features (módulos/funcionalidades)** para mantener el código organizado, escalable y fácil de mantener.

---

## 🛠️ Tecnologías

- [React](https://react.dev/) - Librería para la construcción de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [TailwindCSS](https://tailwindcss.com/) - Estilos utilitarios
- [Vite](https://vitejs.dev/) - Bundler rápido para desarrollo

## 📂 Estructura de Carpetas

```
├── assets/ # Imágenes, íconos, estilos globales
│ ├── images/
│ ├── icons/
│ └── styles/
│
├── components/ # Componentes UI reutilizables (botones, inputs, modals, etc.)
│ ├── ui/
│ └── layout/
│
├── features/ # Módulos principales de la aplicación
│ └── auth/ # Ejemplo: Autenticación
│ ├── components/ # Componentes específicos del módulo
│ ├── hooks/ # Hooks personalizados del módulo
│ ├── services/ # Lógica de comunicación con APIs relacionadas
│ ├── types/ # Tipos e interfaces TS específicos
│ └── pages/ # Páginas del módulo (Login, Register, etc.)
│
├── hooks/ # Hooks globales
├── lib/ # Configuración de librerías externas (axios, firebase, etc.)
├── pages/ # Páginas principales (Home, About, NotFound, etc.)
├── services/ # Servicios globales (API base, helpers de fetch, etc.)
├── store/ # Estado global (Zustand, Redux, Context API)
├── types/ # Tipos globales de TypeScript
├── utils/ # Funciones helpers/utilidades
│
├── App.tsx # Componente principal
├── main.tsx # Punto de entrada (ReactDOM)
└── tailwind.config.js
```


✍️ Autor: **Jun Camilo Penagos**  