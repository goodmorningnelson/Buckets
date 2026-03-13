export default function App() {
  return (
    <div style={{
      height: '100%',
      backgroundColor: 'blue',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '32px',
        padding: '24px',
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#4d1b0a' }} />
        <span style={{
          fontFamily: "'Eczar', serif",
          fontWeight: 800,
          fontSize: '72px',
          color: '#4d1b0a',
          whiteSpace: 'nowrap',
        }}>
          Buckets
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#4d1b0a' }} />
      </div>
    </div>
  )
}
