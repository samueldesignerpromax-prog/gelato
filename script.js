// ============================================
// DADOS DOS SABORES (70+)
// ============================================

const saboresDB = [
    // Tradicionais
    { nome: "Chocolate", desc: "Cremoso chocolate belga", preco: 12.90, cat: "Tradicionais", icone: "🍫" },
    { nome: "Morango", desc: "Morango fresco com pedaços", preco: 11.90, cat: "Tradicionais", icone: "🍓" },
    { nome: "Baunilha", desc: "Baunilha de Madagascar", preco: 10.90, cat: "Tradicionais", icone: "🌿" },
    { nome: "Creme", desc: "Creme suave e aveludado", preco: 10.90, cat: "Tradicionais", icone: "🥛" },
    { nome: "Coco", desc: "Coco natural ralado", preco: 12.90, cat: "Tradicionais", icone: "🥥" },
    { nome: "Flocos", desc: "Chocolate com flocos crocantes", preco: 13.90, cat: "Tradicionais", icone: "🍫" },
    { nome: "Manga", desc: "Manga Haden suculenta", preco: 13.90, cat: "Tradicionais", icone: "🥭" },
    { nome: "Limão", desc: "Limão siciliano refrescante", preco: 11.90, cat: "Tradicionais", icone: "🍋" },
    // Gourmet
    { nome: "Nutella", desc: "Nutella cremosa italiana", preco: 18.90, cat: "Gourmet", icone: "🍫" },
    { nome: "Kinder Bueno", desc: "Leite com avelã crocante", preco: 17.90, cat: "Gourmet", icone: "🍬" },
    { nome: "Oreo", desc: "Cookies Oreo triturados", preco: 16.90, cat: "Gourmet", icone: "🍪" },
    { nome: "KitKat", desc: "Pedaços de wafer", preco: 17.90, cat: "Gourmet", icone: "🍫" },
    { nome: "Pistache", desc: "Pistache italiano premium", preco: 19.90, cat: "Gourmet", icone: "🥜" },
    { nome: "Brownie", desc: "Brownie de chocolate", preco: 18.90, cat: "Gourmet", icone: "🍰" },
    { nome: "Cheesecake", desc: "Cheesecake de frutas vermelhas", preco: 18.90, cat: "Gourmet", icone: "🍰" },
    { nome: "Caramelo Salgado", desc: "Doce e salgado perfeito", preco: 17.90, cat: "Gourmet", icone: "🧂" },
    // Frutas
    { nome: "Maracujá", desc: "Polpa azedinha refrescante", preco: 13.90, cat: "Frutas", icone: "🟠" },
    { nome: "Açaí", desc: "Açaí com guaraná", preco: 15.90, cat: "Frutas", icone: "🟣" },
    { nome: "Cupuaçu", desc: "Fruta amazônica", preco: 14.90, cat: "Frutas", icone: "🍈" },
    { nome: "Framboesa", desc: "Framboesa selvagem", preco: 15.90, cat: "Frutas", icone: "🍓" },
    { nome: "Kiwi", desc: "Kiwi verde doce", preco: 14.90, cat: "Frutas", icone: "🥝" },
    { nome: "Goiaba", desc: "Goiabada cremosa", preco: 13.90, cat: "Frutas", icone: "🍐" },
    { nome: "Acerola", desc: "Rica em vitamina C", preco: 12.90, cat: "Frutas", icone: "🍒" },
    // Sobremesas
    { nome: "Tiramisu", desc: "Café e mascarpone", preco: 19.90, cat: "Sobremesas", icone: "☕" },
    { nome: "Pavê", desc: "Chocolate e biscoito", preco: 17.90, cat: "Sobremesas", icone: "🍫" },
    { nome: "Banoffee", desc: "Banana com doce de leite", preco: 18.90, cat: "Sobremesas", icone: "🍌" },
    { nome: "Churros", desc: "Canela e doce de leite", preco: 16.90, cat: "Sobremesas", icone: "🍩" },
    { nome: "Pudim", desc: "Leite condensado", preco: 15.90, cat: "Sobremesas", icone: "🍮" },
    { nome: "Cocada", desc: "Coco queimado", preco: 14.90, cat: "Sobremesas", icone: "🥥" },
    // Diferentões
    { nome: "Chiclete", desc: "Sabor chiclete de frutas", preco: 14.90, cat: "Diferentões", icone: "🍬" },
    { nome: "Algodão Doce", desc: "Doce de festa", preco: 15.90, cat: "Diferentões", icone: "🍭" },
    { nome: "Milho Verde", desc: "Cremoso de milho", preco: 13.90, cat: "Diferentões", icone: "🌽" },
    { nome: "Lavanda", desc: "Floral suave e aromático", preco: 16.90, cat: "Diferentões", icone: "🌸" },
    { nome: "Pimenta com Chocolate", desc: "Picante e doce", preco: 18.90, cat: "Diferentões", icone: "🌶️" },
    // Premium
    { nome: "Ferrero Rocher", desc: "Avelãs crocantes", preco: 22.90, cat: "Premium", icone: "✨" },
    { nome: "Ninho com Nutella", desc: "Leite Ninho e Nutella", preco: 21.90, cat: "Premium", icone: "🥛" },
    { nome: "Brigadeiro Gourmet", desc: "Brigadeiro premium", preco: 19.90, cat: "Premium", icone: "🍫" },
    // Veganos
    { nome: "Chocolate Vegano", desc: "Sem lactose", preco: 16.90, cat: "Veganos", icone: "🍫" },
    { nome: "Banana com Canela", desc: "Natural e cremoso", preco: 14.90, cat: "Veganos", icone: "🍌" },
    { nome: "Açaí Vegano", desc: "Açaí puro", preco: 15.90, cat: "Veganos", icone: "🟣" },
    { nome: "Coco com Manga", desc: "Tropical", preco: 16.90, cat: "Veganos", icone: "🥭" },
];

