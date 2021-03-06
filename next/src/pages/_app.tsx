import { Provider } from 'next-auth/client'

import GlobalStyle from 'styles/global';

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;
