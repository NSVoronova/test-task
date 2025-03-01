import { FC } from "react"
import { Link } from "react-router-dom"

interface IOffer {
  isBig:  boolean,
  title: string,
  text: string,
  background: string,
}

const Offer: FC<IOffer> = ({ background, isBig, text, title}) => {
  return (
    <div className={`offer__container ${background} ${!isBig ? 'offer__container-small' : ''}`}>
      <div className="offer__content">
        <p className={isBig ? 'offer__title-big' : 'offer__title-small'}>{title}</p>
        <p className={isBig ? 'offer__text-big' : 'offer__text-small'}>{text}</p>
        <Link to="/" className="offer__button">Learn more</Link>
      </div>
    </div>
  )
}

export default Offer
