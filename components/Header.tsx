import Link from 'next/link'
import React from 'react'
import Nav from './Nav'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
    <div>
  <div className="flex flex-wrap place-items-center">
    <section className="relative mx-auto">
     <Nav/>
    </section>
  </div>
</div>

</header>
  )
}

export default Header