import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <div>
        <Link href={"/"}>Dante Medina</Link>
        <div>
            <Link>Work</Link>
            <Link>About</Link>
            <Link><img src={ds}/></Link>
        </div>
    </div>
  )
}

export default Header