
export function startTypewriter(el, words, speed = 90, pause = 1500) {
  let wordIndex = 0;
  let text = "";
  let deleting = false;

  function tick() {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      setTimeout(() => {
        deleting = true;
        tick();
      }, pause);
      return;
    }

    if (deleting && text === "") {
      deleting = false;
      wordIndex += 1;
      tick();
      return;
    }

    text = deleting
      ? text.slice(0, -1)
      : current.slice(0, text.length + 1);

    el.textContent = text;

    setTimeout(tick, deleting ? speed / 2 : speed);
  }

  tick();
}
