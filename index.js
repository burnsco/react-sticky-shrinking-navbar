import React from 'react'
import Sticky from 'react-stickynode'

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('header').style.padding = '30px 10px'
  } else {
    document.querySelector('header').style.padding = '80px 10px'
  }
}

window.onscroll = () => {
  scrollFunction()
}

export const StickyShrinkingNavbar = () => (
  <Sticky enabled innerZ={100}>
    <header
      style={{
        transition: '0.4s',
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Sticky Shrinking Navbar
        </Link>
      </h1>
    </header>
  </Sticky>
)
