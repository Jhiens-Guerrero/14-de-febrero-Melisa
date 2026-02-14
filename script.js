/**
 * =====================================================
 * TARJETA DE SAN VALENTÍN INTERACTIVA
 * =====================================================
 * 
 * Este script maneja la interactividad de la tarjeta:
 * - Cambio entre pantalla de sobre cerrado y carta abierta
 * - Animaciones suaves entre transiciones
 * - Eventos de clic en elementos interactivos
 */

// =====================================================
// VARIABLES GLOBALES
// =====================================================

// Obtener referencia a las tres pantallas principales
const screen1 = document.querySelector('.screen-1'); // Pantalla del sobre cerrado
const screen2 = document.querySelector('.screen-2'); // Pantalla de la carta abierta
const screen3 = document.querySelector('.screen-3'); // Pantalla del jardín de flores

// Obtener elementos interactivos
const envelope = document.querySelector('.envelope'); // El sobre que se puede clickear
const arrowBtn = document.querySelector('.arrow-btn'); // Botón de flecha para cerrar

// Variable para controlar qué pantalla está activa (1, 2, o 3)
let currentScreen = 1;

// =====================================================
// FUNCIONES PRINCIPALES
// =====================================================

/**
 * Función para cambiar entre pantallas
 * @param {number} screenNumber - Número de pantalla a mostrar (1, 2, o 3)
 */
function goToScreen(screenNumber) {
    // Ocultar todas las pantallas
    screen1.classList.remove('active');
    screen2.classList.remove('active');
    screen3.classList.remove('active');
    
    // Mostrar la pantalla solicitada después de una pequeña pausa
    setTimeout(() => {
        if (screenNumber === 1) {
            screen1.classList.add('active');
            currentScreen = 1;
        } else if (screenNumber === 2) {
            screen2.classList.add('active');
            currentScreen = 2;
        } else if (screenNumber === 3) {
            screen3.classList.add('active');
            currentScreen = 3;
        }
    }, 300);
}

/**
 * Función para abrir la carta
 * Realiza la transición de la pantalla 1 (sobre) a la pantalla 2 (carta)
 */
function openLetter() {
    goToScreen(2);
    
    // Reproducir sonido de apertura (opcional - comentado por defecto)
    // playSound('open');
}

/**
 * Función para ir al jardín de flores
 * Realiza la transición de la pantalla 2 (carta) a la pantalla 3 (jardín)
 */
function goToGarden() {
    goToScreen(3);
}

/**
 * Función para cerrar la carta y volver al inicio
 * Realiza la transición a la pantalla 1 (sobre)
 */
function closeLetter() {
    goToScreen(1);
    
    // Reproducir sonido de cierre (opcional - comentado por defecto)
    // playSound('close');
}

// =====================================================
// EVENT LISTENERS - EVENTOS DE INTERACCIÓN
// =====================================================

/**
 * Evento: Click en el sobre
 * Cuando el usuario hace clic en el sobre, se abre la carta
 */
envelope.addEventListener('click', function() {
    openLetter();
    
    // Agregar pequeña vibración en dispositivos móviles que lo soporten
    if (navigator.vibrate) {
        navigator.vibrate(50); // Vibración de 50ms
    }
});

/**
 * Evento: Click en el botón de flecha de la pantalla 2
 * Cuando el usuario hace clic en la flecha, va al jardín de flores (pantalla 3)
 */
arrowBtn.addEventListener('click', function() {
    if (currentScreen === 2) {
        goToGarden();
    }
    
    // Agregar pequeña vibración en dispositivos móviles que lo soporten
    if (navigator.vibrate) {
        navigator.vibrate(50); // Vibración de 50ms
    }
});

/**
 * Evento: Click en el botón home de la pantalla 3
 * Cuando el usuario hace clic en el botón home, vuelve al inicio
 */
const homeBtn = document.querySelector('.home-btn');
if (homeBtn) {
    homeBtn.addEventListener('click', function() {
        closeLetter();
        
        // Agregar pequeña vibración en dispositivos móviles que lo soporten
        if (navigator.vibrate) {
            navigator.vibrate(50); // Vibración de 50ms
        }
    });
}

// =====================================================
// BOTONES LATERALES DE INTERACCIÓN
// =====================================================

/**
 * Manejo de botones laterales (like, comment, save, share)
 * Estos botones son decorativos pero pueden tener funcionalidad
 */

