# WUPEVA - Projeto ONG (Front-End SPA)

![Capa do Projeto WUPEVA](assets/images/capa-wupeva.png)
Este é o repositório do projeto front-end **WUPEVA**, uma Single Page Application (SPA) desenvolvida como entrega final para a disciplina de Desenvolvimento Front-End Para Web.

O projeto cumpre todos os requisitos técnicos obrigatórios, incluindo **Acessibilidade (WCAG 2.1 AA)**, **Otimização para Produção** e um fluxo de trabalho profissional com **GitFlow**.

---

## 🚀 Funcionalidades Principais

* **Single Page Application (SPA):** Navegação instantânea entre as páginas (`index`, `historia`, `projetos`, `cadastro`) sem recarregar o navegador, utilizando um roteador JavaScript customizado.
* **Acessibilidade (WCAG 2.1 AA):** O projeto é 100% acessível, implementando:
    * Navegação total por teclado.
    * Atributos ARIA para leitores de tela.
    * Contraste de cores validado (4.5:1).
    * Modo Escuro e Modo de Alto Contraste.
* **Otimização para Produção:** Todos os *assets* foram otimizados manualmente para performance:
    * **Minificação de JS, CSS e HTML.**
    * **Compressão de Imagens** (JPG, PNG).
    * **CSS Bundle:** Múltiplos arquivos CSS (`@import`) foram "empacotados" manualmente em um único arquivo `style.min.css` para eliminar gargalos de performance.
* **GitFlow Profissional:** O desenvolvimento seguiu um fluxo de trabalho com *Issues*, *Commits Semânticos* e *Pull Requests* para cada *feature*.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Estrutura semântica)
* **CSS3** (Arquitetura modular, BEM, CSS puros)
* **JavaScript (ES6+)** (Modular, com `import`/`export`, `async`/`await`)
* **Git & GitHub** (Controle de versão com GitFlow)

---

## 📂 Estrutura de Código

O projeto foi desenvolvido com uma estrutura que separa os arquivos de desenvolvimento (legíveis) dos arquivos de produção (minificados).

* **HTML:**
    * `*.html`: Arquivos de desenvolvimento, fáceis de editar.
    * `*.min.html`: Arquivos minificados que são carregados pelo roteador (`spa_router.js`) em produção.
* **JavaScript:**
    * `js/modules/*.js`: Módulos de desenvolvimento.
    * `js/modules/*.min.js`: Módulos minificados que são importados pelo `main.min.js`.
* **CSS:**
    * `css/partials/*.css`: Arquivos de desenvolvimento modulares (não minificados).
    * `css/style.min.css`: **Arquivo final de produção.** Este é um *bundle* manual de todas as *partials* já minificadas, garantindo um único download.

---

## 🏁 Como Rodar o Projeto

Este projeto é uma SPA que usa `fetch()` para carregar as páginas. Ele **não pode ser executado** apenas abrindo o `index.html` no navegador (devido à política de CORS).

**É necessário um servidor local.**

A forma mais simples de executar é com a extensão **Live Server** do VS Code:

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/WILLYXZ7/wupeva-projeto-ong.git](https://github.com/WILLYXZ7/wupeva-projeto-ong.git)
    ```
2.  Abra a pasta no VS Code.
3.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
4.  Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

---

## 👨‍💻 Autor

* **Wellynton Cardoso**
* **Nickname:** WILLYXZ7
* LinkedIn: https://www.linkedin.com/in/wellyntoncardoso/
* GitHub: https://github.com/WILLYXZ7
