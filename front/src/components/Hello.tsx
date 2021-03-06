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
  const [isPlay, setisPlay]: any = useState(false)

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

      type Data = { url: string | undefined }

      let data: Data = { url: INPUT_ELEMENT.current?.value }

      const response = await fetch(process.env.REACT_APP_URL + '/backend/extract', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
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
    if(PLAYLIST.length !== 0) {
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
      setisPlay(true)
      if(!isStop) setisStop(true)
      let random = GetRandom(0, PLAYLIST.length)
      if(audio !== undefined) audio.pause()
      //audio = new Audio('hello/AKMU - FREEDOM (AUDIO).mp3')
      audio = new Audio('/hello/mp3/' + PLAYLIST[random])
      audio.play()
      PLAYLIST.splice(random, 1)
      audio.addEventListener('ended', Play)
    } 
  }
  
  const Stop = () => {
    if(audio !== undefined) {
      DIV_ELEMENT3.current!.style.display = 'none'
      const child: any = DIV_ELEMENT.current?.children
      for(let i = 0; i < child.length; i++) { child[i].style.animation = '' }
      audio.pause()
      setisPlay(false)
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

  const OpenRemoveModal = () => {
    setRemoveMusic(true)
    const button: any = document.querySelectorAll('.control-button')
    button[0].style.display = 'none'
    button[1].style.display = 'none'
    DIV_ELEMENT3.current!.style.display = 'none'
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
  const CloseRemoveModal = () => {
    setRemoveMusic(false)
    const button: any = document.querySelectorAll('.control-button')
    button[0].style.display = 'block'
    button[1].style.display = 'block'
    if(isPlay) DIV_ELEMENT3.current!.style.display = 'block'
  }

  return (
    <div id='hello' onClick={CloseSubTag}>
      <header>
        <div className='logo'>Hello!</div>
        <div className='settings' onClick={ShowSettings}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>
        </div>
        {visible?
        <ul>
          <li onClick={()=>setAddmusic(true)}>곡 등록</li>
          <li onClick={OpenRemoveModal}>곡 삭제</li>
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
          <button className='control-button' onClick={Play}>PLAY</button>
          { isStop ? <button className='control-button' onClick={Stop}>STOP</button> : <button className='control-button' onClick={Restart}>RESTART</button> }
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
                </ul> */}
              </div>
              <div className='modal-footer' onClick={CloseRemoveModal}>닫기</div>
            </div>
      </div>
      : null }
    </div>
  )
}

export default Hello
