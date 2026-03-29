import { platformCatalogs, defaultPlatformKey } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const THEME_STORAGE_KEY = 'theme-preference';
    const rootElement = document.documentElement;
    const themeToggleButton = document.getElementById('theme-toggle');
    const navbar = document.getElementById('navbar');
    const heroBanner = document.querySelector('.hero-banner');
    const heroPlayTrigger = document.getElementById('hero-play-trigger');
    const heroInfoTrigger = document.getElementById('hero-info-trigger');
    const heroInfoModal = document.getElementById('hero-info-modal');
    const heroModalClose = document.getElementById('hero-modal-close');
    const heroKicker = document.querySelector('.hero-kicker');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroModalKicker = document.querySelector('.hero-modal-kicker');
    const heroModalTitle = document.getElementById('hero-modal-title');
    const heroModalDescription = document.querySelector('.hero-modal-description');
    const heroModalMeta = document.querySelector('.hero-modal-meta');
    const heroTrailerFrame = document.getElementById('hero-trailer-frame');
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');
    const defaultHeroTrailerId = 'PlulyWs1kS4';
    const crunchyrollHeroTrailerId = 'OOmRInABehI';
    const defaultHeroBackground = 'linear-gradient(90deg, rgba(7, 7, 9, 0.92) 12%, rgba(7, 7, 9, 0.38) 50%, rgba(7, 7, 9, 0.9) 100%), url("https://img.youtube.com/vi/PlulyWs1kS4/maxresdefault.jpg") center 30%/cover no-repeat';
    const crunchyrollHeroBackground = 'linear-gradient(90deg, rgba(7, 7, 9, 0.92) 12%, rgba(7, 7, 9, 0.38) 50%, rgba(7, 7, 9, 0.9) 100%), url("https://i.redd.it/sypoeebfdvox.jpg") center 30%/cover no-repeat';
    const heroDefaultContent = {
        kicker: 'Destaque da Semana',
        title: 'Homem-Aranha: Um Novo Dia',
        description: 'Peter Parker enfrenta novos desafios, velhos inimigos e escolhas que podem mudar seu destino em uma aventura cheia de acao e emocao.',
        modalKicker: 'Filme em Destaque',
        modalTitle: 'Homem-Aranha: Um Novo Dia',
        modalDescription: 'Peter Parker encara um novo ciclo com desafios pessoais e ameacas inesperadas. Entre dilemas e grandes batalhas, ele precisara decidir ate onde vai para proteger quem ama.',
        modalMeta: ['Acao', 'Aventura', '2h 14m', 'HD']
    };
    const heroCrunchyrollContent = {
        kicker: 'Destaque Crunchyroll',
        title: 'Dragon Ball Super',
        description: 'Goku e seus amigos enfrentam adversarios poderosos em batalhas intensas para proteger a Terra e superar limites em cada saga.',
        modalKicker: 'Anime em Destaque',
        modalTitle: 'Dragon Ball Super',
        modalDescription: 'Uma jornada lendaria de artes marciais, energia e amizade. De torneios epicos a confrontos com viloes icônicos, Dragon Ball marcou geracoes.',
        modalMeta: ['Anime', 'Acao', 'Aventura', 'HD']
    };
    let heroTrailerId = defaultHeroTrailerId;
    let heroTrailerMutedSrc = `https://www.youtube.com/embed/${heroTrailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${heroTrailerId}`;
    let heroTrailerAudioSrc = `https://www.youtube.com/embed/${heroTrailerId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&loop=1&playlist=${heroTrailerId}`;
    let heroTrailerPinnedWithAudio = false;
    let heroTrailerMuted = false;
    const heroMuteTrigger = document.getElementById('hero-mute-trigger');
    const platformSwitcher = document.querySelector('.platform-switcher');
    const platformMenuTrigger = document.getElementById('platform-menu-trigger');
    const platformActiveBrand = document.getElementById('platform-active-brand');
    const platformButtons = document.querySelectorAll('.platform-option');
    const container = document.getElementById('main-content');
    const platformBrands = {
        geral: { label: 'Geral' },
        netflix: { label: 'Netflix+' },
        hbo: { label: 'HBO', logo: 'https://cdn.simpleicons.org/hbo/FFFFFF' },
        crunchyroll: { label: 'Crunchyroll', logo: 'https://cdn.simpleicons.org/crunchyroll/F47521' },
        disneyplus: { label: 'Disney+', logo: 'https://cdn.simpleicons.org/disneyplus/113CCF' },
        paramount: { label: 'Paramount+', logo: 'https://cdn.simpleicons.org/paramountplus/0064FF' }
    };

    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

        if (storedTheme === 'dark' || storedTheme === 'light') {
            return storedTheme;
        }

        return 'dark';
    };

    const updateToggleState = (theme) => {
        if (!themeToggleButton) {
            return;
        }

        const isDark = theme === 'dark';
        const nextThemeLabel = isDark ? 'Ativar modo claro' : 'Ativar modo escuro';

        themeToggleButton.setAttribute('aria-pressed', String(isDark));
        themeToggleButton.setAttribute('aria-label', nextThemeLabel);
        themeToggleButton.setAttribute('title', nextThemeLabel);
    };

    const applyTheme = (theme) => {
        rootElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        updateToggleState(theme);
    };

    const initializeTheme = () => {
        const initialTheme = getPreferredTheme();
        rootElement.setAttribute('data-theme', initialTheme);
        updateToggleState(initialTheme);
    };

    initializeTheme();

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = rootElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    const createBrandNode = (platformKey, label) => {
        const brand = platformBrands[platformKey];

        const textNode = document.createElement('span');
        textNode.className = 'platform-logo-text';

        if (platformKey === 'netflix' && label.includes('+')) {
            const brandText = document.createElement('span');
            brandText.textContent = label.replace('+', '');

            const plus = document.createElement('span');
            plus.className = 'logo-plus';
            plus.setAttribute('aria-hidden', 'true');
            plus.textContent = '+';

            textNode.append(brandText, plus);
        } else {
            textNode.textContent = label;
        }

        if (brand?.logo) {
            const img = document.createElement('img');
            img.src = brand.logo;
            img.alt = label;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.addEventListener('error', () => {
                img.replaceWith(textNode);
            });
            return img;
        }

        return textNode;
    };

    platformButtons.forEach((button) => {
        const key = button.dataset.platform;
        const label = button.textContent?.trim() || platformBrands[key]?.label || 'Plataforma';

        button.innerHTML = '';
        button.appendChild(createBrandNode(key, label));
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
    });

    const closePlatformMenu = () => {
        if (!platformSwitcher || !platformMenuTrigger) {
            return;
        }

        platformSwitcher.classList.remove('is-open');
        platformMenuTrigger.setAttribute('aria-expanded', 'false');
    };

    const openPlatformMenu = () => {
        if (!platformSwitcher || !platformMenuTrigger) {
            return;
        }

        platformSwitcher.classList.add('is-open');
        platformMenuTrigger.setAttribute('aria-expanded', 'true');
    };

    const playHeroTrailer = ({ withAudio = false, isMuted = false } = {}) => {
        if (!heroBanner || !heroTrailerFrame) {
            return;
        }

        heroBanner.classList.add('is-trailer-playing');
        heroPlayTrigger?.classList.toggle('is-audio-active', withAudio);

        // Usar isMuted se passado, senão usar o estado global
        const shouldBeMuted = isMuted !== undefined ? isMuted : heroTrailerMuted;
        const nextSrc = shouldBeMuted ? heroTrailerMutedSrc : heroTrailerAudioSrc;

        // Atualizar estado global
        heroTrailerMuted = shouldBeMuted;
        heroMuteTrigger?.setAttribute('aria-pressed', shouldBeMuted.toString());

        // Atualizar ícone
        if (heroMuteTrigger) {
            const icon = heroMuteTrigger.querySelector('i');
            if (icon) {
                icon.className = shouldBeMuted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
            }
        }

        if (heroTrailerFrame.src !== nextSrc) {
            heroTrailerFrame.src = nextSrc;
        }
    };

    const stopHeroTrailer = () => {
        if (!heroBanner || !heroTrailerFrame) {
            return;
        }

        heroBanner.classList.remove('is-trailer-playing');
        heroPlayTrigger?.classList.remove('is-audio-active');
        heroTrailerFrame.src = '';
    };

    const applyHeroByPlatform = (platformKey) => {
        if (!heroBanner) {
            return;
        }

        const nextTrailerId = platformKey === 'crunchyroll' ? crunchyrollHeroTrailerId : defaultHeroTrailerId;
        const content = platformKey === 'crunchyroll' ? heroCrunchyrollContent : heroDefaultContent;
        heroTrailerId = nextTrailerId;
        heroTrailerMutedSrc = `https://www.youtube.com/embed/${heroTrailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${heroTrailerId}`;
        heroTrailerAudioSrc = `https://www.youtube.com/embed/${heroTrailerId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&loop=1&playlist=${heroTrailerId}`;

        heroBanner.style.background = platformKey === 'crunchyroll' ? crunchyrollHeroBackground : defaultHeroBackground;

        if (heroKicker) heroKicker.textContent = content.kicker;
        if (heroTitle) heroTitle.textContent = content.title;
        if (heroDescription) heroDescription.textContent = content.description;
        if (heroModalKicker) heroModalKicker.textContent = content.modalKicker;
        if (heroModalTitle) heroModalTitle.textContent = content.modalTitle;
        if (heroModalDescription) heroModalDescription.textContent = content.modalDescription;
        if (heroModalMeta) {
            heroModalMeta.innerHTML = content.modalMeta.map((item) => `<span>${item}</span>`).join('');
        }

        stopHeroTrailer();
        heroTrailerPinnedWithAudio = false;
    };

    const openHeroModal = () => {
        if (!heroInfoModal) {
            return;
        }

        heroInfoModal.classList.add('is-open');
        heroInfoModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeHeroModal = () => {
        if (!heroInfoModal) {
            return;
        }

        heroInfoModal.classList.remove('is-open');
        heroInfoModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    };

    if (imagemPerfil) {
        const profileIcon = document.querySelector('.profile-icon');
        
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const resolvePlatformKey = (candidateKey) => {
        if (candidateKey && platformCatalogs[candidateKey]) {
            return candidateKey;
        }

        return defaultPlatformKey;
    };

    const renderCatalog = (platformKey) => {
        if (!container) {
            return;
        }

        const resolvedKey = resolvePlatformKey(platformKey);
        const platform = platformCatalogs[resolvedKey];

        applyHeroByPlatform(resolvedKey);

        container.innerHTML = '';

        platform.categories.forEach((category, index) => {
            const carousel = createCarousel(category);

            window.setTimeout(() => {
                carousel.classList.add('is-visible');
            }, 100 + index * 90);

            container.appendChild(carousel);
        });

        platformButtons.forEach((button) => {
            const isActive = button.dataset.platform === resolvedKey;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-selected', String(isActive));
        });

        if (platformActiveBrand) {
            platformActiveBrand.innerHTML = '';
            platformActiveBrand.appendChild(createBrandNode(resolvedKey, platform.label));
        }

        platformMenuTrigger?.setAttribute('aria-label', `Plataformas: ${platform.label}`);
    };

    renderCatalog(defaultPlatformKey);

    if (platformMenuTrigger) {
        platformMenuTrigger.addEventListener('click', () => {
            const isOpen = platformSwitcher?.classList.contains('is-open');

            if (isOpen) {
                closePlatformMenu();
                return;
            }

            openPlatformMenu();
        });
    }

    platformButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const nextKey = button.dataset.platform;
            renderCatalog(nextKey);
            closePlatformMenu();
        });
    });

    document.addEventListener('click', (event) => {
        const target = event.target;

        if (!(target instanceof HTMLElement) || !platformSwitcher) {
            return;
        }

        if (!platformSwitcher.contains(target)) {
            closePlatformMenu();
        }
    });

    if (navbar) {
        const updateNavbarState = () => {
            if (window.scrollY > 26) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        updateNavbarState();
        window.addEventListener('scroll', updateNavbarState, { passive: true });
    }

    if (heroPlayTrigger) {
        heroPlayTrigger.addEventListener('mouseenter', () => {
            if (!heroTrailerPinnedWithAudio) {
                playHeroTrailer({ withAudio: true, isMuted: false });
            }
        });

        heroPlayTrigger.addEventListener('mouseleave', () => {
            if (!heroTrailerPinnedWithAudio) {
                stopHeroTrailer();
            }
        });

        heroPlayTrigger.addEventListener('focus', () => {
            if (!heroTrailerPinnedWithAudio) {
                playHeroTrailer({ withAudio: true, isMuted: false });
            }
        });

        heroPlayTrigger.addEventListener('blur', () => {
            if (!heroTrailerPinnedWithAudio) {
                stopHeroTrailer();
            }
        });

        heroPlayTrigger.addEventListener('click', () => {
            if (!heroTrailerPinnedWithAudio) {
                heroTrailerPinnedWithAudio = true;
                playHeroTrailer({ withAudio: true, isMuted: heroTrailerMuted });
                return;
            }

            heroTrailerPinnedWithAudio = false;
            stopHeroTrailer();
        });
    }

    if (heroMuteTrigger) {
        heroMuteTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Alternar estado de mute
            heroTrailerMuted = !heroTrailerMuted;
            
            // Se o trailer está tocando, recarregar com novo estado de mute
            if (heroBanner?.classList.contains('is-trailer-playing')) {
                playHeroTrailer({ withAudio: true, isMuted: heroTrailerMuted });
            }
        });
    }

    if (heroInfoTrigger) {
        heroInfoTrigger.addEventListener('click', openHeroModal);
    }

    if (heroModalClose) {
        heroModalClose.addEventListener('click', closeHeroModal);
    }

    if (heroInfoModal) {
        heroInfoModal.addEventListener('click', (event) => {
            const target = event.target;

            if (!(target instanceof HTMLElement)) {
                return;
            }

            if (target.hasAttribute('data-close-modal')) {
                closeHeroModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePlatformMenu();
        }

        if (event.key === 'Escape' && heroInfoModal?.classList.contains('is-open')) {
            closeHeroModal();
        }
    });
});
