import { initNavigation } from './modules/navigation.min.js';
import { initFormMasks } from './modules/form_masks.min.js';
import { initFeedback } from './modules/feedback.min.js';
import { initRouter } from './modules/spa_router.min.js';
import { initFormValidation } from './modules/form_validation.min.js';
// Importa o novo módulo de tema
import { initThemeSwitcher } from './modules/theme_switcher.min.js';

// Agrupa scripts que rodam a cada carregamento de página do SPA
function runPageSpecificScripts() {
    initFormMasks();
    initFeedback();
    initFormValidation();
}

// Roda tudo quando a página inicial carrega
document.addEventListener('DOMContentLoaded', () => {

    // Inicia o seletor de tema ANTES de tudo
    initThemeSwitcher();

    // Inicia a navegação (só precisa rodar uma vez)
    initNavigation();

    // Inicia o roteador SPA, passando a função de scripts especificos
    initRouter(runPageSpecificScripts);

    // Roda os scripts da página inicial
    runPageSpecificScripts();
});