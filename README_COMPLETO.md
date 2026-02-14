# 💝 Tarjeta de San Valentín - Versión Completa con 3 Páginas

## 🎉 Novedades de Esta Versión

### ✨ Nueva Tercera Página: Jardín de Flores
- **Tulipanes** 🌷 que simbolizan el amor perfecto
- **Girasoles** 🌻 que representan la luz y el sol en tu vida
- **Mariposas animadas** 🦋 que vuelan por el jardín
- **Mensaje hermoso** sobre el significado de las flores en su relación
- **Animaciones florales** con movimientos suaves y naturales

### 🐛 Correcciones Implementadas
- ✅ **Imágenes completas en marcos**: Ahora las fotos se ven enteras, no recortadas
- ✅ **Scroll en todas las páginas**: Las 3 páginas tienen barras de scroll personalizadas
- ✅ **Mejor visualización**: Las imágenes usan `object-fit: cover` para verse perfectamente

---

## 📖 Estructura de las 3 Páginas

### Página 1: Sobre Cerrado 💌
- Marco circular para foto principal de Melisa
- Sobre con sello de cera y corazón
- Corazones flotantes animados
- Rosas decorativas en los laterales
- **Acción**: Click en el sobre para abrir la carta

### Página 2: Carta de Amor 💕
- 3 marcos para galería de fotos
- Mensaje de amor completo con separadores románticos
- Corazones decorativos adicionales
- Firma personalizada
- Moño, estrella, flor y cupido decorativos
- **Acción**: Click en la flecha ↓ para ir al jardín

### Página 3: Jardín de Flores 🌸
- 6 flores decorativas animadas (3 tulipanes + 3 girasoles)
- 2 mariposas flotantes
- Mensaje poético sobre el significado de las flores
- Firma con fecha de San Valentín 2026
- **Acción**: Click en el botón 🏠 para volver al inicio

---

## 🖼️ Agregar Tus Fotos

### Ubicación de las Imágenes Actuales
Ya hay 3 imágenes en la carpeta:
- `Imagen principal.jpeg` - En el marco 1 de la galería (página 2)
- `im1.jpeg` - En el marco 2 de la galería (página 2)
- `im2.jpeg` - En el marco 3 de la galería (página 2)

### Para Agregar Foto Circular (Página 1)

**Opción 1: Editar el CSS**
1. Abre `styles.css`
2. Busca `.photo-placeholder`
3. Agrega:
```css
.photo-placeholder {
    /* estilos existentes... */
    background-image: url('tu-foto-circular.jpg');
    background-size: cover;
    background-position: center;
}

.photo-placeholder::before,
.photo-placeholder p {
    display: none;
}
```

**Opción 2: Editar el HTML**
1. Abre `index.html`
2. Busca `<div class="photo-placeholder">`
3. Reemplaza por:
```html
<div class="photo-placeholder">
    <img src="tu-foto-circular.jpg" alt="Melisa">
</div>
```

### Para Cambiar las Fotos de la Galería (Página 2)
Simplemente reemplaza los archivos de imagen con tus propias fotos manteniendo los mismos nombres:
- `Imagen principal.jpeg`
- `im1.jpeg`
- `im2.jpeg`

O edita el HTML y cambia los nombres de archivo en las etiquetas `<img src="...">`.

---

## 🎨 Características Visuales

### Animaciones
- 🎈 Corazones flotantes en todas las páginas
- 🌷 Flores que se balancean suavemente
- 🦋 Mariposas que vuelan por el jardín
- 💕 Iconos que pulsan con amor
- 🌸 Flores que giran en los separadores

### Decoraciones
- ❤️ Corazones decorativos en CSS puro
- 🌹 Rosas animadas
- 💘 Cupido flotante
- 🎀 Moños y estrellas
- ⭐ Separadores románticos
- 🌺 Flores decorativas

### Interactividad
- 📱 Vibración en móviles al hacer click
- 🖱️ Efectos hover en todos los elementos clicables
- ⚡ Transiciones suaves entre páginas
- 📜 Scroll personalizado con colores rojos

---

## 🎯 Flujo de Navegación

```
Página 1 (Sobre) 
    ↓ [Click en el sobre]
Página 2 (Carta)
    ↓ [Click en flecha ↓]
Página 3 (Jardín)
    ↓ [Click en botón 🏠]
Página 1 (Sobre) - REINICIA
```

---

## 📱 Responsive Design

✅ **Móviles**: Diseño optimizado para pantallas pequeñas
✅ **Tablets**: Se adapta perfectamente a pantallas medianas
✅ **Desktop**: Experiencia completa en pantallas grandes

---

## 🎁 Contenido Especial Página 3

### Simbolismo de las Flores

**🌷 Tulipanes** representan:
- Amor perfecto
- Pasión elegante
- Delicadeza y fortaleza

**🌻 Girasoles** representan:
- La luz en la vida
- Búsqueda del sol (tu amor)
- Calidez y felicidad

### Mensaje Poético
La tercera página incluye un mensaje hermoso que compara su relación con un jardín donde:
- Cada flor representa algo especial
- El amor crece y florece
- Las raíces son fuertes para resistir tormentas
- Promesa de cuidar el jardín cada día

---

## 💻 Archivos Incluidos

- `index.html` - Estructura HTML con las 3 páginas
- `styles.css` - Estilos CSS completos con animaciones
- `script.js` - JavaScript para navegación entre páginas
- `Imagen principal.jpeg` - Foto de la galería
- `im1.jpeg` - Foto de la galería
- `im2.jpeg` - Foto de la galería
- `README.md` - Este archivo
- `INSTRUCCIONES_FOTOS.md` - Instrucciones detalladas para fotos

---

## 🚀 Cómo Usar

1. **Descomprime el archivo** en una carpeta
2. **Abre `index.html`** en tu navegador favorito
3. **Agrega tus fotos** siguiendo las instrucciones arriba
4. **Personaliza el mensaje** editando el HTML si lo deseas
5. **Comparte con tu amor** 💝

---

## 💡 Consejos de Personalización

### Cambiar Colores
Busca en `styles.css`:
- `#C41E3A` - Color rojo principal
- `#8B1F1F` - Color rojo oscuro
- Reemplaza con tus colores favoritos

### Cambiar Textos
Todos los mensajes están en `index.html`:
- Mensaje de la carta (Página 2)
- Mensaje del jardín (Página 3)
- Nombres en el sobre

### Agregar Más Flores
En la Página 3, puedes agregar más decoraciones florales:
- Copia una `<div class="flower-decoration">` existente
- Cambia el emoji (🌹 🌺 🌼 🌻 🌷)
- Ajusta la posición en CSS

---

## ❤️ Mensaje Final

Esta tarjeta ha sido creada con amor especialmente para Melisa. Las tres páginas representan el viaje de su amor:
1. El inicio misterioso (sobre cerrado)
2. La expresión del amor (carta abierta)
3. El futuro floreciente (jardín de flores)

**¡Feliz San Valentín 2026!** 💕

---

**Creado con amor por Jhiens para Melisa** 🌹
