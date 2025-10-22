import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainsOpen(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Левая штора с текстурой */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: curtainsOpen ? '0%' : '50%',
          height: '100%',
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
          backgroundSize: '100px 100px, 100% 100%',
          backgroundBlendMode: 'overlay',
          transition: 'width 2s ease-in-out',
          zIndex: 10,
          boxShadow: '10px 0 30px rgba(0,0,0,0.8)',
          borderRight: '3px solid #FFD700'
        }}></div>

        {/* Правая штора с текстурой */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: curtainsOpen ? '0%' : '50%',
          height: '100%',
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
          backgroundSize: '100px 100px, 100% 100%',
          backgroundBlendMode: 'overlay',
          transition: 'width 2s ease-in-out',
          zIndex: 10,
          boxShadow: '-10px 0 30px rgba(0,0,0,0.8)',
          borderLeft: '3px solid #FFD700'
        }}></div>

        {/* Сцена (контент) */}
        <div style={{
          position: 'relative',
          zIndex: 5,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          opacity: curtainsOpen ? 1 : 0,
          transition: 'opacity 1s ease-in-out 1s',
          background: `
            radial-gradient(ellipse at center, #2C2C2C 0%, #1A1A1A 100%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(255,215,0,0.05) 50px,
              rgba(255,215,0,0.05) 51px
            )
          `
        }}>
          <div>
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '2rem',
              fontFamily: 'Georgia, serif',
              color: '#FFD700',
              textShadow: '0 0 30px rgba(255,215,0,0.7), 3px 3px 6px rgba(0,0,0,0.9)',
              lineHeight: '1.2'
            }}>
              🎭 Театральная студия<br />«Без границ»
            </h1>
            <p style={{
              fontSize: '1.5rem',
              marginBottom: '3rem',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              opacity: '0.9'
            }}>
              Раскрываем таланты, создаем звезды сцены
            </p>
            <button style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFEC8B 100%)',
              color: '#800020',
              border: 'none',
              padding: '1.2rem 2.5rem',
              fontSize: '1.2rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(255,215,0,0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 12px 30px rgba(255,215,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.4)';
            }}
            >
              Записаться на пробное занятие
            </button>
          </div>
        </div>

        {/* Бордюр сцены */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: curtainsOpen ? '10%' : '50%',
          right: curtainsOpen ? '10%' : '50%',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
          transform: 'translateY(-2px)',
          transition: 'all 2s ease-in-out',
          zIndex: 6
        }}></div>
      </div>

      {/* Блок преимуществ */}
      <div style={{
        padding: '6rem 2rem',
        background: `
          linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(128, 0, 32, 0.1) 10px,
            rgba(128, 0, 32, 0.1) 20px
          )
        `,
        textAlign: 'center',
        color: 'white',
        borderTop: '3px solid #FFD700',
        borderBottom: '3px solid #FFD700'
      }}>
        <h2 style={{ 
          color: '#FFD700', 
          marginBottom: '4rem', 
          fontSize: '3rem',
          fontFamily: 'Georgia, serif',
          textShadow: '0 0 20px rgba(255,215,0,0.3)'
        }}>
          Почему выбирают нас?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ 
            padding: '3rem 2rem', 
            background: 'rgba(128, 0, 32, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '2px solid #FFD700',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.5)';
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,215,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}
          >
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem', 
              color: '#FFD700',
              filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))'
            }}>💫</div>
            <h3 style={{ 
              color: '#FFD700', 
              fontSize: '1.8rem',
              marginBottom: '1rem',
              textShadow: '0 0 10px rgba(255,215,0,0.3)'
            }}>Современные наставники</h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>Педагоги с актуальными методиками и свежим взглядом на искусство</p>
          </div>
          
          <div style={{ 
            padding: '3rem 2rem', 
            background: 'rgba(128, 0, 32, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '2px solid #FFD700',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.5)';
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,215,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}
          >
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem', 
              color: '#FFD700',
              filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))'
            }}>🏆</div>
            <h3 style={{ 
              color: '#FFD700', 
              fontSize: '1.8rem',
              marginBottom: '1rem',
              textShadow: '0 0 10px rgba(255,215,0,0.3)'
            }}>Участие в конкурсах</h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>Ежегодные выступления на городских и международных фестивалях</p>
          </div>
          
          <div style={{ 
            padding: '3rem 2rem', 
            background: 'rgba(128, 0, 32, 0.3)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '2px solid #FFD700',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.5)';
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,215,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(128, 0, 32, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
          }}
          >
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem', 
              color: '#FFD700',
              filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.5))'
            }}>👥</div>
            <h3 style={{ 
              color: '#FFD700', 
              fontSize: '1.8rem',
              marginBottom: '1rem',
              textShadow: '0 0 10px rgba(255,215,0,0.3)'
            }}>Разные возрастные группы</h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>Индивидуальный подход для детей от 4 лет, подростков и взрослых</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}