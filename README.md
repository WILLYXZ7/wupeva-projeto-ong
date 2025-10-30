# WUPEVA - Projeto ONG (Front-End - WEB)

![Capa do Projeto WUPEVA](assets/images/capa-wupeva.png)

## 📖 Sobre o Projeto

Este repositório contém o código-fonte de um **Front-End SPA (Single Page Application) de alta performance e acessibilidade** para a ONG fictícia WUPEVA.

O projeto foi construído "do zero" (JS/CSS/HTML) como uma demonstração técnica, cumprindo rigorosamente todos os requisitos de entrega, incluindo **Acessibilidade (WCAG 2.1 AA)**, **Otimização para Produção** e um **Fluxo de Trabalho GitFlow** profissional.

---

## 🚀 Pilares Técnicos & Funcionalidades

Este projeto não é apenas um site estático; é uma aplicação web robusta com funcionalidades avançadas implementadas em JavaScript puro.

### 1. Arquitetura SPA (Single Page Application)

O site funciona como uma SPA, eliminando a necessidade de recarregar a página e proporcionando uma experiência de utilizador instantânea.

* **Roteador Customizado (`spa_router.js`):** Um roteador JavaScript foi criado para intercetar cliques em links, utilizar a `History API` (`pushState` e `popstate`) e carregar dinamicamente o conteúdo da página via `fetch()`.
* **Carregamento Otimizado:** O roteador foi configurado para requisitar *apenas* as versões minificadas das páginas (ex: `pagina.min.html`), garantindo que apenas o código otimizado seja transferido pela rede.
* **Scripts Sob Demanda:** O `main.js` injeta uma função de *callback* no roteador (`runPageSpecificScripts`), permitindo que scripts específicos (como os de formulário) sejam executados *apenas* quando a página relevante (ex: `cadastro.html`) é carregada.

### 2. Acessibilidade (WCAG 2.1 AA) como Foco

A acessibilidade não foi uma reflexão tardia, mas um pilar central da construção.

* **Sistema Tri-Tema (`theme_switcher.js`):** Mais do que um *dark mode*, o projeto implementa um sistema de tema triplo:
    1.  **Modo Claro** (Padrão)
    2.  **Modo Escuro**
    3.  **Modo de Alto Contraste** (WCAG AAA)
    O seletor salva a preferência do utilizador no `localStorage` e atualiza os atributos `data-theme` no HTML.
* **Navegação por Teclado e Semântica:** O HTML utiliza tags semânticas (`<main>`, `<nav>`, `<header>`, `<fieldset>`) e o menu *hamburger* é totalmente acessível, atualizando atributos `aria-expanded` via JavaScript.
* **Componentes Acessíveis:** Componentes como o Modal podem ser fechados com a tecla `Escape`, e todas as imagens contêm texto `alt` descritivo.

### 3. Otimização de Performance Extrema

Um fluxo de "build" manual foi implementado para garantir o menor tempo de carregamento possível, sem o uso de *frameworks*.

* **Minificação Total:** Todos os *assets* de produção (JavaScript, CSS e HTML) foram minificados.
* **CSS Bundling Manual:** O gargalo de performance dos `@import` foi resolvido. As 7 *partials* de CSS foram minificadas e "empacotadas" manualmente num **único ficheiro** `style.min.css`, reduzindo 8 pedidos de rede para apenas 1.
* **Otimização de Imagens:** Todas as imagens foram comprimidas e são servidas no formato moderno **`.webp`** (com *fallback* para `.jpg`/`.png` através da tag `<picture>`).
* **Estrutura Dev vs. Prod:** O repositório mantém os ficheiros de desenvolvimento legíveis (ex: `form_validation.js`) e os ficheiros de produção minificados (ex: `form_validation.min.js`), que são os únicos carregados pela aplicação.

### 4. Experiência de Formulário (UX) Avançada

O formulário de cadastro (`cadastro.html`) não é uma página estática, mas sim uma mini-aplicação.

* **Validação Dinâmica (`form_validation.js`):** Um sistema de validação customizado verifica os campos em tempo real (`blur`), validando nome completo (nome e apelido), e-mail (regex), CPF, telefone, CEP e datas (impede datas futuras).
* **Máscaras de Input (`form_masks.js`):** Conforme o utilizador digita, máscaras de formato são aplicadas para CPF, CEP e Telefone, melhorando a UX e garantindo a formatação correta dos dados.
* **Feedback Visual:** O formulário usa classes `.valid` e `.invalid` para dar feedback imediato ao utilizador.

### 5. Fluxo de Trabalho Git Profissional

O projeto foi gerido seguindo as melhores práticas do GitFlow:
* **Branches por Feature:** Cada nova funcionalidade (ex: `feature/issue-3-otimizacao`) foi desenvolvida numa *branch* isolada.
* **Issues & Commits Semânticos:** Todo o trabalho foi rastreado através de *Issues* e formalizado com *Commits Semânticos* (ex: `feat(optim)`, `docs:`).
* **Pull Requests:** O código só foi "mergeado" na *branch* `develop` após a abertura e revisão de um *Pull Request*.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Semântico, `<picture>`, `<main>`)
* **CSS3** (Variáveis CSS, Grid, Flexbox, Animações)
* **JavaScript (ES6+)** (Módulos `import`/`export`, `async`/`await`, `DOMParser`, `History API`)
* **Git & GitHub** (GitFlow, Issues, PRs)

---

## 🏁 Como Rodar o Projeto

Este projeto é uma SPA e **não vai funcionar corretamente** se abrir o `index.html` diretamente (devido à política de CORS do `fetch()`).

**É obrigatório o uso de um servidor local.**

A forma mais simples de executar é com a extensão **Live Server** do VS Code:

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/WILLYXZ7/wupeva-projeto-ong.git](https://github.com/WILLYXZ7/wupeva-projeto-ong.git)
    ```
2.  Abra a pasta no VS Code.
3.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (se ainda não a tiver).
4.  Clique com o botão direito no ficheiro `index.html` e selecione **"Open with Live Server"**.

---

## 👨‍💻 Autor

* **Wellynton Cardoso**
* **Nickname:** WILLYXZ7
* **LinkedIn:** [https://www.linkedin.com/in/wellyntoncardoso/](https://www.linkedin.com/in/wellyntoncardoso/)
* **GitHub:** [https://github.com/WILLYXZ7](https://github.com/WILLYXZ7)
