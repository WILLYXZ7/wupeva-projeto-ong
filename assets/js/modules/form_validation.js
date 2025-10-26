// assets/js/modules/form_validation.js

// Funções de validação específicas
const validators = {
    nome: (input) => {
        // Verifica se tem pelo menos duas palavras (nome e sobrenome)
        const parts = input.value.trim().split(' ');
        if (parts.length < 2) {
            return 'Por favor, digite seu nome completo.';
        }
        return ''; // Válido
    },
    email: (input) => {
        // Regex simples para checar formato de email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(input.value)) {
            return 'Por favor, digite um e-mail válido.';
        }
        return '';
    },
    cpf: (input) => {
        // A máscara tem 14 chars (123.456.789-00)
        if (input.value.length < 14) {
            return 'O CPF deve ter 11 dígitos.';
        }
        return '';
    },
    telefone: (input) => {
        // A máscara tem 15 chars ((11) 99999-9999)
        if (input.value.length < 15) {
            return 'O telefone deve ter 11 dígitos.';
        }
        return '';
    },
    cep: (input) => {
        // A máscara tem 9 chars (00000-000)
        if (input.value.length < 9) {
            return 'O CEP deve ter 8 dígitos.';
        }
        return '';
    },
    data_nasc: (input) => {
        const inputDate = new Date(input.value);
        const today = new Date();
        // Remove a hora para comparar só as datas
        today.setHours(0, 0, 0, 0); 
        
        if (!input.value) {
            return 'A data de nascimento é obrigatória.';
        }
        if (inputDate > today) {
            return 'A data não pode ser no futuro.';
        }
        return '';
    }
};

// Função para mostrar o erro
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.innerText = message;
        errorSpan.style.display = 'block';
    }
    input.classList.add('invalid');
    input.classList.remove('valid');
}

// Função para limpar o erro
function clearError(input) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.innerText = '';
        errorSpan.style.display = 'none';
    }
    input.classList.remove('invalid');
    input.classList.add('valid');
}

// Função de validação principal
function validateField(input) {
    const validator = validators[input.id];
    if (validator) {
        const errorMessage = validator(input);
        if (errorMessage) {
            showError(input, errorMessage);
            return false;
        }
    }
    // Se o campo for obrigatório e estiver vazio (mas não tiver validador)
    if (input.required && !input.value) {
        showError(input, 'Este campo é obrigatório.');
        return false;
    }
    
    clearError(input);
    return true;
}

// Função principal de inicialização
export function initFormValidation() {
    // Seleciona o formulário. IMPORTANTE: seu SPA pode ter várias páginas
    // então SÓ rode o script se o formulário existir na página atual.
    const form = document.querySelector('form[novalidate]');
    if (!form) {
        return; // Sai da função se não houver formulário na página
    }

    // Pega todos os campos que queremos validar (os que têm ID no objeto 'validators')
    const fieldsToValidate = form.querySelectorAll(Object.keys(validators).map(id => `#${id}`).join(', '));
    
    // Validação em tempo real (quando o usuário sai do campo)
    fieldsToValidate.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
    });

    // Validação final ao tentar enviar
    form.addEventListener('submit', (e) => {
        let isFormValid = true;
        
        // Valida todos os campos de uma vez
        fieldsToValidate.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        // Se qualquer campo for inválido, impede o envio
        if (!isFormValid) {
            e.preventDefault();
            alert('Por favor, corrija os erros no formulário antes de enviar.');
        } else {
            // (Opcional) Aqui você poderia mostrar um modal/toast de sucesso
            // e.preventDefault(); // Descomente para testes
            // alert('Formulário enviado com sucesso!');
        }
    });
}