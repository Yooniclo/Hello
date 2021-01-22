import { useRef, useState, useEffect } from 'react'
import '../scss/Hello.scss'
let audio: any

const Hello = () => {
  
  const DIV_ELEMENT = useRef<HTMLDivElement>(null)
  const DIV_ELEMENT2 = useRef<HTMLDivElement>(null)
  const DIV_ELEMENT3 = useRef<HTMLDivElement>(null)
  const INPUT_ELEMENT = useRef<HTMLInputElement>(null)
  const [visible, setVisible]: any = useState(false)
  const [loading, setLoading]: any = useState(false)
  const [addmusic, setAddmusic]: any = useState(false)
  const [remove_music, setRemoveMusic]: any = useState(false)
  const [PLAYLIST, SET_PLAY_LIST]: any = useState([])
  const [REMOVE_LIST, SET_REMOVE_LIST]: any = useState([])
  const [isStop, setisStop]: any = useState(true)



  useEffect(() => { 
    const GetPlayList = async () => {
      const response = await fetch(process.env.REACT_APP_URL + '/init')
      let json = await response.json()
      SET_PLAY_LIST(json)
      SET_REMOVE_LIST(json)
    }
    GetPlayList()
  }, [])

  const CloseSubTag = () => {
    if(visible) setVisible(false)
  }

  const ShowSettings = () => {
    visible ? setVisible(false) : setVisible(true)
  }

  const CheckURL = async () => {
    if(INPUT_ELEMENT.current?.value !== '') {
      setLoading(true)

      type Data = {
        url: string | undefined
      }

      let data: Data = {
        url: INPUT_ELEMENT.current?.value
      }
      const response = await fetch(process.env.REACT_APP_URL + '/backend/extract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
  
      const result = await response.json()
      
      if(result.message === 'Success') {
        DIV_ELEMENT2.current!.style.display = 'block'
        DIV_ELEMENT2.current!.classList.add('success')
        DIV_ELEMENT2.current!.innerHTML = '곡이 등록되었습니다'
        setLoading(false)
      } else {
        DIV_ELEMENT2.current!.style.display = 'block'
        DIV_ELEMENT2.current!.classList.add('fail')
        DIV_ELEMENT2.current!.innerHTML = '유효하지 않은 URL 입니다'
        setLoading(false)
      }
    } else {
      setLoading(false)
    }

    if(INPUT_ELEMENT.current?.value.length === 0) {
      DIV_ELEMENT2.current!.style.display = 'none'
      DIV_ELEMENT2.current!.innerHTML = ''
    }
  }

  const GetRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const Play = () => {
    DIV_ELEMENT3.current!.style.display = 'block'
    const child: any = DIV_ELEMENT.current?.children
    for(let i = 0; i < child.length; i++) { child[i].style.animation = 'animate 1s linear infinite' }
    child[0].style.animationDelay = '0s'
    child[1].style.animationDelay = '0.3s'
    child[2].style.animationDelay = '0.6s'
    child[3].style.animationDelay = '0.9s'
    child[4].style.animationDelay = '0.2s'
    child[5].style.animationDelay = '0.5s'
    child[6].style.animationDelay = '0.8s'
    if(!isStop) setisStop(true)

    let random = GetRandom(0, PLAYLIST.length)
    if(audio !== undefined) audio.pause()
    // audio = new Audio('hello/AKMU - FREEDOM (AUDIO).mp3') <== FOR TEST
    audio = new Audio('/hello/mp3/' + PLAYLIST[random])
    audio.play()
    PLAYLIST.splice(random, 1)
    audio.addEventListener('ended', Play)
  }
  
  const Stop = () => {
    if(audio !== undefined) {
      DIV_ELEMENT3.current!.style.display = 'none'
      const child: any = DIV_ELEMENT.current?.children
      for(let i = 0; i < child.length; i++) { child[i].style.animation = '' }
      audio.pause()
      setisStop(false)
    } 
  }
  const Restart = () => {
    if(audio !== undefined) {
      DIV_ELEMENT3.current!.style.display = 'block'
      const child: any = DIV_ELEMENT.current?.children
      for(let i = 0; i < child.length; i++) { child[i].style.animation = 'animate 1s linear infinite' }
      child[0].style.animationDelay = '0s'
      child[1].style.animationDelay = '0.3s'
      child[2].style.animationDelay = '0.6s'
      child[3].style.animationDelay = '0.9s'
      child[4].style.animationDelay = '0.2s'
      child[5].style.animationDelay = '0.5s'
      child[6].style.animationDelay = '0.8s'
      audio.play()
      setisStop(true)
    }
  }

  const CloseAddMusic = () => {
    setAddmusic(false)
    setLoading(false)
  }

  const RemoveMusic = async (e: any) => {

    type DeleteDate = {
      filename: string
    }

    let data: DeleteDate = {
      filename: e.target.previousSibling.innerHTML
    }

    const response = await fetch(process.env.REACT_APP_URL + '/backend/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()

    if(result.message === 'Success') {
      e.target.previousSibling.remove()
      e.target.remove()
    } else {

    }
  }

  return (
    <div id='hello' onClick={CloseSubTag}>
      <header>
        <div className='logo'>Hello!</div>
        <div className='settings' onClick={ShowSettings}></div>
        {visible?
        <ul>
          <li onClick={()=>setAddmusic(true)}>곡 등록</li>
          <li onClick={()=>setRemoveMusic(true)}>곡 삭제</li>
        </ul>
        : null}
      </header>
      <section>
        <div className='status-wrapper' ref={DIV_ELEMENT3}>
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
          { isStop ?
            <button onClick={Stop}>STOP</button>
            :   
            <button onClick={Restart}>RESTART</button>
          }
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
          <div className='add-result' ref={DIV_ELEMENT2}></div>
          <div className='close-add-music' onClick={CloseAddMusic}>닫기</div>
      </div> 
      : null }
      {
      remove_music?
      <div className='remove-modal'>
            <div className='modal-overlay'></div>
            <div className='modal-wrapper'>
              <div className='modal-header'>
                REMOVE LIST
              </div>
              <div className='modal-contents'>
                {REMOVE_LIST.map((v: any, i:any) => (
                <ul>
                  <li key={i}>{v}</li><span onClick={RemoveMusic}>x</span>
                </ul>
                ))}
                {/* <ul>
                  <li>YOU THINK I'M STUPID? YOU THINK I'M CRAZY</li><span onClick={RemoveMusic}>x</span>
                </ul>
                <ul>
                  <li>AKMU - FREEDOM (AUDIO).mp3</li><span onClick={RemoveMusic}>x</span>
                </ul> */}
              </div>
              <div className='modal-footer' onClick={()=>setRemoveMusic(false)}>닫기</div>
            </div>
      </div>
      : null }
    </div>
  )
}

export default Hello
