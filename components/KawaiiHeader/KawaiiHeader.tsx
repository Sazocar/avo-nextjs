import { useState, useEffect } from 'react'

import AvocadoHeader from './AnimatedHeader'

const KawaiiHeader = () => {
  const [visible, setVisible] = useState(true)
  const toggleVisible = () => setVisible((prevVisible) => !prevVisible)

  useEffect(() => {
    window.setTimeout(toggleVisible, 350)
  }, [])

  return (
    <div className="container">
      <AvocadoHeader visible={visible} onClick={toggleVisible} />

      <style jsx>
        {`
          .container {
            margin: 2rem 0 3rem;
          }
          .container :global(.header) {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}

export default KawaiiHeader
