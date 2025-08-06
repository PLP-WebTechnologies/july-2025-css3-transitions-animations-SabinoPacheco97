/* ================================
   PARTE 2: Funções JavaScript
   ================================ */

// Função reutilizável para alternar uma classe em um elemento
// Aceita: elemento DOM e nome da classe
// Retorna: true se a classe foi adicionada, false se removida
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    return false;
  } else {
    element.classList.add(className);
    return true;
  }
}

// Função que mostra/esconde a caixa animada
function toggleBox() {
  const box = document.getElementById('animatedBox');
  const isActive = toggleClass(box, 'active');

  // Se a caixa estiver ativa, adiciona animação contínua
  if (isActive) {
    box.classList.add('pulse');
  } else {
    box.classList.remove('pulse');
  }
}

// Função que mostra/esconde o modal e o fundo escurecido
function toggleModal() {
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');

  toggleClass(modal, 'active');
  toggleClass(overlay, 'active');
}

// Demonstração de escopo global vs local
let globalCounter = 0;

// Função que incrementa um contador global
// Aceita: valor a ser incrementado
// Retorna: novo valor do contador global
function incrementCounter(amount) {
  let localCounter = amount;
  globalCounter += localCounter;
  console.log(`Contador global: ${globalCounter}`);
  return globalCounter;
}

// Exemplo de uso funcional
incrementCounter(5);