const likeBtn = document.querySelector('.like-btn');
const commentBtn = document.querySelector('.comment-btn');
const saveBtn = document.querySelector('.save-btn');
const shareBtn = document.querySelector('.share-btn');

/**
 * Botón de Like
 * Muestra un mensaje de confirmación cuando se presiona
 */
likeBtn.addEventListener('click', function() {
    // Efecto visual de animación
    this.style.transform = 'scale(1.3)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Mensaje opcional
    // alert('¡Te ha gustado esta tarjeta! ❤️');
});

/**
 * Botón de Comentario
 * Podría abrir un modal de comentarios (implementación futura)
 */
commentBtn.addEventListener('click', function() {
    this.style.transform = 'scale(1.3)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // console.log('Abrir sección de comentarios');
});

/**
 * Botón de Guardar
 * Podría guardar la tarjeta en favoritos (implementación futura)
 */
saveBtn.addEventListener('click', function() {
    this.style.transform = 'scale(1.3)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // console.log('Tarjeta guardada en favoritos');
});

/**
 * Botón de Compartir
 * Utiliza la Web Share API para compartir la tarjeta (si está disponible)
 */
shareBtn.addEventListener('click', function() {
    this.style.transform = 'scale(1.3)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Verificar si el navegador soporta la API de compartir
    if (navigator.share) {
        navigator.share({
            title: 'Happy Valentine my Love',
            text: '¡Mira esta hermosa tarjeta de San Valentín! 💝',
            url: window.location.href
        }).then(() => {
            console.log('Tarjeta compartida exitosamente');
        }).catch((error) => {
            console.log('Error al compartir:', error);
        });
    } else {
        // Si no está disponible, copiar URL al portapapeles
        copyToClipboard(window.location.href);
        showNotification('¡Enlace copiado al portapapeles! 📋');
    }
});

// =====================================================
// FUNCIONES AUXILIARES
// =====================================================

/**
 * Función para copiar texto al portapapeles
 * @param {string} text - Texto a copiar
 */
function copyToClipboard(text) {
    // Crear elemento temporal
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

/**
 * Función para mostrar notificaciones temporales
 * @param {string} message - Mensaje a mostrar
 */
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: #8B1F1F;
        padding: 15px 30px;
        border-radius: 25px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        font-size: 16px;
        font-weight: bold;
        animation: fadeInOut 3s ease;
    `;
    
    // Agregar al documento
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// =====================================================
// EFECTOS ADICIONALES
// =====================================================

/**
 * Efecto de partículas/corazones flotantes (opcional)
 * Descomentá esta función para agregar corazones animados
 */
/*
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            bottom: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 20}px;
            animation: floatUp 4s linear;
            pointer-events: none;
            z-index: 1;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 500);
}

// Agregar animación CSS para los corazones flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        from {
            bottom: -50px;
            opacity: 1;
        }
        to {
            bottom: 110vh;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Descomentar para activar los corazones flotantes
// createFloatingHearts();
*/

/**
 * Función para reproducir sonidos (opcional)
 * Requiere archivos de audio en la carpeta del proyecto
 */
/*
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(e => console.log('No se pudo reproducir el sonido:', e));
}
*/

// =====================================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// =====================================================

/**
 * Detectar si el usuario está en un dispositivo móvil
 * para ajustar la experiencia
 */
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Agregar clase al body si es móvil
if (isMobile()) {
    document.body.classList.add('mobile');
}

// =====================================================
// PREVENCIÓN DE GESTOS POR DEFECTO EN MÓVILES
// =====================================================

/**
 * Evitar comportamientos por defecto en móviles
 * como el zoom al hacer doble tap
 */
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// =====================================================
// MENSAJE DE BIENVENIDA EN CONSOLA
// =====================================================

console.log('%c❤️ Happy Valentine my Love ❤️', 
    'color: #C41E3A; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cTarjeta creada con amor 💝', 
    'color: #8B1F1F; font-size: 16px; font-style: italic;');

// =====================================================
// INICIALIZACIÓN
// =====================================================

/**
 * Función que se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ Tarjeta de San Valentín cargada exitosamente');
    
    // Asegurar que la pantalla 1 esté activa al inicio
    screen1.classList.add('active');
    screen2.classList.remove('active');
    screen3.classList.remove('active');
    currentScreen = 1;
});
