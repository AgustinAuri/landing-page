# Landing Page Premium White Label

Landing Page premium en React pensada para revenderse a profesionales como abogados, odontologos y personal trainers. El proyecto usa `React`, `Vite`, `SASS` y `Framer Motion`, con una direccion visual neutra y una estructura facil de adaptar.

## Stack

- React 18
- Vite
- SASS
- Framer Motion

## Estructura

```text
.
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── components
│   │   ├── ContactSection.jsx
│   │   ├── ExpertiseSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SectionReveal.jsx
│   │   ├── StorySection.jsx
│   │   └── icons.jsx
│   └── styles
│       ├── _base.scss
│       ├── _components.scss
│       ├── _layout.scss
│       ├── _mixins.scss
│       ├── _variables.scss
│       └── main.scss
└── README.md
```

## Instalacion

```bash
npm install
npm run dev
```

Para generar la version de produccion:

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## Personalizacion de colores

Toda la paleta esta centralizada en [src/styles/_variables.scss](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/styles/_variables.scss).

Variables clave:

- `$color-white`
- `$color-black`
- `$color-gray-100`
- `$color-gray-200`
- `$color-gray-300`
- `$color-gray-500`
- `$color-gray-800`
- `$color-accent`
- `$color-accent-contrast`

### Cambiar el color de acento en un solo paso

1. Abre [src/styles/_variables.scss](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/styles/_variables.scss).
2. Cambia el valor de `$color-accent`.
3. Si el nuevo color necesita mejor contraste, ajusta `$color-accent-contrast`.

Ejemplo:

```scss
$color-accent: #0f766e;
$color-accent-contrast: #ffffff;
```

Con ese cambio se actualizan automaticamente los botones principales y cualquier elemento que reutilice el color de acento.

## Personalizacion de contenido

- El header se edita en [src/components/Header.jsx](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/components/Header.jsx).
- El hero principal se edita en [src/components/HeroSection.jsx](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/components/HeroSection.jsx).
- La historia de marca se edita en [src/components/StorySection.jsx](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/components/StorySection.jsx).
- Los sectores objetivo se adaptan desde [src/components/ExpertiseSection.jsx](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/components/ExpertiseSection.jsx).
- El formulario, redes y WhatsApp se configuran en [src/components/ContactSection.jsx](/C:/Users/PC/Desktop/porfolio/Landing-page-Primium/src/components/ContactSection.jsx).

## Animaciones incluidas

- Reveal al hacer scroll mediante `SectionReveal`.
- Entrada inicial suave en el header y hero.
- Micro interacciones en botones, enlaces sociales e inputs del formulario.

## Responsive

La interfaz esta preparada para desktop, tablet y mobile con grillas fluidas y ajustes de espaciado para pantallas pequenas.

## Despliegue

Puedes desplegar este proyecto en cualquier hosting de front statico:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Flujo recomendado:

1. Ejecuta `npm install`.
2. Ejecuta `npm run build`.
3. Publica el contenido generado en `dist/`.

## Recomendaciones para comercializarla

- Sustituye el contenido demo por copies del nicho objetivo.
- Cambia el acento de marca desde `_variables.scss`.
- Reemplaza enlaces sociales y numero de WhatsApp.
- Añade integracion real al formulario con el proveedor que prefieras.

## Estado actual

El proyecto queda listo para instalar dependencias y levantarlo con Vite. No incluye backend ni envio real del formulario por defecto, para mantener la plantilla flexible y facil de revender.