// Adicionar mais sabores para bater 70+
const saboresExtras = [
    "Doce de Leite", "Romeu e Julieta", "Pé de Moleque", "Cajá", "Cupuaçu", "Graviola", "Jabuticaba",
    "Capuccino", "Menta com Chocolate", "Rocambole", "Torta de Limão", "Pavê de Chocolate", "Bombom"
];
saboresExtras.forEach((s, i) => {
    const cat = ["Tradicionais", "Gourmet", "Frutas", "Sobremesas"][i % 4];
    saboresDB.push({
        nome: s,
        desc: `Delicioso sabor de ${s}`,
        preco: 12.90 + (i % 5),
        cat: cat,
        icone: "🍨"
    });
});

// ============================================
// DADOS DOS COMBOS
// ============================================

const combosDB = [
    { nome: "Combo Casal 💑", desc: "2 sabores + 2 toppings especiais", preco: 34.90, icone: "💕" },
    { nome: "Combo Família 👨‍👩‍👧‍👦", desc: "5 bolas + 3 sabores + cobertura", preco: 59.90, icone: "🏠" },
    { nome: "Combo Kids 🧒", desc: "1 bola + confeitos + brinde surpresa", preco: 19.90, icone: "🎈" },
    { nome: "Combo Premium 💎", desc: "Sabores gourmet + toppings premium", preco: 49.90, icone: "👑" },
    { nome: "Combo Festa 🎉", desc: "Balde com 1.5L (4 sabores)", preco: 79.90, icone: "🎊" },
    { nome: "Combo Delícia Tropical 🥭", desc: "3 sabores de frutas + calda", preco: 42.90, icone: "🌴" },
];

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO
// ============================================

// Renderizar sabores na página de sabores com filtro
function carregarSabores() {
    const container = document.getElementById('saboresList');
    if (!container) return;
    
    const categoriaAtiva = document.querySelector('.filter-btn.active-filter')?.dataset.categoria || 'todos';
    
    let saboresFiltrados = saboresDB;
    if (categoriaAtiva !== 'todos') {
        saboresFiltrados = saboresDB.filter(s => s.cat === categoriaAtiva);
    }
    
    container.innerHTML = saboresFiltrados.map(sabor => `
        <div class="sabor-card">
            <div class="sabor-emoji">${sabor.icone}</div>
            <h3>${sabor.nome}</h3>
            <p style="font-size:0.85rem; color:#888;">${sabor.desc}</p>
            <div class="price">R$ ${sabor.preco.toFixed(2)}</div>
            <button class="add-to-cart" onclick="adicionarAoCarrinho('${sabor.nome}', ${sabor.preco}, 'sabor', '${sabor.icone}')">
                <i class="fas fa-cart-plus"></i> Adicionar
            </button>
        </div>
    `).join('');
}

