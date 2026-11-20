import { useRef, type MouseEvent } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';

import styles from './MarkdownHelp.module.scss';

type SectionId =
  | 'markdown-formatting'
  | 'markdown-headings'
  | 'markdown-lists'
  | 'markdown-links'
  | 'markdown-colors';

const MarkdownHelp = () => {
  const panelRef = useRef<OverlayPanel>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const togglePanel = (event: MouseEvent<HTMLButtonElement>) => {
    panelRef.current?.toggle(event);
  };

  const scrollToSection = (id: SectionId) => {
    contentRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <button
        type="button"
        className={styles.markdownHelpButton}
        aria-label="Показати можливості форматування опису"
        onClick={togglePanel}
      >
        ?
      </button>
      <OverlayPanel ref={panelRef} className={styles.markdownHelpPanel}>
        <div className={styles.markdownHelpContent} ref={contentRef}>
          <nav className={styles.markdownHelpNav} aria-label="Розділи підказки">
            <button type="button" onClick={() => scrollToSection('markdown-formatting')}>
              Форматування
            </button>
            <button type="button" onClick={() => scrollToSection('markdown-headings')}>
              Заголовки
            </button>
            <button type="button" onClick={() => scrollToSection('markdown-lists')}>
              Списки
            </button>
            <button type="button" onClick={() => scrollToSection('markdown-links')}>
              Посилання та медіа
            </button>
            <button type="button" onClick={() => scrollToSection('markdown-colors')}>
              Колір
            </button>
          </nav>
          <section id="markdown-formatting">
            <h4>Форматування тексту</h4>
            <p>
              <code>**Текст**</code> — жирний
            </p>
            <p>
              <code>*Текст*</code> — курсив
            </p>
            <p>
              <code>***Текст***</code> — жирний курсив
            </p>
            <p>
              <code>~~Текст~~</code> — закреслений
            </p>
            <p>
              <code>`Текст`</code> — вбудований код
            </p>
            <p>
              <code>\</code> — примусовий перенос рядка
            </p>
          </section>
          <section id="markdown-colors">
            <h4>Колір тексту</h4>
            <p>
              <code>[color=#ff5500]Текст[/color]</code> — колір тексту
            </p>
            <small>Вкажіть код кольору у форматі #RRGGBB.</small>
          </section>
          <section id="markdown-headings">
            <h4>Заголовки</h4>
            <p>
              <code># Текст</code> — H1
            </p>
            <p>
              <code>## Текст</code> — H2
            </p>
            <p>
              <code>### Текст</code> — H3
            </p>
            <p>
              <code>#### Текст</code> — H4
            </p>
            <p>
              <code>##### Текст</code> — H5
            </p>
            <p>
              <code>###### Текст</code> — H6
            </p>
          </section>
          <section id="markdown-lists">
            <h4>Списки</h4>
            <p>
              <code>- Текст</code> — маркований список
            </p>
            <p>
              <code>1. Текст</code> — нумерований список
            </p>
          </section>
          <section id="markdown-links">
            <h4>Посилання та медіа</h4>
            <p>
              <code>[Назва](https://example.com)</code> — посилання
            </p>
            <p>
              <code>![Опис](https://example.com/image.jpg)</code> — зображення
            </p>
            <p>
              <code>https://example.com</code> — автоматичне посилання
            </p>
            <p>
              <code>email@example.com</code> — автоматичне email-посилання
            </p>
          </section>
        </div>
      </OverlayPanel>
    </>
  );
};

export default MarkdownHelp;
