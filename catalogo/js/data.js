const netflixCategories = [
    {
        title: "Top 5 Filmes mais Assistidos",
        isTopList: true,
        items: [
            {
                rank: 1,
                img: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/5145/thumb_42ea35199540b0bea0d8a01ab415c46e.jpg",
                youtube: "https://www.youtube.com/watch?v=PlulyWs1kS4"
            },
            {
                rank: 2,
                img: "https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/se-filtra-trailer-de-avengers-doomsday-y-confirma-el-retorno-de-una-leyenda-del-mcu/se-filtra-trailer-de-avengers-doomsday-y-confirma-el-retorno-de-una-leyenda-del-mcu_fbd2a27e-00c2-480b-afe5-cdd03a5ff5f9_medialjnimgndimage=fullsize",
                youtube: "https://www.youtube.com/watch?v=3k9vXZ1A2O0"
            },
            {
                rank: 3,
                img: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/02/toy-story.png?w=1200&h=900&crop=0",
                youtube: "https://www.youtube.com/watch?v=-YbiBclEEgo"
            },
            {
                rank: 4,
                img: "https://episodemag.com/wp-content/uploads/2026/03/Dune-Part-3-scaled-1.jpg",
                youtube: "https://www.youtube.com/watch?v=eaauqjk-W3k"
            },
            {
                rank: 5,
                img: "https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2025/10/Scream-7-Header-FUTURE-OF-THE-FORCE.jpg?resize=1024%2C576&ssl=1",
                youtube: "https://www.youtube.com/watch?v=3R9o8R8O7F8&t=3s"
            }
        ]
    },
    {
        title: "Series Aclamadas",
        items: [
            { img: "https://uploads.tracklist.com.br/file/uploads-tracklist-com-br/2019/04/game-of-thrones.jpg", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wSM7JP6sFg8" },
            { img: "https://blackcompany.com.br/wp-content/uploads/2026/01/one-piece-serie-capa.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=KLtSxOirH4g" },
            { img: "https://wallpapers.com/images/hd/breaking-bad-series-cover-7lj0pi78smszhiqt.jpg", badge: "Novo episodio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=2gTC4uWP3_Y" },
            { img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/d9395a4b-7528-4317-a084-8496af0aaafe/compose?aspectRatio=1.78&format=webp&width=1200", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" }
        ]
    },
    {
        title: "Anime",
        items: [
            { img: "https://i.redd.it/sypoeebfdvox.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=OOmRInABehI"},
            { img: "https://www.plgcolecionaveis.com.br/noticias_imgs/2528.jpg", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=VjLMbioyhU0" },
            { img: "https://wallpapers.com/images/hd/fullmetal-alchemist-brotherhood-action-poster-0tvvnvos36llm4yx.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=kx0nBaS_q50" },
            { img: "https://www.baltana.com/files/wallpapers-36/Jujutsu-Kaisen-Widescreen-Wallpapers-126415.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=-9VItl2M2JE" }
        ]
    }
];

const hboCategories = [
    {
        title: "Top 5 HBO",
        isTopList: true,
        items: [
            { rank: 1, img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" },
            { rank: 2, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" },
            { rank: 3, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" },
            { rank: 4, img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" },
            { rank: 5, img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" }
        ]
    },
    {
        title: "Dramas premiados",
        items: [
            { img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1200&auto=format&fit=crop", badge: "Exclusivo", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=1200&auto=format&fit=crop", badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1502209524168-aca664d40c1f?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" }
        ]
    }
];

const crunchyrollCategories = [
    {
        title: "Top 5 Crunchyroll",
        isTopList: true,
        items: [
            { rank: 1, img: "https://i.redd.it/sypoeebfdvox.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=OOmRInABehI"},
            { rank: 2, img: "https://www.plgcolecionaveis.com.br/noticias_imgs/2528.jpg", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=VjLMbioyhU0" },
            { rank: 3, img: "https://wallpapers.com/images/hd/fullmetal-alchemist-brotherhood-action-poster-0tvvnvos36llm4yx.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=kx0nBaS_q50" },
            { rank: 4, img: "https://www.baltana.com/files/wallpapers-36/Jujutsu-Kaisen-Widescreen-Wallpapers-126415.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=-9VItl2M2JE" },
            { rank: 5, img: "https://animeflix.com.br/wp-content/uploads/2025/01/One-Piece-Nova-temporada-estreia-em-fevereiro.jpg", badge: "Novo episodio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" }

        ]
    },
    {
        title: "Anime em alta",
        items: [
            { img: "https://www.baltana.com/files/wallpapers-36/Jujutsu-Kaisen-Widescreen-Wallpapers-126415.jpg", badge: "Simuldub", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1200&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1618336754154-2a8cbe76d282?q=80&w=1200&auto=format&fit=crop", badge: "Novo episodio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" }
        ]
    }
];

const disneyCategories = [
    {
        title: "Top 5 Disney+",
        isTopList: true,
        items: [
            { rank: 1, img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
            { rank: 2, img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
            { rank: 3, img: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
            { rank: 4, img: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
            { rank: 5, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=JfVOs4VSpmA" }
        ]
    },
    {
        title: "Familia e aventura",
        items: [
            { img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop", badge: "Original", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1200&auto=format&fit=crop", badge: "Novo", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=1200&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" }
        ]
    }
];

const paramountCategories = [
    {
        title: "Top 5 Paramount+",
        isTopList: true,
        items: [
            { rank: 1, img: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=YhXK5e5qB8M" },
            { rank: 2, img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=YhXK5e5qB8M" },
            { rank: 3, img: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=YhXK5e5qB8M" },
            { rank: 4, img: "https://images.unsplash.com/photo-1512070800540-0d17f5f0bcfa?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=YhXK5e5qB8M" },
            { rank: 5, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=YhXK5e5qB8M" }
        ]
    },
    {
        title: "Acao e suspense",
        items: [
            { img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop", badge: "Popular", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop", badge: "Novo", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" }
        ]
    }
];

const geralCategories = [
    {
        title: "Top 5 Geral",
        isTopList: true,
        items: [
            { rank: 1, ...netflixCategories[0].items[0] },
            { rank: 2, ...hboCategories[0].items[0] },
            { rank: 3, ...crunchyrollCategories[0].items[0] },
            { rank: 4, ...disneyCategories[0].items[0] },
            { rank: 5, ...paramountCategories[0].items[0] }
        ]
    },
    {
        title: "Mix da semana",
        items: [
            netflixCategories[1].items[0],
            hboCategories[1].items[0],
            crunchyrollCategories[1].items[0],
            disneyCategories[1].items[0],
            paramountCategories[1].items[0]
        ]
    },
    {
        title: "Novidades em alta",
        items: [
            netflixCategories[1].items[1],
            hboCategories[1].items[1],
            crunchyrollCategories[1].items[1],
            disneyCategories[1].items[1],
            paramountCategories[1].items[1]
        ]
    }
];

export const defaultPlatformKey = 'geral';

export const platformCatalogs = {
    geral: {
        label: 'Geral',
        categories: netflixCategories
    },
    hbo: {
        label: 'HBO',
        categories: hboCategories
    },
    crunchyroll: {
        label: 'Crunchyroll',
        categories: crunchyrollCategories
    },
    disneyplus: {
        label: 'Disney+',
        categories: disneyCategories
    },
    paramount: {
        label: 'Paramount+',
        categories: paramountCategories
    }
};

// Mantem compatibilidade caso outro arquivo ainda use `categories`.
export const categories = platformCatalogs[defaultPlatformKey].categories;
