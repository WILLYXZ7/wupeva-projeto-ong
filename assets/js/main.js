// assets/js/main.js

import { initNavigation } from './modules/navigation.js';
import { initFormMasks } from './modules/form_masks.js';
import { initFeedback } from './modules/feedback.js';
import { initRouter } from './modules/spa_router.js';
import { initFormValidation } from './modules/form_validation.js'; // 1. IMPORTA AQUI

/**
 * Agrupa os scripts que precisam rodar 
 * toda vez que uma nova página é carregada pelo SPA.
 */
function runPageSpecificScripts() {
    initFormMasks(); 
    initFeedback();
    initFormValidation(); // 2. CHAMA AQUI
}

// Roda tudo quando a página carrega pela primeira vez
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initRouter(runPageSpecificScripts);
    runPageSpecificScripts();
});