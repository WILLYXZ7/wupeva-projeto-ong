// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Encontra os inputs pelos seus IDs
    const inputCPF = document.getElementById('cpf');
    const inputCEP = document.getElementById('cep');
    const inputTelefone = document.getElementById('telefone');

    // Função genérica para aplicar máscaras
    // 'mask' é a função que formata o valor
    function applyMask(input, mask) {
        input.addEventListener('input', function(e) {
            let value = e.target.value;
            e.target.value = mask(value);
        });
    }

    // Máscaras

    // Máscara para CPF: XXX.XXX.XXX-XX
    function maskCPF(value) {
        return value
            .replace(/\D/g, '') // Remove tudo que não for dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto depois dos 3 primeiros dígitos
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto depois dos 3 seguintes
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen antes dos 2 últimos
    }

    // Máscara para CEP: XXXXX-XXX
    function maskCEP(value) {
        return value
            .replace(/\D/g, '') // Remove tudo que não for dígito
            .replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca hífen depois dos 5 primeiros dígitos
    }

    // Máscara para Telefone: (XX) XXXXX-XXXX
    function maskTelefone(value) {
        return value
            .replace(/\D/g, '') // Remove tudo que não for dígito
            .replace(/^(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos 2 primeiros dígitos
            .replace(/(\d{5})(\d{4})$/, '$1-$2'); // Coloca hífen antes dos 4 últimos
    }

    // Aplica as máscaras aos inputs corretos
    if (inputCPF) {
        applyMask(inputCPF, maskCPF);
    }
    if (inputCEP) {
        applyMask(inputCEP, maskCEP);
    }
    if (inputTelefone) {
        applyMask(inputTelefone, maskTelefone);
    }

});
document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // 1. Ativa/Desativa o menu
            navMenu.classList.toggle('active');
            
            // 2. Ativa/Desativa a animação do "X"
            hamburger.classList.toggle('active');

            // 3. Acessibilidade: Atualiza o aria-expanded
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }
    const dropdownToggle = document.querySelector('.dropdown > a');
    const dropdownMenu = document.querySelector('.dropdown-content');
    const dropdownLi = document.querySelector('.dropdown');

    if (dropdownToggle && dropdownMenu && dropdownLi) {
        dropdownToggle.addEventListener('click', function(e) {
            // Só ativa no modo mobile (quando o hambúrguer está visível)
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Impede o link de navegar
                dropdownLi.classList.toggle('active'); // Mostra o submenu
            }
        });
    }

});