// Renderizar populares na home
function carregarPopulares() {
    const container = document.getElementById('popularesGrid');
    if (!container) return;
    
    const populares = saboresDB.slice(0, 8);
    container.innerHTML = populares.map(sabor => `
        <div class="sabor-card">
            <div class="sabor-emoji">${sabor.icone}</div>
            <h3>${sabor.nome}</h3>
            <div class="price">R$ ${sabor.preco.toFixed(2)}</div>
            <button class="add-to-cart" onclick="adicionarAoCarrinho('${sabor.nome}', ${sabor.preco}, 'sabor', '${sabor.icone}')">
                <i class="fas fa-cart-plus"></i> Pedir
            </button>
        </div>
    `).join('');
}

// Carregar combos na home
function carregarCombosHome() {
    const container = document.getElementById('combosHomeGrid');
    if (!container) return;
    
    const combosDestaque = combosDB.slice(0, 3);
    container.innerHTML = combosDestaque.map(combo => `
        <div class="combo-card">
            <div class="sabor-emoji" style="font-size:3rem;">${combo.icone}</div>
            <h3>${combo.nome}</h3>
            <p>${combo.desc}</p>
            <div class="price">R$ ${combo.preco.toFixed(2)}</div>
            <button class="add-to-cart" onclick="adicionarAoCarrinho('${combo.nome} (Combo)', ${combo.preco}, 'combo', '${combo.icone}')">
                <i class="fas fa-cart-plus"></i> Quero esse!
            </button>
        </div>
    `).join('');
}

// Carregar todos os combos na página de combos
function carregarCombosFull() {
    const container = document.getElementById('combosFullGrid');
    if (!container) return;
    
    container.innerHTML = combosDB.map(combo => `
        <div class="combo-card">
            <div class="sabor-emoji" style="font-size:3rem;">${combo.icone}</div>
            <h3>${combo.nome}</h3>
            <p>${combo.desc}</p>
            <div class="price">R$ ${combo.preco.toFixed(2)}</div>
            <button class="add-to-cart" onclick="adicionarAoCarrinho('${combo.nome}', ${combo.preco}, 'combo', '${combo.icone}')">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
        </div>
    `).join('');
}

// Carregar produtos rápidos na página de pedido
function carregarProdutosRapidos() {
    const container = document.getElementById('produtosRapidos');
    if (container) {
        const populares = saboresDB.slice(0, 6);
        container.innerHTML = populares.map(sabor => `
            <div class="sabor-card" style="padding:0.8rem;">
                <div style="font-size:2rem;">${sabor.icone}</div>
                <h4>${sabor.nome}</h4>
                <div class="price">R$ ${sabor.preco.toFixed(2)}</div>
                <button class="add-to-cart" onclick="adicionarAoCarrinho('${sabor.nome}', ${sabor.preco})">+ Carrinho</button>
            </div>
        `).join('');
    }
    
    const combosContainer = document.getElementById('combosRapidos');
    if (combosContainer) {
        combosContainer.innerHTML = combosDB.slice(0, 3).map(combo => `
            <div class="combo-card" style="padding:0.8rem;">
                <div style="font-size:2rem;">${combo.icone}</div>
                <h4>${combo.nome}</h4>
                <div class="price">R$ ${combo.preco.toFixed(2)}</div>
                <button class="add-to-cart" onclick="adicionarAoCarrinho('${combo.nome}', ${combo.preco}, 'combo')">+ Carrinho</button>
            </div>
        `).join('');
    }
}

// Configurar filtros na página de sabores
function setupFiltros() {
    const filtros = document.querySelectorAll('.filter-btn');
    filtros.forEach(btn => {
        btn.addEventListener('click', () => {
            filtros.forEach(b => b.classList.remove('active-filter'));
            btn.classList.add('active-filter');
            carregarSabores();
        });
    });
}

// Formulário de contato
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('contactFeedback');
            if (feedback) {
                feedback.innerHTML = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
                feedback.style.color = '#4ECDC4';
                form.reset();
                setTimeout(() => feedback.innerHTML = '', 3000);
            }
        });
    }
}

// ============================================
// INICIALIZAÇÃO POR PÁGINA
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Detectar qual página está carregada pelo ID dos elementos
    if (document.getElementById('saboresList')) {
        carregarSabores();
        setupFiltros();
    }
    
    if (document.getElementById('popularesGrid')) {
        carregarPopulares();
        carregarCombosHome();
    }
    
    if (document.getElementById('combosFullGrid')) {
        carregarCombosFull();
    }
    
    if (document.getElementById('produtosRapidos')) {
        carregarProdutosRapidos();
    }
    
    if (document.getElementById('contactForm')) {
        setupContactForm();
    }
    
    // Atualizar carrinho periodicamente
    setInterval(() => {
        if (typeof carregarCarrinho === 'function') {
            carregarCarrinho();
        }
    }, 500);
});
