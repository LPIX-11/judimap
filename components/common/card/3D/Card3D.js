import { Card } from 'react-bootstrap';
import card3Dtyle from './Card3D.module.css';

export default function Card3D({ right, title, description }) {
  return (
    <>
      <div className={right ? card3Dtyle.wrapperAlt : card3Dtyle.wrapper}>
        <div className={right ? card3Dtyle.innerAlt : card3Dtyle.inner}>
          <Card className="bg-dark text-white border-0">
            <div className={'bg-dark position-absolute'} style={{ height: '100%', width: '100%', opacity: .4 }}></div>
            <Card.Img src="/black_lawyer.jpg" alt="Card image" />
            <Card.ImgOverlay>
              {/* <Card.Title as={'h3'}>Notre Stratégie</Card.Title>
              <Card.Text style={{ color: '#000', fontFamily: 'Poppins Regular' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </Card.Text> */}
              <Card.Text>JudiMap Orientation</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </>
  )
}