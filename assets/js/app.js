document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') calcular();
});
const num1Input   = document.getElementById('num1');
const num2Input   = document.getElementById('num2');
const erroDiv     = document.getElementById('erro');
const resultDiv   = document.getElementById('resultado');
const somaEl      = document.getElementById('soma');
const expressaoEl = document.getElementById('expressao');

const calcular = () => {
  const input1 = num1Input.value.trim();
  const input2 = num2Input.value.trim();

  // Oculta resultados anteriores
  erroDiv.style.display   = 'none';
  resultDiv.style.display = 'none';

  // Validação: campos vazios ou não inteiros
  if (
    input1 === '' || input2 === '' ||
    !Number.isInteger(Number(input1)) ||
    !Number.isInteger(Number(input2))
  ) {
    erroDiv.style.display = 'block';
    return;
  }

  const num1 = parseInt(input1, 10);
  const num2 = parseInt(input2, 10);
  const soma = num1 + num2;

  // Exibe resultado
  expressaoEl.textContent = `${num1} + ${num2} =`;
  somaEl.textContent      = soma;
  resultDiv.style.display = 'block';
};
const limpar = () => {
  num1Input.value = '';
  num2Input.value = '';
  erroDiv.style.display   = 'none';
  resultDiv.style.display = 'none';
  num1Input.focus();
};