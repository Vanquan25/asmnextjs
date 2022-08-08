import type { NextPage } from 'next'

import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ProductList from './products/ProductList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
          <div className={styles.container}>
      <Banner/>
      <ProductList/>
      <Footer/>
</div>
</div>
  )
}

export default Home
