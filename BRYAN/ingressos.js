let ingressoSelecionado = null;

function selectTicket(element, tipo) {
    document.querySelectorAll('.ticket-option').forEach(ticket => {
        ticket.classList.remove('selected');
    });
    
    element.classList.add('selected');
    
    ingressoSelecionado = {
        titulo: element.querySelector('.ticket-title').textContent,
        preco: element.querySelector('.ticket-price').textContent,
        descricao: element.querySelector('.ticket-desc').textContent,
        tipo: tipo
    };
    
    abrirModal();
}

function abrirModal() {
    if (!ingressoSelecionado) return;

    document.getElementById('modal-ticket-title').textContent = ingressoSelecionado.titulo;
    document.getElementById('modal-ticket-price').textContent = ingressoSelecionado.preco;
    document.getElementById('modal-ticket-desc').textContent = ingressoSelecionado.descricao;
    
    const quantidadeSelect = document.getElementById('ticket-quantity');
    const quantidadeLabel = document.querySelector('label[for="ticket-quantity"]');
    const isFamilia = ingressoSelecionado.tipo.includes('familia');
    
    if (isFamilia) {
        quantidadeSelect.value = '4';
        quantidadeSelect.disabled = true;
        quantidadeSelect.parentElement.classList.add('quantidade-fixa');
        quantidadeLabel.innerHTML = 'Quantidade: <span class="text-muted">(Pacote família - 4 pessoas)</span>';
    } else {
        quantidadeSelect.disabled = false;
        quantidadeSelect.parentElement.classList.remove('quantidade-fixa');
        quantidadeLabel.textContent = 'Quantidade:';
    }
    
    new bootstrap.Modal(document.getElementById('myModal')).show();
}

function finalizarCompra() {
    const dataSelecionada = document.getElementById('visit-date').value;
    
    if (!dataSelecionada) {
        alert('Por favor, selecione uma data para a visita.');
        return;
    }
    
    if (ingressoSelecionado) {
        const dataFormatada = new Date(dataSelecionada).toLocaleDateString('pt-BR');
        const isFamilia = ingressoSelecionado.tipo.includes('familia');
        const mensagemQuantidade = isFamilia ? '👨‍👩‍👧‍👦 Pacote família (4 pessoas)' : `🎫 Quantidade: ${document.getElementById('ticket-quantity').value}`;
        
        alert(`🎉 Compra realizada com sucesso!\n\n📄 Ingresso: ${ingressoSelecionado.titulo}\n📅 Data: ${dataFormatada}\n${mensagemQuantidade}\n💰 ${ingressoSelecionado.preco}\n\nObrigado pela preferência!`);
        
        bootstrap.Modal.getInstance(document.getElementById('myModal')).hide();
        resetarSelecao();
    }
}

function resetarSelecao() {
    ingressoSelecionado = null;
    document.querySelectorAll('.ticket-option').forEach(ticket => {
        ticket.classList.remove('selected');
    });
    
    document.getElementById('visit-date').value = '';
    document.getElementById('ticket-quantity').value = '1';
    document.getElementById('ticket-quantity').disabled = false;
    document.querySelector('label[for="ticket-quantity"]').textContent = 'Quantidade:';
}

document.addEventListener('DOMContentLoaded', function() {
    const myModal = document.getElementById('myModal');
    
    myModal.addEventListener('shown.bs.modal', function () {
        document.getElementById('visit-date').focus();
    });
    
    myModal.addEventListener('hidden.bs.modal', function () {
        document.getElementById('ticket-quantity').disabled = false;
        document.getElementById('ticket-quantity').parentElement.classList.remove('quantidade-fixa');
        document.querySelector('label[for="ticket-quantity"]').textContent = 'Quantidade:';
    });
    
    document.getElementById('visit-date').min = new Date().toISOString().split('T')[0];
});