import Navbar from 'components/Navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <p>This is a footer</p>
      </footer>
    </>
  )
}

export default Layout
