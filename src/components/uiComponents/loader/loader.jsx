import loaderSvg from './loader.svg'
import './loader.css'

export const Loader = () => {
  return (
    <div className='loader'>
      <img src={loaderSvg} alt="Loading..." />
    </div>
  )
}