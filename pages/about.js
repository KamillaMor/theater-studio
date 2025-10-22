import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '3rem',
          color: '#8B0000',
          marginBottom: '3rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
        }}>
          О нашей студии
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          <div style={{ background: '#FFF5F5', padding: '2rem', borderRadius: '15px' }}>
            <h2 style={{ color: '#8B0000', marginBottom: '1rem' }}>Наша миссия</h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              Театральная студия «Без границ» — это пространство, где каждый ребенок 
              и взрослый может раскрыть свой творческий потенциал, преодолеть внутренние 
              барьеры и найти свой уникальный путь в искусстве.
            </p>
          </div>

          <div style={{ background: '#FFF5F5', padding: '2rem', borderRadius: '15px' }}>
            <h2 style={{ color: '#8B0000', marginBottom: '1rem' }}>Основатель</h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              [Твое имя] — профессиональная актриса и педагог с [количество] лет опыта. 
              Выпускница [твое образование]. Участница международных театральных фестивалей.
            </p>
          </div>
        </div>

        <div style={{
          background: '#8B0000',
          color: 'white',
          padding: '3rem',
          borderRadius: '15px',
          marginBottom: '3rem'
        }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Наши достижения
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '0.5rem' }}>5+</div>
              <div>лет работы</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '0.5rem' }}>50+</div>
              <div>учеников</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '0.5rem' }}>20+</div>
              <div>спектаклей</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: '#FFD700', marginBottom: '0.5rem' }}>15+</div>
              <div>наград</div>
            </div>
          </div>
        </div>

        <div style={{ background: '#FFF5F5', padding: '2rem', borderRadius: '15px' }}>
          <h2 style={{ color: '#8B0000', marginBottom: '1.5rem' }}>Наша философия</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#333' }}>
            Мы верим, что театр — это не только сцена, но и мощный инструмент 
            для личностного роста. На занятиях мы не просто учим актерскому мастерству, 
            а помогаем:
          </p>
          <ul style={{ fontSize: '1.1rem', paddingLeft: '2rem', color: '#333' }}>
            <li>Развивать уверенность в себе</li>
            <li>Улучшать коммуникативные навыки</li>
            <li>Работать с эмоциями и стрессом</li>
            <li>Раскрывать творческое мышление</li>
            <li>Находить гармонию между телом и духом</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}