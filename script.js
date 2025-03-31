// 1. Animação de Entrada (Fade-in)
const sections = document.querySelectorAll('section');

let timeout;
function checkVisibility() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }, 100);
}

// Executa imediatamente ao carregar a página
checkVisibility();

// 2. Scroll Suave
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Desencadeando rolagem suave
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// 3. Validação de Formulário

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio real do formulário
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert('Todos os campos são obrigatórios!');
    } else {
        // Salva os dados no localStorage
        const formData = {
            name,
            email,
            message
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        // Desabilitar o botão de envio
        const button = form.querySelector('button');
        button.disabled = true;
        button.textContent = 'Enviando...';

        // Simulação de envio (espera 2 segundos)
        setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Enviar Mensagem';
            alert('Mensagem enviada com sucesso!');
        }, 2000);
    }
});


