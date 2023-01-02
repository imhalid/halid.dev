import Head from 'next/head'
import Projects from '../components/Projects'
import Home from '../components/Home'
import Layouts from '../components/Layouts'

const Index = () => {
  return (
    <Layouts>
      <Head>
        <title>Halid - Frontend Developer</title>
      </Head>
      <Home />
      <Projects />
    </Layouts>
  )
}

export default Index

//https://codesandbox.io/s/b7runv?file=/App.js&from-sandpack=true
