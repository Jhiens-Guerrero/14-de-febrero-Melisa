# 📸 Instrucciones para Agregar Fotos de Melisa

## 🎯 Ubicación de los Espacios para Fotos

Tu carta de San Valentín ahora tiene **4 espacios** para colocar fotos de tu enamorada:

### Página 1 (Sobre Cerrado):
- **1 foto circular grande** - Marco decorativo con corazones en las esquinas

### Página 2 (Carta Abierta):
- **3 fotos pequeñas en galería** - Disposición horizontal con marcos rojos

---

## 💻 Cómo Agregar las Fotos

### Opción 1: Usando CSS (Recomendado)

1. **Guarda tus fotos** en la misma carpeta que los archivos HTML, CSS y JS
   - Nombre sugerido: `foto_circular.jpg`, `foto_1.jpg`, `foto_2.jpg`, `foto_3.jpg`

2. **Abre el archivo `styles.css`**

3. **Para la foto circular (Página 1)**, busca `.photo-placeholder` y agrega:
   ```css
   .photo-placeholder {
       /* ... estilos existentes ... */
       background-image: url('foto_circular.jpg');
       background-size: cover;
       background-position: center;
   }
   
   .photo-placeholder::before {
       display: none; /* Ocultar el icono de cámara */
   }
   
   .photo-placeholder p {
       display: none; /* Ocultar el texto placeholder */
   }
   ```

4. **Para las fotos de la galería (Página 2)**, busca `.photo-1`, `.photo-2`, `.photo-3` y agrega:
   ```css
   .photo-1 {
       /* ... estilos existentes ... */
       background-image: url('foto_1.jpg');
       background-size: cover;
       background-position: center;
   }
   
   .photo-1::before,
   .photo-1 p {
       display: none;
   }
   
   .photo-2 {
       /* ... estilos existentes ... */
       background-image: url('foto_2.jpg');
       background-size: cover;
       background-position: center;
   }
   
   .photo-2::before,
   .photo-2 p {
       display: none;
   }
   
   .photo-3 {
       /* ... estilos existentes ... */
       background-image: url('foto_3.jpg');
       background-size: cover;
       background-position: center;
   }
   
   .photo-3::before,
   .photo-3 p {
       display: none;
   }
   ```

---

### Opción 2: Usando HTML

1. **Abre el archivo `index.html`**

2. **Para la foto circular**, reemplaza:
   ```html
   <div class="photo-placeholder">
       <p>Coloca aquí una foto de Melisa</p>
   </div>
   ```
   
   Por:
   ```html
   <div class="photo-placeholder">
       <img src="foto_circular.jpg" alt="Melisa" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
   </div>
   ```

3. **Para las fotos de la galería**, reemplaza:
   ```html
   <div class="gallery-photo photo-1">
       <p>Foto 1</p>
   </div>
   ```
   
   Por:
   ```html
   <div class="gallery-photo photo-1">
       <img src="foto_1.jpg" alt="Momento especial 1" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
   </div>
   ```

   Repite lo mismo para `photo-2` y `photo-3`.

---

## 🎨 Nuevos Elementos Románticos Agregados

✨ **Corazones flotantes animados** - 6 corazones que flotan de abajo hacia arriba
💕 **Marco circular decorado** - Con 4 corazones en las esquinas
🌹 **Rosas decorativas** - En los laterales de la página 1
❤️ **Separadores románticos** - Entre párrafos en la carta
💘 **Cupido flotante** - Animación suave en la esquina
💝 **Firma personalizada** - "Con todo mi amor, Jhiens ❤️"
🎀 **Moños y estrellas** - Decoraciones adicionales

---

## 📱 Barras de Scroll

Ambas páginas ahora tienen:
- **Scroll suave** con barras personalizadas color rojo
- **Diseño responsive** que se adapta a móviles
- **Altura automática** para mostrar todo el contenido

---

## 💡 Consejos

- Usa fotos en **formato JPG o PNG**
- Tamaño recomendado: **500x500 píxeles** para mejor calidad
- Las fotos se recortan automáticamente para ajustarse al marco
- Para la foto circular, usa fotos donde Melisa esté centrada

---

## ❤️ Resultado Final

Tu carta ahora tiene:
- ✅ Scroll en ambas páginas
- ✅ 4 espacios para fotos
- ✅ Corazones flotantes animados
- ✅ Más decoraciones románticas
- ✅ Firma personalizada
- ✅ Mejor visualización del mensaje completo

---

**¡Disfruta tu carta de San Valentín mejorada!** 💕
