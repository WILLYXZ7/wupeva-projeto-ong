let onContentLoadCallback;
async function loadContent(path, mainContent) {
    try {
        const minPath = path.replace('.html', '.min.html');
        const response = await fetch(minPath);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('main').innerHTML;
        const newTitle = doc.querySelector('title').innerText;
        mainContent.innerHTML = newContent;
        document.title = newTitle;
        window.scrollTo(0, 0);
        if (onContentLoadCallback) {
            onContentLoadCallback();
        }

    } catch (error) {
        console.error('Falha no carregamento da página:', error);
    }
}
export function initRouter(callback) {
    onContentLoadCallback = callback;
    
    const mainContent = document.getElementById('page-content');
    if (!mainContent) {
        console.error('Elemento #page-content não encontrado. O SPA não pode iniciar.');
        return;
    }
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a'); // Acha o link, mesmo se clicar no ícone/texto
        if (!link || link.target === '_blank' || !link.href.startsWith(window.location.origin)) {
            return;
        }
        if (link.pathname === window.location.pathname && link.hash) {
            return; 
        }

        e.preventDefault(); // Impede o recarregamento!
        const path = link.pathname; 
        
        // Não recarrega se já estiver na página
        if (path === window.location.pathname) {
            return;
        }
        history.pushState({ path }, '', path);
        loadContent(path, mainContent);
    });
    window.addEventListener('popstate', (e) => {
        const relativePath = window.location.pathname.replace('/wupeva-projeto-ong', '');
        const path = relativePath === '/' || relativePath === '' ? 'index.html' : relativePath;

        loadContent(path, mainContent);
    });
}