---

# 🎁 Amigo Secreto

Aplicación web sencilla para organizar un **sorteo de amigo secreto**.
Permite agregar nombres de amigos, mostrarlos en una lista y seleccionar aleatoriamente un “amigo secreto”.

---

## 📌 Funcionalidades

* ➕ **Agregar amigos:** ingresa el nombre en un campo de texto y añádelo a la lista.
* 📋 **Visualización:** la lista de amigos se actualiza dinámicamente en pantalla.
* 🎲 **Sorteo aleatorio:** selecciona un amigo secreto al azar, siempre que haya al menos 2 amigos en la lista.
* ⚠️ **Validaciones:**

  * No se permite añadir nombres vacíos.
  * El sorteo requiere mínimo 2 amigos.

---

## 🛠️ Tecnologías utilizadas

* **HTML5** → estructura de la aplicación.
* **CSS3** → estilos (archivo `style.css`).
* **JavaScript (Vanilla)** → lógica del sorteo y actualización de la lista.

---

## 🚀 Cómo usar

1. Clona este repositorio:

   ```bash
   git clone https://github.com/joelru_/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Escribe el nombre de un amigo y pulsa **Añadir**.
4. Cuando tengas al menos 2 amigos en la lista, pulsa **Sortear amigo**.

---

## 📂 Estructura del proyecto

```
.
├── index.html      # Estructura principal
├── style.css       # Estilos
├── app.js          # Lógica de la aplicación
└── assets/         # Imágenes y recursos
```

---

## ✨ Ejemplo de uso

* Lista de amigos: Ana, Juan, Pedro.
* Presionas "Sortear amigo".
* Resultado: *"Tu amigo secreto es: Pedro"* 🎉

---
