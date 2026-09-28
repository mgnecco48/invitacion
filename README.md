# Date invitation website

A small, static invitation page for a surprise date. It uses plain HTML, CSS, and a little JavaScript, so it is easy to edit and publish with GitHub Pages.

## Files

- `index.html` contains the page structure and invitation text.
- `style.css` contains colors, layout, typography, and the reveal styling.
- `script.js` adds the small flower animation when the invitation is opened.
- `README.md` is this guide.

## Edit the invitation

Open `index.html` and look for this comment near the top:

```html
<!--
  EDITA EL TEXTO AQUÍ
  Cambia los valores entre corchetes por los detalles reales.
-->
```

Replace the placeholders:

- `[FECHA]`
- `[HORA]`
- `[PISTA O LUGAR SECRETO]`
- `[QUÉ PONERTE]`
- `[MENSAJE PERSONAL]`
- `[TU NOMBRE]`

## Edit the colors

Open `style.css` and change the values at the top inside `:root`.

The main accent colors are:

- `--accent`
- `--accent-dark`
- `--accent-wash`

The paper colors are:

- `--paper`
- `--paper-deep`

## Preview locally

The simplest preview is to open `index.html` in a browser.

For a local web server, run this from the project folder:

```sh
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md`.
3. In GitHub, go to `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Choose the `main` branch and the root folder.
6. Save, then wait for GitHub to show the public Pages link.

Do not add private details, private photos, or anything sensitive unless you are comfortable with the repository and published page being discoverable.
