import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
