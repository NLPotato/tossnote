import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "TosSam",
    description: "토익 스피킹 연습, 하루에 10분만",
    lang: "kor",
}

const RootLayout = ({children}) => {
  return (
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
  )
}

export default RootLayout;