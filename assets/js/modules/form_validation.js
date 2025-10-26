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
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(input.value)) {
            return 'Por favor, digite um e-mail válido.';
        }
        return '';
    },
    cpf: (input) => {
        if (input.value.length < 14) {
            return 'O CPF deve ter 11 dígitos.';
        }
        return '';
    },
    telefone: (input) => {
        if (input.value.length < 15) {
            return 'O telefone deve ter 11 dígitos.';
        }
        return '';
    },
    cep: (input) => {
        if (input.value.length < 9) {
            return 'O CEP deve ter 8 dígitos.';
        }
        return '';
    },
    data_nasc: (input) => {
        const inputDate = new Date(input.value);
        const today = new Date();
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
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.innerText = message;
        errorSpan.style.display = 'block';
    }
    input.classList.add('invalid');
    input.classList.remove('valid');
}
function clearError(input) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
        errorSpan.innerText = '';
        errorSpan.style.display = 'none';
    }
    input.classList.remove('invalid');
    input.classList.add('valid');
}
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
        }
    });
}