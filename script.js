      // Función para verificar si un elemento está en el viewport
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Función para activar animaciones cuando la sección es visible
    function handleScrollAnimations() {
        const section = document.querySelector('#sobremi');
        const animateItems = section.querySelectorAll('.animate-item');
        
        if (isElementInViewport(section)) {
            // Añadir clase 'animate' a todos los elementos animables
            animateItems.forEach(item => {
                item.classList.add('animate');
            });
        } else {
            // Remover clase 'animate' cuando la sección no está visible
            // para reiniciar las animaciones la próxima vez
            animateItems.forEach(item => {
                item.classList.remove('animate');
            });
        }
    }
    
    // Ejecutar al cargar la página y en cada scroll
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', handleScrollAnimations);
        // Verificar también al cargar la página
        handleScrollAnimations();
    });
    // Función para verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Función para activar animaciones cuando la sección es visible
    function handleScrollAnimations() {
        const section = document.querySelector('#sobremi');
        const animateItems = section.querySelectorAll('.animate-item');
        
        if (isElementInViewport(section)) {
            // Añadir clase 'animate' a todos los elementos animables
            animateItems.forEach(item => {
                item.classList.add('animate');
            });
        } else {
            // Remover clase 'animate' cuando la sección no está visible
            // para reiniciar las animaciones la próxima vez
            animateItems.forEach(item => {
                item.classList.remove('animate');
            });
        }
    }
    
    // Ejecutar al cargar la página y en cada scroll
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', handleScrollAnimations);
        // Verificar también al cargar la página
        handleScrollAnimations();
    });

    // Función para mostrar/ocultar el menú móvil
    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });