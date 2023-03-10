import Navbar from '@components/Navbar'
import styles from './layout.module.css'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer className='footer'>
        <p>This is a footer</p>
      </footer>

      <style jsx>{`
        .footer {
          background-color: orange;
        }
      `}</style>
    </div>
  )
}

export default Layout
