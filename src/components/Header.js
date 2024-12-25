import React from "react"

export default function Header() {
  return (
    <>
    <header id="header" className="header d-flex align-items-center sticky-top">
  <div className="container-fluid container-xl position-relative d-flex align-items-center">
    <a href="/" className="logo d-flex align-items-center me-auto">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.png" alt=""> */}
      <h1 className="sitename">Director's School</h1>
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <a href="/" className="active">
            Home
            <br />
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
        <li>
          <a href="/trainers">Trainers</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
    <a className="btn-getstarted" href="">
      Get Started
    </a>
  </div>
</header>
    </>
  )
}