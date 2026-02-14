# 💝 Tarjeta de San Valentín Interactiva

## 📋 Descripción
Una hermosa tarjeta de San Valentín interactiva que simula la apertura de un sobre con un mensaje romántico personalizado. Diseñada con HTML, CSS y JavaScript puro.

## ✨ Características
- 🎨 Diseño elegante inspirado en TikTok
- 💌 Animación de apertura de sobre
- 📱 Totalmente responsive (funciona en móvil y escritorio)
- 🎭 Transiciones suaves entre pantallas
- ❤️ Botones interactivos (like, comentar, guardar, compartir)
- 🎯 Sin dependencias externas

## 📁 Estructura del Proyecto
```
valentine-card/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica de interactividad
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Método 1: Abrir Directamente
1. Descomprime el archivo ZIP
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado
4. ¡Haz clic en el sobre para leer el mensaje!

### Método 2: Servidor Local (Recomendado)

#### Opción A - Con Python:
```bash
# Si tienes Python 3 instalado:
cd valentine-card
python -m http.server 8000

# Luego abre tu navegador en:
# http://localhost:8000
```

#### Opción B - Con Node.js:
```bash
# Instala http-server globalmente:
npm install -g http-server

# Ejecuta el servidor:
cd valentine-card
http-server

# Abre tu navegador en la URL que te indique
```

#### Opción C - Con VS Code:
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎨 Personalización

### Cambiar Nombres
En `index.html`, busca y modifica:
```html
<!-- Para el destinatario -->
<p class="name">Samuel</p>

<!-- Para el remitente -->
<p class="name">Ximena</p>
```

### Cambiar el Mensaje
En `index.html`, modifica el contenido dentro de `.letter-content`:
```html
<div class="letter-content">
    <p>Tu mensaje línea 1</p>
    <p>Tu mensaje línea 2</p>
    <!-- Agrega más líneas si necesitas -->
</div>
```

### Cambiar Colores
En `styles.css`, modifica las variables de color:
```css
/* Busca estos colores y cámbialos: */
#8B1F1F    /* Rojo oscuro del fondo */
#C41E3A    /* Rojo del sello y decoraciones */
#F5F0E8    /* Beige claro del papel */
```

### Cambiar la Fecha
En `index.html`:
```html
<p class="date">28 de Enero</p>  <!-- Cambia aquí -->
```

## 🔧 Características Técnicas

### Tecnologías Utilizadas
- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript ES6+ (Vanilla JS)

### Navegadores Compatibles
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Características Responsive
- Diseñado mobile-first
- Breakpoint en 500px
- Funciona en teléfonos, tablets y escritorio

## 🎯 Funcionalidades Interactivas

### Sobre (Pantalla 1)
- Clic en el sobre para abrirlo
- Animación de pulso
- Efecto hover con escala

### Carta (Pantalla 2)
- Mensaje personalizado
- Decoraciones vintage
- Botón para cerrar y volver al sobre

### Botones Laterales
- ❤️ Like: Animación de escala
- 💬 Comentar: Feedback visual
- 🔖 Guardar: Feedback visual
- ↗️ Compartir: Web Share API o copiar enlace

## 🐛 Solución de Problemas

### La página no se abre
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de que tu navegador esté actualizado
- Intenta abrir con otro navegador

### Los estilos no se cargan
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Revisa que no haya errores de sintaxis en el CSS
- Limpia la caché del navegador (Ctrl+F5 o Cmd+Shift+R)

### El sobre no se abre al hacer clic
- Abre la consola del navegador (F12)
- Busca errores en JavaScript
- Verifica que `script.js` esté cargando correctamente

### En móvil no funciona bien
- Asegúrate de tener una buena conexión
- Actualiza tu navegador móvil
- Intenta en modo landscape (horizontal)

## 📱 Características Móviles

### Vibración
El proyecto usa la API de vibración en dispositivos compatibles:
- Vibración al abrir el sobre
- Vibración al cerrar la carta
- Vibración al interactuar con botones

### Compartir
En dispositivos móviles con Web Share API:
- Botón de compartir nativo
- Compartir por WhatsApp, Telegram, etc.
- Fallback a copiar enlace en navegadores sin soporte

## 💡 Ideas de Mejora

### Funcionalidades Futuras
- [ ] Agregar música de fondo
- [ ] Incluir más mensajes/páginas
- [ ] Galería de fotos
- [ ] Efecto de corazones flotantes
- [ ] Modo oscuro
- [ ] Múltiples idiomas
- [ ] Exportar como PDF
- [ ] Versión para imprimir

### Personalización Avanzada
- Cambiar fuentes (agregar Google Fonts)
- Agregar fotos personalizadas
- Incluir videos o GIFs
- Agregar contador regresivo
- Sistema de mensajes múltiples

## 📸 Capturas de Pantalla

### Pantalla 1 - Sobre Cerrado
Muestra el sobre con el nombre del destinatario y remitente, con un elegante sello de cera en el centro.

### Pantalla 2 - Carta Abierta
Revela el mensaje romántico con decoraciones vintage como encaje, corazones, moño y sello postal.

## 🎓 Recursos de Aprendizaje

Si quieres aprender más sobre las tecnologías usadas:
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## 📝 Licencia

Este proyecto es de uso libre. Puedes modificarlo y personalizarlo como desees.

## ❤️ Créditos

Diseño inspirado en las tarjetas virtuales de TikTok.
Desarrollado con amor para celebrar el Día de San Valentín.

---

## 🎉 ¡Disfruta tu Tarjeta!

Esperamos que esta tarjeta digital traiga sonrisas y amor a quien la reciba. 💝

**Tip:** Comparte el enlace por WhatsApp, mensaje de texto o email para sorprender a tu ser querido.
