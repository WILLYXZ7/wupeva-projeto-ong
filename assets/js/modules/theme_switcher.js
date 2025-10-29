const htmlEl = document.documentElement;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const contrastToggle = document.getElementById('contrast-toggle');
const moonIcon = document.querySelector('#dark-mode-toggle .fa-moon');
const sunIconClass = 'fa-sun';
const moonIconClass = 'fa-moon';

// Aplica o tema escolhido ao HTML e salva no localStorage
function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Atualiza o ícone do botão dark mode (lua/sol)
    if (moonIcon) {
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
    // Sai se os botões não existirem na página atual
    if (!darkModeToggle || !contrastToggle) return; 

    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Verifica preferência do sistema operacional
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Adiciona evento ao botão dark mode
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Adiciona evento ao botão alto contraste
    contrastToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        // Se já está em contraste, volta ao claro, senão, aplica contraste
        setTheme(currentTheme === 'contrast' ? 'light' : 'contrast');
    });
}