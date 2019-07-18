import { render } from 'react-dom'
import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './Instagram2.css'
 
 
 
const pages = 

[
  'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1999579/pexels-photo-1999579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1236809/pexels-photo-1236809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]
 
 
 
function Viewpager() {
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })

  
  return (
    <div className="spring-container">
      {props.map(({ x, display, sc }, i) => (
        <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
          <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
      ))}
    </div>
  )
}
 
export default Viewpager;