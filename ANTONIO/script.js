// Dados dos cards diretamente no JavaScript
const dadosCards = [
    {
        id: 1,
        titulo: "Sobre Nós",
        descrição: "No Aquarium, criamos ambientes ecologicamente dor filtragem biológica avançada e ciclos de nutrientes reciclados. Essa abordagem minimiza intervenções externas, garantindo que os habitats permaneçam equilibrados e resilientes.",
        icone: "fa-user-friends",
        badge: "Equipe"
    },
    {
        id: 2,
        titulo: "Sobre o Site", 
        descrição: "Venda de Ingressos Online:Permitir que os visitantes comprem ingressos de fnformações detalhadas sobre as atrações do aquário, como exposições de espécies marinhas, shows educativos, túneis subaquáticos e atividades interativas, incentivando o interesse pela biodiversidade dos oceanos.",
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
    },
    {
       id: 5,
        titulo: "Sistemas de Recirculação Avançados",
        descrição: "reduzimos o consumo de água em 90% através de sistemas de filtragem biológica que reciclam e purificam continuamente",
        icone: "fa-recycle",
        badge: "90% menos água"
    },
    {
      id: 6,
        titulo: " Controle Natural de Nutrientes",
        descrição: "Introdução estratégica de algas e invertebrados que controlam naturalmente os níveis de nutrientes nos tanques",
        icone: "fa-fish",
        badge: " 100% natural"
    },
    {
       id: 7,
        titulo: "  Monitoramento IoT Inteligente",
        descrição: "Sensores conectados verificam temperatura, pH, salinidade e qualidade da água 24 horas por dia, garantindo um ambiente ideal",
        icone: "fa-desktop",
        badge: " Tempo real"
    },
    {
       id: 8,
        titulo: " Eficiência Energética",
        descrição: "Uso de bombas e iluminação LED de baixo consumo, reduzindo o uso de energia em 40% sem comprometer o bem-estar dos animais",
        icone: "fa-bolt",
        badge: "  60% economia"
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
            if (this.textContent.includes('Nossa Missão')) {
                const card = document.getElementById('card-3');
                if (card) card.scrollIntoView({ behavior: 'smooth' });
            }
        };
    });
}


// Carrega os cards quando a página abre
carregarInterface();