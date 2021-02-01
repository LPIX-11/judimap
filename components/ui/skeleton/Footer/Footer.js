import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://linkedin.com/in/mohamed-johnson"
        target="_blank"
        rel="noopener noreferrer"
      >
        JudiMap Made with ❤️ by
        {' '}
        @LPIX-11
      </a>
    </footer>
  )
}