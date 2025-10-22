export default function Footer() {
  return (
    <footer style={{
      background: '#800020',
      color: '#FFD700',
      padding: '2rem',
      textAlign: 'center',
      borderTop: '3px solid #FFD700'
    }}>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎭 Театральная студия «Без границ»</p>
      <p>📞 Телефон: +7 (999) 123-45-67</p>
      <p>📍 Адрес: г. Москва, ул. Театральная, 1</p>
    </footer>
  );
}