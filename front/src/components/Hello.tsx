import { useRef, useState, useEffect } from 'react'
import '../scss/Hello.scss'

const Hello = () => {

  const DIV_ELEMENT = useRef<HTMLDivElement>(null)
  const DIV_ELEMENT2 = useRef<HTMLDivElement>(null)
  const INPUT_ELEMENT = useRef<HTMLInputElement>(null)
  const [visible, setVisible]: any = useState(false)
  const [loading, setLoading]: any = useState(false)
  const [addmusic, setAddmusic]: any = useState(false)
  const [playlist, setPlaylist]: any = useState([])

  useEffect(() => { 
    const GetPlayList = async () => {
      const response = await fetch(process.env.REACT_APP_URL + '/init')
      let json = await response.json()
      setPlaylist(json)
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
  

    let random = GetRandom(0, playlist.length)
    let audio = new Audio(process.env.REACT_APP_URL + '/hello/mp3/' + playlist[random])
    audio.play()
    audio.addEventListener('ended', function () {
      random = GetRandom(0, playlist.length)
      audio = new Audio('/hello/mp3/' + playlist[random])
      audio.play()
    })

  }

  const CloseAddMusic = () => {
    setAddmusic(false)
    setLoading(false)
  }

  return (
    <div id='hello' onClick={CloseSubTag}>
      <header>
        <div className='logo'>Hello!</div>
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
          <div className='add-result' ref={DIV_ELEMENT2}></div>
          <div className='close-add-music' onClick={CloseAddMusic}>닫기</div>
      </div> 
      : null }
    </div>
  )
}

export default Hello
