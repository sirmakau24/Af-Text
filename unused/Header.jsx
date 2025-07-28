function Header() {
  return (
    <div className="header" style={{ backgroundColor: '#1a3c1a', color: '#fff', padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span role="img" aria-label="Africa" style={{ fontSize: 32, marginRight: 12 }}>🌍</span>
        <h1 style={{ margin: 0, fontFamily: 'Montserrat, sans-serif', letterSpacing: 2 }}>Af-Text</h1>
      </div>
      {/* Profile icon, notifications, etc. */}
    </div>
  );
}
export default Header;
