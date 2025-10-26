// assets/js/modules/form_masks.js

export function initFormMasks() {

    const inputCPF = document.getElementById('cpf');
    const inputCEP = document.getElementById('cep');
    const inputTelefone = document.getElementById('telefone');

    // Função genérica para aplicar máscaras
    function applyMask(input, maskFunction) {
        // Verifica se o input existe antes de adicionar o listener
        if (input) {
            input.addEventListener('input', function(e) {
                let value = e.target.value;
                e.target.value = maskFunction(value);
            });
        }
    }

    // --- Máscaras ---
    function maskCPF(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    function maskCEP(value) {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{5})(\d)/, '$1-$2');
    }

    function maskTelefone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d{4})$/, '$1-$2');
    }

    // Aplica as máscaras aos inputs corretos
    applyMask(inputCPF, maskCPF);
    applyMask(inputCEP, maskCEP);
    applyMask(inputTelefone, maskTelefone);
}