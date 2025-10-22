import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      padding: '1rem 2rem',
      background: '#800020',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    }}>
      
      {/* Логотип */}
      <div style={{ 
        fontSize: '1.3rem', 
        fontWeight: 'bold',
        color: '#FFD700',
        fontFamily: 'Georgia, serif'
      }}>
        🎭 Студия «Без границ»
      </div>

      {/* Кнопка меню для телефонов */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#FFD700',
          fontSize: '1.8rem',
          cursor: 'pointer',
          padding: '0.5rem'
        }}
        className="mobile-menu-btn"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Навигация для компьютера */}
      <nav className="desktop-nav">
        <a href="/" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          margin: '0 1rem',
          fontWeight: '600'
        }}>
          Главная
        </a>
        <a href="/about" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          margin: '0 1rem',
          fontWeight: '600'
        }}>
          О студии
        </a>
        <a href="/programs" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          margin: '0 1rem',
          fontWeight: '600'
        }}>
          Направления
        </a>
        <a href="/contacts" style={{ 
          color: '#FFD700', 
          textDecoration: 'none', 
          margin: '0 1rem',
          fontWeight: '600'
        }}>
          Контакты
        </a>
      </nav>

      {/* Выпадающее меню для телефонов */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#800020',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderTop: '2px solid #FFD700',
          zIndex: 1000
        }}
        className="mobile-menu"
        >
          <a href="/" style={{ 
            color: '#FFD700', 
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem'
          }}
          onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </a>
          <a href="/about" style={{ 
            color: '#FFD700', 
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem'
          }}
          onClick={() => setIsMenuOpen(false)}
          >
            О студии
          </a>
          <a href="/programs" style={{ 
            color: '#FFD700', 
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem'
          }}
          onClick={() => setIsMenuOpen(false)}
          >
            Направления
          </a>
          <a href="/contacts" style={{ 
            color: '#FFD700', 
            textDecoration: 'none',
            padding: '0.5rem',
            fontSize: '1.1rem'
          }}
          onClick={() => setIsMenuOpen(false)}
          >
            Контакты
          </a>
        </div>
      )}

      {/* Стили для адаптивности */}
      <style jsx>{`
        .desktop-nav {
          display: flex;
        }
        
        .mobile-menu-btn {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}