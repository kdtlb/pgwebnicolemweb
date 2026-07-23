# Nicole Márquez — Casa de Eventos

Sitio web estático para Nicole Márquez, casa de eventos (línea verde y dorado).

## Estructura

```
├── index.html          # Página principal
├── areas.html          # Áreas / espacios
├── eventos.html        # Eventos
├── organizadora.html   # La organizadora
├── contacto.html       # Contacto
├── styles.css          # Estilos
├── main.js             # Interacciones (menú, etc.)
├── logo.png            # Logotipo
└── imagenes/           # Galería de fotografías
```

## Ver el sitio localmente

Al ser un sitio estático, basta con abrir `index.html` en el navegador. Para
servirlo con un servidor local (recomendado para que carguen bien las rutas):

```bash
python -m http.server 8000
```

Luego abre <http://localhost:8000> en el navegador.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, selecciona la rama (`main`) y la carpeta raíz (`/`).
3. El sitio quedará disponible en `https://<usuario>.github.io/<repositorio>/`.

> Nota: todas las rutas de imágenes son relativas, por lo que funcionan igual
> en local y en GitHub Pages.
