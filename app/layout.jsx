import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "TosSam",
    description: "토익 스피킹 연습, 하루에 10분만",
}

const RootLayout = ({children}) => {
  return (
    <html lang="ko">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <body>
        <Provider>
          <div className="main">
              <div className="graident" />
          </div>
          <main className="app">
              <Nav />
              {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;