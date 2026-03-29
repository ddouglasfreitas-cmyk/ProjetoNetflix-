const STORAGE_KEY = "theme-preference"; // Chave usada para salvar o tema no localStorage.
const rootElement = document.documentElement; // Referencia o elemento <html> para aplicar o atributo de tema.
const themeToggleButton = document.getElementById("theme-toggle"); // Seleciona o botao toggle do tema.
const profileCards = document.querySelectorAll(".perfil"); // Seleciona os cards de perfil para aplicar interacoes.
const profileLinks = document.querySelectorAll(".perfil a"); // Seleciona links de perfil para transicao entre paginas.

function getPreferredTheme() {
    const storedTheme = localStorage.getItem(STORAGE_KEY); // Busca o tema salvo anteriormente no navegador.

    if (storedTheme === "dark" || storedTheme === "light") {
        return storedTheme; // Retorna o tema salvo se ele for valido.
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Verifica preferencia do sistema operacional.
    return prefersDark ? "dark" : "light"; // Define tema padrao com base na preferencia do sistema.
}

function updateToggleState(theme) {
    if (!themeToggleButton) {
        return; // Encerra se o botao nao existir no HTML.
    }

    const isDark = theme === "dark"; // Indica se o tema atual e escuro.
    const nextThemeLabel = isDark ? "Ativar modo claro" : "Ativar modo escuro"; // Texto acessivel indicando a proxima acao do botao.

    themeToggleButton.setAttribute("aria-pressed", String(isDark)); // Atualiza estado pressionado para leitores de tela.
    themeToggleButton.setAttribute("aria-label", nextThemeLabel); // Atualiza descricao acessivel do botao.
    themeToggleButton.setAttribute("title", nextThemeLabel); // Atualiza tooltip exibida ao passar o mouse.
}

function applyTheme(theme) {
    rootElement.setAttribute("data-theme", theme); // Aplica o tema no atributo data-theme do HTML.
    localStorage.setItem(STORAGE_KEY, theme); // Salva o tema escolhido para manter a preferencia.
    updateToggleState(theme); // Sincroniza o estado visual/acessivel do toggle.
}

function initializeTheme() {
    const initialTheme = getPreferredTheme(); // Descobre qual tema deve ser usado ao carregar a pagina.
    rootElement.setAttribute("data-theme", initialTheme); // Define o tema inicial no documento.
    updateToggleState(initialTheme); // Ajusta o toggle para refletir o tema inicial.
}

initializeTheme(); // Executa a inicializacao do tema assim que o script carrega.

if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
        const currentTheme = rootElement.getAttribute("data-theme") === "light" ? "light" : "dark"; // Le o tema atual aplicado no HTML.
        const nextTheme = currentTheme === "dark" ? "light" : "dark"; // Calcula o proximo tema alternando entre dark e light.
        applyTheme(nextTheme); // Aplica e salva o novo tema escolhido.
    });
}

function userPrefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Respeita usuarios que preferem menos movimento.
}

function revealProfiles() {
    profileCards.forEach((card, index) => {
        const revealDelay = index * 85; // Cria aparicao em cascata para os cards.

        window.setTimeout(() => {
            card.classList.add("is-visible"); // Torna card visivel com animacao de entrada.
        }, revealDelay);
    });
}

function resetCardTilt(card) {
    card.style.setProperty("--tilt-x", "0deg"); // Reseta inclinacao vertical.
    card.style.setProperty("--tilt-y", "0deg"); // Reseta inclinacao horizontal.
}

function setupCardTilt() {
    if (userPrefersReducedMotion()) {
        profileCards.forEach((card) => {
            card.classList.add("is-visible"); // Mantem cards estaticos para acessibilidade.
            resetCardTilt(card); // Garante que nao haja inclinacao residual.
        });

        return;
    }

    revealProfiles();

    profileCards.forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            if (event.pointerType === "touch") {
                return; // Evita calculos de tilt em toque.
            }

            const rect = card.getBoundingClientRect(); // Obtem dimensoes e posicao do card.
            const offsetX = event.clientX - rect.left; // Distancia do cursor ao canto esquerdo.
            const offsetY = event.clientY - rect.top; // Distancia do cursor ao topo.
            const normalizedX = (offsetX / rect.width) * 2 - 1; // Normaliza para faixa de -1 a 1 no eixo X.
            const normalizedY = (offsetY / rect.height) * 2 - 1; // Normaliza para faixa de -1 a 1 no eixo Y.
            const tiltY = normalizedX * 6; // Rotacao horizontal maxima em graus.
            const tiltX = normalizedY * -6; // Rotacao vertical maxima em graus.

            card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`); // Atualiza variavel CSS da inclinacao vertical.
            card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`); // Atualiza variavel CSS da inclinacao horizontal.
        });

        card.addEventListener("pointerleave", () => {
            resetCardTilt(card); // Reseta a inclinacao ao sair do card.
        });

        card.addEventListener("blur", () => {
            resetCardTilt(card); // Reseta inclinacao ao perder foco por teclado.
        }, true);
    });
}

setupCardTilt(); // Inicializa os efeitos interativos dos perfis.

function setupProfileTransition() {
    profileLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const destination = link.getAttribute("href"); // Captura destino do clique no perfil.
            const profileItem = link.closest(".perfil"); // Localiza card de perfil relacionado ao clique.
            const profileName = profileItem?.querySelector("figcaption")?.textContent?.trim(); // Captura nome do perfil.
            const profileImage = profileItem?.querySelector("img")?.getAttribute("src"); // Captura imagem do perfil.

            if (!destination) {
                return; // Mantem comportamento padrao se nao houver destino.
            }

            if (profileName) {
                localStorage.setItem("perfilAtivoNome", profileName); // Salva nome para personalizar navbar do catalogo.
            }

            if (profileImage) {
                // Corrige o caminho relativo para funcionar de dentro da pasta catalogo
                const correctedImagePath = profileImage.startsWith("../") ? profileImage : `../${profileImage}`;
                localStorage.setItem("perfilAtivoImagem", correctedImagePath); // Salva imagem para personalizar avatar no catalogo.
            }

            event.preventDefault(); // Interrompe navegacao imediata para aplicar animacao.
            document.body.classList.add("page-exit"); // Ativa classe de transicao de saida.

            window.setTimeout(() => {
                window.location.href = destination; // Navega apos a animacao curta.
            }, 280);
        });
    });
}

setupProfileTransition(); // Configura transicao ao entrar no catalogo.
