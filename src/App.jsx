import castleArtwork from '../Hackwarts_ The Wizarding Hackathon.png'

function LaunchMessage() {
  return (
    <section className="launch-message" aria-labelledby="launch-title">
      <p className="eyebrow">
        <span className="status-dot" aria-hidden="true" />
        The next chapter begins soon
      </p>
      <h2 id="launch-title">Your next great idea is magic.</h2>
      <p className="description">
        A gathering for curious minds, bold ideas, and a little bit of magic.
      </p>
      <div className="coming-soon">
        <span className="coming-soon-line" aria-hidden="true" />
        <span>Coming soon</span>
        <span className="coming-soon-line" aria-hidden="true" />
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="landing">
      <div className="hero-art">
        <img
          className="castle-image"
          src={castleArtwork}
          width="1366"
          height="768"
          alt="A moonlit castle above a lake, with house banners and a lantern in the foreground."
          fetchPriority="high"
        />
        <div className="image-vignette" aria-hidden="true" />
      </div>

      <LaunchMessage />

      <footer className="footer">
        <span>© 2026 Hackwarts</span>
        <span className="footer-divider" aria-hidden="true" />
        <span>Something exciting is on its way.</span>
      </footer>
    </main>
  )
}

export default App
