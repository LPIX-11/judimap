import { Image } from '@chakra-ui/react';
import infoCardStyle from './DesktopInfoCardView.module.scss';

export default function DesktopInfoCardView({ title, description, image = 'black_woman.jpg' }) {
  return (
    <div className={infoCardStyle.card}>
      <div className={infoCardStyle.card__image_container}>
        <Image className={`${infoCardStyle.img} ${infoCardStyle.card__image}`} src={image} alt="" />
      </div>

      <svg className={infoCardStyle.card__svg} viewBox="0 0 800 500" style={{ opacity: .9 }}>
        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="purple" fill="white" />
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="orange" strokeWidth="3" fill="transparent" />
      </svg>
      <div className={'position-absolute bg-white'} style={{ height: 213, width: '100%', top: 367, left: 0, opacity: .9 }}></div>
      <div className={'position-absolute px-3'} style={{ top: 305, zIndex: 1, left: 0 }}>
        <h1 className={infoCardStyle.card__title}>{title}</h1>
        <span className={infoCardStyle.card__description}>{description}</span>
      </div>
    </div>
  )
}