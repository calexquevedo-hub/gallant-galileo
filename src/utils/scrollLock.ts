const LOCK_COUNT_ATTR = 'data-scroll-lock-count';
const PREVIOUS_OVERFLOW_ATTR = 'data-scroll-lock-previous-overflow';

/**
 * Bloqueia a rolagem de fundo enquanto um modal está aberto.
 *
 * IMPORTANTE: todos os componentes que precisarem bloquear o scroll devem usar
 * este utilitário. Não aplique document.body.style.overflow = 'hidden'
 * diretamente em componentes diferentes, pois fechamentos fora de ordem podem
 * restaurar "hidden" e deixar a página permanentemente sem rolagem.
 */
export function lockBodyScroll(): () => void {
  const body = document.body;
  const currentCount = Number(body.getAttribute(LOCK_COUNT_ATTR) || '0');

  if (currentCount === 0) {
    body.setAttribute(PREVIOUS_OVERFLOW_ATTR, body.style.overflow || '');
    body.style.overflow = 'hidden';
  }

  body.setAttribute(LOCK_COUNT_ATTR, String(currentCount + 1));

  let released = false;

  return () => {
    if (released) return;
    released = true;

    const count = Number(body.getAttribute(LOCK_COUNT_ATTR) || '1');
    const nextCount = Math.max(0, count - 1);

    if (nextCount === 0) {
      body.style.overflow = body.getAttribute(PREVIOUS_OVERFLOW_ATTR) || '';
      body.removeAttribute(LOCK_COUNT_ATTR);
      body.removeAttribute(PREVIOUS_OVERFLOW_ATTR);
      return;
    }

    body.setAttribute(LOCK_COUNT_ATTR, String(nextCount));
  };
}

/**
 * Corrige estados antigos preservados pelo bfcache ou por versões anteriores
 * do site. Só atua quando nenhum modal está visível.
 */
export function clearStaleBodyScrollLock(): void {
  if (document.querySelector('.modal-backdrop')) return;

  const body = document.body;
  body.style.overflow = '';
  body.removeAttribute(LOCK_COUNT_ATTR);
  body.removeAttribute(PREVIOUS_OVERFLOW_ATTR);
}
