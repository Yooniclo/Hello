import '../scss/Hello.scss'

const Hello = () => {
  return (
    <div id='hello'>
      <header>

      </header>
      <section>
        <div className='status-wrapper'>
          status
        </div>
        <div className='control-wrapper'>
          <div className='music-wave-loader'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          play & stop
        </div>
      </section>
      <footer>

      </footer>
    </div>
  )
}

export default Hello
