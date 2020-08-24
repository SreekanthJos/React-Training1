import React from 'react';
import '../../components/common.scss'

export function Header() {
    return (
        <header className="header">
            <span className='logo'>
                <span className='logo__titlebold'>netflix</span>
                <span className='logo__title'>roulette</span>
            </span>
        </header>
    );
}