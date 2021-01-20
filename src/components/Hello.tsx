import { useRef } from 'react'
import '../scss/Hello.scss'

const Hello = () => {

  const DIV_ELEMENT = useRef<HTMLDivElement>(null)

  const Play = () => {

    const child: any = DIV_ELEMENT.current?.children
    console.log(child)

    
    for(let i = 0; i < child.length; i++) { child[i].style.animation = 'animate 1s linear infinite' }
    child[0].style.animationDelay = '0s'
    child[1].style.animationDelay = '0.3s'
    child[2].style.animationDelay = '0.6s'
    child[3].style.animationDelay = '0.9s'
    child[4].style.animationDelay = '0.2s'
    child[5].style.animationDelay = '0.5s'
    child[6].style.animationDelay = '0.7s'
    // DIV_ELEMENT.current!.style.height = '50px'
  }

  return (
    <div id='hello'>
      <header>
        <div></div>
        <div className='settings'></div>
        <ul>
          <li>곡 등록</li>
          <li>곡 삭제</li>
        </ul>
      </header>
      <section>
        <div className='status-wrapper'>
          <div className='music-wave-loader' ref={DIV_ELEMENT}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
        <div className='control-wrapper'>
          <button onClick={Play}>PLAY</button>
        </div>
      </section>
      <footer>

      </footer>
    </div>
  )
}

export default Hello
