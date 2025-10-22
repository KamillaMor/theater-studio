import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      padding: '1rem 2rem',
      background: `
        linear-gradient(45deg, 
          #800020 25%, 
          #900029 25%, 
          #900029 50%, 
          #800020 50%, 
          #800020 75%, 
          #900029 75%, 
          #900029 100%
        ),
        linear-gradient(135deg, 
          rgba(255,255,255,0.1) 0%,
          transparent 20%,
          transparent 80%,
          rgba(0,0,0,0.3) 100%
        )
      `,
      backgroundSize: '80px 80px, 100% 100%',
      backgroundBlendMode: 'overlay',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      borderBottom: '3px solid #FFD700',
      position: 'relative',
      zIndex: 100
    }}>
      
      {/* Логотип */}
      <div style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold',
        color: '#FFD700',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        fontFamily: 'Georgia, serif'
      }}>
        🎭 Студия «Без границ»
      </div>

      {/* Кнопка меню для телефонов */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: 'none', // скрыто на компьютере
          background: 'none',
          border: 'none',
          color: '#FFD700',
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: '0.5rem'
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>

      {/* Навигация */}
      <nav style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center'
      }}
      className="desktop-nav"
      >
        <a href="/" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          fontWeight: '600',
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          transition: 'all 0.3s ease',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,215,0,0.2)';
          e.target.style.color = '#FFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#FFD700';
        }}
        >
          Главная
        </a>
        <a href="/about" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          fontWeight: '600',
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          transition: 'all 0.3s ease',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,215,0,0.2)';
          e.target.style.color = '#FFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#FFD700';
        }}
        >
          О студии
        </a>
        <a href="/programs" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          fontWeight: '600',
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          transition: 'all 0.3s ease',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,215,0,0.2)';
          e.target.style.color = '#FFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#FFD700';
        }}
        >
          Направления
        </a>
        <a href="/contacts" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          fontWeight: '600',
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          transition: 'all 0.3s ease',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,215,0,0.2)';
          e.target.style.color = '#FFF';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#FFD700';
        }}
        >
          Контакты
        </a>
      </nav>

      {/* Стили для адаптивности */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}