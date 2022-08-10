import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp