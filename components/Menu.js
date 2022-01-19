import React from 'react'
import Link from 'next/link'

export default function Menu() {
    return (
      <ul className='menu_ul' >
          <li className='li' >
              <Link href='/'>
                  {/* En versiones anteriores Next te obliga a tener un a vacio dentro del link */}
                Inicio
              </Link>
          </li>
          <li className='li' >
              <Link href='/movies'>
                Peliculas
              </Link>
          </li>
          <li className='li' >
              <Link href='/contact'>
                Contacto
              </Link>
          </li>
      </ul>
    )
  }
  