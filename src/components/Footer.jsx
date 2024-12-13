import React from 'react'
import Logo from "../assets/icons/Logo.svg"

const Footer = () => {
  return (
    <div>
      <section><img src={Logo} alt="" /></section>

      <section>
        <div>
          <h2>Doormat Navigation</h2>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservations</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href="">Adress</a></li>
            <li><a href="">Phone Number</a></li>
            <li><a href="">Email</a></li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">X</a></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Footer