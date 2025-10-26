// assets/js/modules/navigation.js

export function initNavigation() {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // 1. Ativa/Desativa o menu
            navMenu.classList.toggle('active');
            
            // 2. Ativa/Desativa a animação do "X"
            hamburger.classList.toggle('active');

            // 3. Acessibilidade: Atualiza o aria-expanded
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- CÓDIGO DO DROPDOWN MOBILE ---
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-content');
    const dropdownLi = document.querySelector('.dropdown');

    if (dropdownToggle && dropdownMenu && dropdownLi) {
        dropdownToggle.addEventListener('click', function(e) {
            // Só ativa no modo mobile (quando o hambúrguer está visível)
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Impede o link de navegar
                dropdownLi.classList.toggle('active'); // Mostra o submenu
            }
        });
    }
}