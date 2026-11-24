# michaelherediaperez.github.io

Página académica y profesional de Michael Heredia Pérez, construida con
[Eleventy (11ty)](https://www.11ty.dev/) y desplegada en GitHub Pages.

## Cómo correr el sitio en local

Requiere [Node.js](https://nodejs.org/) (v18 o superior).

```bash
npm install
npm start
```

Esto levanta un servidor local (por defecto en `http://localhost:8080`) que se
recarga automáticamente cada vez que guardas un cambio.

Para generar el sitio estático final (lo mismo que hace GitHub Actions al
desplegar):

```bash
npm run build
```

El resultado queda en la carpeta `_site/` (ignorada por git).

## Estructura del contenido

Todo el contenido en español vive dentro de `src/es/`:

```
src/es/
├── index.md            → Inicio / perfil
├── ensayos/             → Ensayos y escritos de opinión
├── publicaciones/       → Publicaciones académicas
├── presentaciones/      → Presentaciones y conferencias
├── clases/              → Clases y cursos
└── contacto/index.md    → Contacto
```

`src/en/` y `src/zh/` tienen la misma estructura con el contenido traducido
(carpetas `essays/`, `publications/`, `talks/`, `teaching/` y `contact/`).
Cada idioma usa sus propias etiquetas de colección (por ejemplo
`publications-en`), definidas en el archivo `.json` de cada carpeta.

## Cómo agregar un nuevo ensayo, publicación, presentación o clase

Cada entrada es un archivo `.md` independiente dentro de la carpeta de la
sección correspondiente. Por ejemplo, para agregar un nuevo ensayo:

1. Crea un archivo nuevo en `src/es/ensayos/`, por ejemplo
   `src/es/ensayos/mi-nuevo-ensayo.md`.
2. Agrega al inicio del archivo un encabezado (front matter) con al menos
   título, fecha y resumen:

   ```md
   ---
   title: "Título del ensayo"
   date: 2026-07-21
   summary: "Resumen breve de una o dos líneas."
   ---

   El contenido del ensayo va aquí, en Markdown normal.
   ```

3. Guarda el archivo. Con `npm start` corriendo, la nueva entrada aparece
   automáticamente en `/es/ensayos/` sin tocar ningún otro archivo.

El mismo procedimiento aplica para `publicaciones/`, `presentaciones/` y
`clases/`, cambiando la carpeta correspondiente.

## Matemáticas (KaTeX)

Dentro de cualquier archivo `.md` puedes usar notación LaTeX:

- En línea: `$E = mc^2$`
- En bloque:

  ```
  $$
  \int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
  $$
  ```

Esto se convierte automáticamente en fórmulas renderizadas al construir el
sitio, sin configuración adicional.

## Despliegue

El sitio se despliega automáticamente a GitHub Pages mediante GitHub Actions
(`.github/workflows/deploy.yml`) en cada push a `main`. La primera vez es
necesario activar, en el repositorio de GitHub: **Settings → Pages → Source:
GitHub Actions**.

## Idiomas

El selector de idioma en el encabezado enlaza a `/es/`, `/en/` y `/zh/`. La
raíz del sitio (`/`) redirige automáticamente a `/es/`, el idioma por
defecto.
