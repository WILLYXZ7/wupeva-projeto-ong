export function initFeedback() {

    // MODAL
    const modalOverlay = document.getElementById('test-modal');
    const showModalBtn = document.getElementById('show-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const closeModalBtn2 = document.getElementById('close-modal-btn-2');

    function openModal() {
        if (modalOverlay) modalOverlay.classList.add('active');
    }

    function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
    }


    // Fecha o modal ao pressionar a tecla ESC
    function handleEscKey(event) {
    if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
    }
    }
    document.addEventListener('keydown', handleEscKey);


    if (showModalBtn) {
    showModalBtn.addEventListener('click', openModal);
    }
    if (showModalBtn) showModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (closeModalBtn2) closeModalBtn2.addEventListener('click', closeModal);
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
    }
    // TOAST
    const showToastBtn = document.getElementById('show-toast-btn');
    const toastContainer = document.getElementById('toast-container');

    function showToast(message) {
        if (toastContainer) {
            const toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerText = message;
            toastContainer.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('hide');
                toast.addEventListener('animationend', () => toast.remove());
            }, 3000);
        }
    }

    if (showToastBtn) {
        showToastBtn.addEventListener('click', function() {
            showToast('Exemplo de notificação toast!');
        });
    }
}