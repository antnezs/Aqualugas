// Dados dos cards diretamente no JavaScript
const dadosCards = [
    {
        id: 1,
        titulo: "Sobre Nós",
        descrição: "No Aquarium, criamos ambientes ecologicamente diversificados que replicam biomas globais, focados na conservação e educação ambiental.",
        icone: "fa-user-friends",
        badge: "Equipe"
    },
    {
        id: 2,
        titulo: "Sobre o Site", 
        descrição: "Venda de Ingressos Online: Permitir que os visitantes comprem ingressos de forma rápida, segura e conveniente através do nosso site.",
        icone: "fa-laptop-code",
        badge: "Tecnologia"
    },
    {
        id: 3,
        titulo: "Nossa Missão",
        descrição: "Promover a conservação marinha através da educação, pesquisa e experiências imersivas que conectam as pessoas com a vida oceânica.",
        icone: "fa-handshake", 
        badge: "Parceria"
    },
    {
        id: 4,
        titulo: "Sustentabilidade",
        descrição: "Implementamos práticas sustentáveis em todas as nossas operações, desde sistemas de recirculação de água até energia renovável.",
        icone: "fa-chart-line",
        badge: "Resultados"
    }
];

function carregarInterface() {
    const container = document.getElementById("interface-container");

    dadosCards.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `card-${item.id}`;

        card.innerHTML = `
            <div class="card-topo"></div>
            <div class="card-header">
                <div class="linha-superior">
                    <div class="card-icone">
                        <i class="fas ${item.icone} texto-branco"></i>
                    </div>
                    <div class="card-badge">
                        ${item.badge}
                    </div>
                </div>
                <h3 class="card-titulo">${item.titulo}</h3>
            </div>
            <div class="card-content">
                <p class="texto-cinza">${item.descrição}</p>
            </div>
        `;

        container.appendChild(card);
    });

    // Configura navegação
    setTimeout(adicionarClickNavbar, 100);
}

function adicionarClickNavbar() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            
            if (this.textContent.includes('Sobre Nós')) {
                const card = document.getElementById('card-1');
                if (card) card.scrollIntoView({ behavior: 'smooth' });
            }
            
            if (this.textContent.includes('Sobre o Site')) {
                const card = document.getElementById('card-2');
                if (card) card.scrollIntoView({ behavior: 'smooth' });
            }
        };
    });
}

// Carrega os cards quando a página abre
carregarInterface();