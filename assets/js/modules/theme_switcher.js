/* CÓDIGO CORRIGIDO PARA: assets/js/modules/theme_switcher.js */

const htmlEl = document.documentElement;
const sunIconClass = 'fa-sun';
const moonIconClass = 'fa-moon';

// Esta função é chamada pela init e também no primeiro carregamento
function setTheme(theme, darkModeToggle, moonIcon) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Atualiza o ícone e o aria-label
    if (moonIcon && darkModeToggle) {
        if (theme === 'dark') {
            moonIcon.classList.remove(moonIconClass);
            moonIcon.classList.add(sunIconClass);
            darkModeToggle.setAttribute('aria-label', 'Ativar Modo Claro');
        } else {
            moonIcon.classList.remove(sunIconClass);
            moonIcon.classList.add(moonIconClass);
            darkModeToggle.setAttribute('aria-label', 'Ativar Modo Escuro');
        }
    }
}

// Inicializa o seletor de tema
export function initThemeSwitcher() {
    
    // As variáveis agora são procuradas SÓ QUANDO a função é chamada
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const contrastToggle = document.getElementById('contrast-toggle');
    const moonIcon = document.querySelector('#dark-mode-toggle .fa-moon');

    // Se os botões não existirem, a função para
    if (!darkModeToggle || !contrastToggle || !moonIcon) {
        return; 
    }

    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme, darkModeToggle, moonIcon);
    } else {
        // Verifica preferência do sistema operacional
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light', darkModeToggle, moonIcon);
    }

    // Adiciona evento ao botão dark mode
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark', darkModeToggle, moonIcon);
    });

    // Adiciona evento ao botão alto contraste
    contrastToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        // Se já está em contraste, volta ao claro, senão, aplica contraste
        setTheme(currentTheme === 'contrast' ? 'light' : 'contrast', darkModeToggle, moonIcon);
    });
}