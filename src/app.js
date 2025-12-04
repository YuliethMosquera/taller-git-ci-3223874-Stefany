export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const mensaje = document.getElementById('mensaje');

  if (!lista || !mensaje) return;

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);

  mensaje.textContent = 'Hay elementos en la lista';
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnAgregar');
  if (btn) {
    btn.addEventListener('click', () => agregarItem('Item nuevo'));
  }
});
