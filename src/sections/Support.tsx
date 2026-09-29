import { Icon } from '@/components/Icon'
import { support } from '@/data/content'
import styles from './Support.module.css'

export function Support() {
  return (
    <section id="acompanhamento" className={`section ${styles.support}`} aria-labelledby="acompanhamento-title">
      <div className="wrap">
        <header className={styles.head} data-reveal>
          <div className={styles.headTitle}>
            <span className="eyebrow">Acompanhamento</span>
            <h2 id="acompanhamento-title" className="title">
              Você não precisa entender todo o processo <em className="script">sozinha.</em>
            </h2>
          </div>
          <p className="lead">
            Durante a recuperação, podem surgir dúvidas, inseguranças e mudanças que fazem parte do processo. O
            acompanhamento fisioterapêutico ajuda a conduzir cada etapa com atenção às necessidades do seu corpo.
          </p>
        </header>

        <ul className={styles.items}>
          {support.map((item) => (
            <li key={item.title} className={styles.item} data-reveal>
              <span className={styles.icon}>
                <Icon name={item.icon} size={30} />
              </span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
