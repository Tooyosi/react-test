import React from 'react'

export default function Header() {
    return (
        <header className="p-5 text-center">
                <img src={require('../../assets/logo.svg').default} alt="logo" />
        </header>
    )
}
