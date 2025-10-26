// assets/js/modules/spa_router.js

// O 'callback' é uma função que passaremos (para re-iniciar as máscaras do form)
let onContentLoadCallback;

/**
 * Busca o conteúdo da página e injeta no DOM.
 */
async function loadContent(path, mainContent) {
    try {
        // 1. Busca o arquivo HTML (ex: "projetos.html")
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Erro ao carregar ${path}: ${response.statusText}`);
        }
        
        const html = await response.text();

        // 2. Cria um documento temporário para "ler" o HTML buscado
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 3. "Arranca" o <main> e o <title> do documento buscado
        const newContent = doc.querySelector('main').innerHTML;
        const newTitle = doc.querySelector('title').innerText;

        // 4. Injeta o novo conteúdo na "casca" (index.html)
        mainContent.innerHTML = newContent;
        document.title = newTitle;
        
        // 5. Rola a página para o topo
        window.scrollTo(0, 0);

        // 6. Roda os scripts específicos da página (ex: máscaras de form)
        if (onContentLoadCallback) {
            onContentLoadCallback();
        }

    } catch (error) {
        console.error('Falha no carregamento da página:', error);
        // (Opcional: redirecionar para uma página de erro)
    }
}

/**
 * Inicia o roteador SPA.
 */
export function initRouter(callback) {
    
    // 1. Guarda o callback para usarmos depois
    onContentLoadCallback = callback;
    
    const mainContent = document.getElementById('page-content');
    if (!mainContent) {
        console.error('Elemento #page-content não encontrado. O SPA não pode iniciar.');
        return;
    }

    // 2. Escuta cliques em links
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a'); // Acha o link, mesmo se clicar no ícone/texto

        // Se não for um link, ou for um link externo, ignora
        if (!link || link.target === '_blank' || !link.href.startsWith(window.location.origin)) {
            return;
        }

        // Se for um link de âncora (ex: #voluntariado), ignora
        if (link.pathname === window.location.pathname && link.hash) {
            return; 
        }

        e.preventDefault(); // Impede o recarregamento!
        const path = link.pathname; // ex: "/wupeva-projeto-ong/projetos.html"
        
        // Não recarrega se já estiver na página
        if (path === window.location.pathname) {
            return;
        }

        // 3. Atualiza a URL e carrega o conteúdo
        history.pushState({ path }, '', path);
        loadContent(path, mainContent);
    });

    // 4. Escuta os botões "Voltar" e "Avançar" do navegador
    window.addEventListener('popstate', (e) => {
        // Pega o caminho da URL atual (após o GitHub Pages)
        const relativePath = window.location.pathname.replace('/wupeva-projeto-ong', '');
        
        // Garante que não quebre em caminhos vazios
        const path = relativePath === '/' || relativePath === '' ? 'index.html' : relativePath;

        loadContent(path, mainContent);
    });
}