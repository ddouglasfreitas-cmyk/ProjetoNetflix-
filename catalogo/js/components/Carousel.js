import { createCard } from './Card.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header for Title and Indicators
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    if (category.isTopList) {
        row.classList.add('is-top-list');
    }

    category.items.forEach(item => {
        if (category.isTopList && item.rank != null) {
            const wrapper = document.createElement('div');
            wrapper.className = 'top-list-item';

            const rankEl = document.createElement('div');
            rankEl.className = 'top-list-rank';
            rankEl.textContent = item.rank;

            const card = createCard(item);

            wrapper.appendChild(rankEl);
            wrapper.appendChild(card);
            row.appendChild(wrapper);
        } else {
            const card = createCard(item);
            row.appendChild(card);
        }
    });

    section.appendChild(row);
    return section;
}
