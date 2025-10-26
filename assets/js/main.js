
import { initNavigation } from './modules/navigation.js';
import { initFormMasks } from './modules/form_masks.js';
import { initFeedback } from './modules/feedback.js';
import { initRouter } from './modules/spa_router.js';
import { initFormValidation } from './modules/form_validation.js';
function runPageSpecificScripts() {
    initFormMasks(); 
    initFeedback();
    initFormValidation(); // 2. CHAMA AQUI
}
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initRouter(runPageSpecificScripts);
    runPageSpecificScripts();
});