// ============================================
// CARRINHO DE COMPRAS - GLOBAL (localStorage)
// ============================================

let carrinho = [];

// Carregar carrinho do localStorage
function carregarCarrinho() {
    const saved = localStorage.getItem('gelatoCart');
    if (saved) {
        carrinho = JSON.parse(saved);
    }
    atualizarInterfaceCarrinho();
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('gelatoCart', JSON.stringify(carrinho));
    atualizarInterfaceCarrinho();
}

// Adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco, tipo = 'sabor', imagem = '🍦') {
    const item = {
        id: Date.now() + Math.random(),
        nome: nome,
        preco: preco,
        tipo: tipo,
        imagem: imagem,
        quantidade: 1
    };
    
    carrinho.push(item);
    salvarCarrinho();
    
    // Feedback visual
    const msg = document.createElement('div');
    msg.textContent = `✅ ${nome} adicionado ao carrinho!`;
    msg.style.position = 'fixed';
    msg.style.bottom = '20px';
    msg.style.right = '20px';
    msg.style.background = '#4ECDC4';
    msg.style.color = 'white';
    msg.style.padding = '12px 20px';
    msg.style.borderRadius = '25px';
    msg.style.zIndex = '1200';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
    
    if (typeof toggleCart === 'function') {
        // Não abrir automaticamente para não ser intrusivo
    }
}

// Remover item do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    salvarCarrinho();
}

// Atualizar quantidade
function atualizarQuantidade(id, novaQuantidade) {
    const item = carrinho.find(i => i.id === id);
    if (item && novaQuantidade > 0) {
        item.quantidade = novaQuantidade;
        salvarCarrinho();
    } else if (novaQuantidade <= 0) {
        removerDoCarrinho(id);
    }
}

// Calcular total
function calcularTotal() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Atualizar contador do carrinho e lista
function atualizarInterfaceCarrinho() {
    // Atualizar contador em todas as páginas
    const cartCountElements = document.querySelectorAll('#cartCount');
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItens;
    });
    
    // Atualizar lista do carrinho
    const cartList = document.getElementById('cartItemsList');
    if (cartList) {
        if (carrinho.length === 0) {
            cartList.innerHTML = '<p style="text-align:center;">Seu carrinho está vazio 🍨</p>';
        } else {
            cartList.innerHTML = carrinho.map(item => `
                <div class="cart-item">
                    <div>
                        <strong>${item.nome}</strong>
                        <small>R$ ${item.preco.toFixed(2)}</small>
                        <div>
                            <button onclick="atualizarQuantidade(${item.id}, ${item.quantidade - 1})" style="background:#FF6B6B; padding:2px 8px;">-</button>
                            <span style="margin:0 8px;">${item.quantidade}</span>
                            <button onclick="atualizarQuantidade(${item.id}, ${item.quantidade + 1})" style="background:#4ECDC4; padding:2px 8px;">+</button>
                        </div>
                    </div>
                    <div>
                        R$ ${(item.preco * item.quantidade).toFixed(2)}
                        <button onclick="removerDoCarrinho(${item.id})" style="background:none; border:none; color:#FF6B6B;"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Atualizar total
    const totalElements = document.querySelectorAll('#cartTotal, #previewTotal');
    const total = calcularTotal();
    totalElements.forEach(el => {
        if (el) el.textContent = total.toFixed(2);
    });
    
    // Atualizar preview do carrinho na página de pedido
    const cartPreview = document.getElementById('cartPreview');
    if (cartPreview) {
        if (carrinho.length === 0) {
            cartPreview.innerHTML = '<p>Nenhum item adicionado ainda</p>';
        } else {
            cartPreview.innerHTML = carrinho.map(item => `
                <div class="cart-preview-item">
                    <span>${item.nome} x${item.quantidade}</span>
                    <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                </div>
            `).join('');
        }
    }
}

// Finalizar pedido
function finalizarOrder() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio! Adicione alguns sabores deliciosos primeiro 🍦');
        return;
    }
    
    const total = calcularTotal();
    const msg = document.getElementById('orderMessage');
    if (msg) {
        msg.innerHTML = `🎉 Pedido finalizado com sucesso! Total: R$ ${total.toFixed(2)}. Em breve entraremos em contato! 🍨`;
        msg.style.color = '#4ECDC4';
    }
    
    // Limpar carrinho após finalizar
    carrinho = [];
    salvarCarrinho();
    
    setTimeout(() => {
        if (msg) msg.innerHTML = '';
        if (typeof toggleCart === 'function') toggleCart();
    }, 3000);
    
    alert(`✅ Pedido finalizado!\nTotal: R$ ${total.toFixed(2)}\nObrigado por escolher a Gelato Dreams!`);
}

// Alternar carrinho lateral
function toggleCart() {
    const panel = document.getElementById('cartPanel');
    if (panel) {
        panel.classList.toggle('open');
    }
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    
    const toggleBtn = document.querySelector('.theme-toggle i');
    if (toggleBtn) {
        if (isDark) {
            toggleBtn.classList.remove('fa-moon');
            toggleBtn.classList.add('fa-sun');
        } else {
            toggleBtn.classList.remove('fa-sun');
            toggleBtn.classList.add('fa-moon');
        }
    }
}

// Carregar dark mode salvo
function carregarDarkMode() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        document.body.classList.add('dark');
        const toggleBtn = document.querySelector('.theme-toggle i');
        if (toggleBtn) {
            toggleBtn.classList.remove('fa-moon');
            toggleBtn.classList.add('fa-sun');
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
    carregarDarkMode();
    
    // Fechar carrinho ao clicar fora
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('cartPanel');
        const cartBtn = document.querySelector('.cart-icon-btn');
        if (panel && panel.classList.contains('open') && !panel.contains(e.target) && !cartBtn?.contains(e.target)) {
            panel.classList.remove('open');
        }
    });
});
