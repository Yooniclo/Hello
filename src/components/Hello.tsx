import { useRef, useState } from 'react'
import '../scss/Hello.scss'

const Hello = () => {

  const DIV_ELEMENT = useRef<HTMLDivElement>(null)
  const INPUT_ELEMENT = useRef<HTMLInputElement>(null)
  const [visible, setVisible]: any = useState(false)
  const [loading, setLoading]: any = useState(false)
  const [addmusic, setAddmusic]: any = useState(false)

  const CloseSubTag = () => {
    if(visible) setVisible(false)
  }

  const ShowSettings = () => {
    visible ? setVisible(false) : setVisible(true)
  }

  const CheckURL = () => {
    INPUT_ELEMENT.current?.value !== '' ? setLoading(true) : setLoading(false)
  }

  const Play = () => {

    const child: any = DIV_ELEMENT.current?.children
    
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
    <div id='hello' onClick={CloseSubTag}>
      <header>
        <div></div>
        <div className='settings' onClick={ShowSettings}></div>
        {visible?
        <ul>
          <li onClick={()=>setAddmusic(true)}>곡 등록</li>
          <li>곡 삭제</li>
        </ul>
        : null}
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
      { addmusic?
      <div className='add-music-wrapper'>
          <input type='text' placeholder='유튜브 링크를 입력하세요' spellCheck={false} ref={INPUT_ELEMENT} onKeyUp={CheckURL} />
          { loading ? 
          <div className='loading-wrapper'>
            <div className='loading'></div>
          </div>
          : null }
          <div className='add-result'></div>
          <div className='close-add-music' onClick={()=>setAddmusic(false)}>닫기</div>
      </div> 
      : null }
    </div>
  )
}

export default Hello
