import { Card } from 'react-bootstrap';
import card3Dtyle from './Card3D.module.css';

export default function Card3D({ right, title, description }) {
  return (
    <>
      <div className={right ? card3Dtyle.wrapperAlt : card3Dtyle.wrapper}>
        <div className={right ? card3Dtyle.innerAlt : card3Dtyle.inner}>
          <Card className="bg-dark text-white border-0">
            <div className={'bg-dark position-absolute'} style={{ height: '100%', width: '100%', opacity: .4 }}></div>
            <Card.Img src="/black_lawyer.webp" alt="Card image" loading={'lazy'} />
            <Card.ImgOverlay>
              <Card.Text>JudiMap Orientation</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </>
  )
}