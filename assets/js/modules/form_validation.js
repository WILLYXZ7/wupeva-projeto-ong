const validators = {
    nome: (input) => {
        const parts = input.value.trim().split(' ');
        if (parts.length < 2 || input.value.trim().length < 3) {
            return 'Por favor, digite seu nome completo.';
        }
        return '';
    },
    email: (input) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(input.value)) {
            return 'Por favor, digite um e-mail válido.';
        }
        return '';
    },
    cpf: (input) => {
        const cpfLimpo = input.value.replace(/\D/g, ''); 
        const regex = /^\d{11}$/;
        if (!regex.test(cpfLimpo)) {
            return 'O CPF deve conter 11 números.';
        }
        return '';
    },
    telefone: (input) => {
        const telLimpo = input.value.replace(/\D/g, '');
        const regex = /^\d{10,11}$/; 
        if (!regex.test(telLimpo)) {
            return 'O telefone deve ter 10 ou 11 números.';
        }
        return '';
    },
    cep: (input) => {
        const cepLimpo = input.value.replace(/\D/g, '');
        const regex = /^\d{8}$/; 
        if (!regex.test(cepLimpo)) {
            return 'O CEP deve ter 8 números.';
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
    
    if (input.required && !input.value) {
        showError(input, 'Este campo é obrigatório.');
        return false;
    }
    
    clearError(input);
    return true;
}

export function initFormValidation() {
    const form = document.querySelector('form[novalidate]');
    if (!form) {
        return;
    }

    const fieldsToValidate = form.querySelectorAll(Object.keys(validators).map(id => `#${id}`).join(', '));
    
    fieldsToValidate.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
    });

    form.addEventListener('submit', (e) => {
        let isFormValid = true;
        
        fieldsToValidate.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            e.preventDefault();
            alert('Por favor, corrija os erros no formulário antes de enviar.');
        } else {
        }
    });
}