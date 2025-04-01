function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

function revealSections() {
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add("visible");
        }
    });
});

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
});

// Função para mostrar o modal de assinatura
function subscribe(planName) {
    const modal = document.getElementById('subscriptionModal');
    const planElement = document.getElementById('selectedPlan');
    const priceElement = document.getElementById('selectedPrice');
    
    // Definir o plano selecionado
    let planText, priceText;
    
    switch(planName) {
        case 'Plano Básico':
            planText = 'Plano Básico';
            priceText = 'R$ 99/mês';
            break;
        case 'Plano Avançado':
            planText = 'Plano Avançado';
            priceText = 'R$ 199/mês';
            break;
        case 'Plano Premium':
            planText = 'Plano Premium';
            priceText = 'R$ 299/mês';
            break;
        default:
            planText = planName;
            priceText = '';
    }
    
    planElement.textContent = planText;
    priceElement.textContent = priceText;
    
    // Mostrar o modal
    modal.style.display = 'block';
    
    // Impedir que a página role quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
}

// Fechar o modal quando clicar no X
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('subscriptionModal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar o modal quando clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById('subscriptionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Fechar o popup de confirmação
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('confirmationPopup').style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Processar o formulário de assinatura
document.getElementById('subscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Esconder o modal de assinatura
    document.getElementById('subscriptionModal').style.display = 'none';
    
    // Mostrar o popup de confirmação
    const planName = document.getElementById('selectedPlan').textContent;
    document.getElementById('confirmationMessage').textContent = 
        `Sua assinatura do ${planName} foi confirmada com sucesso!`;
    document.getElementById('confirmationPopup').style.display = 'block';
    
    // Limpar o formulário
    this.reset();
});

// Menu mobile
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Animar seções quando aparecem na tela
function revealSections() {
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Event listeners
document.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Formulário de contato
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
});