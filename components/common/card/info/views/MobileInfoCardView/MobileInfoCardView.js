import { Flex, Image } from '@chakra-ui/react';
import infoCardStyle from './MobileInfoCardView.module.css';

export default function MobileInfoCardView({ title, description, image }) {
  return (
    <div className={infoCardStyle.card}>
      <div className={infoCardStyle.gradiantCircle}></div>
      <Flex direction={'column'}>
        <Flex justify={'center'}>
          <div className={infoCardStyle.title}>JudiMap</div>
        </Flex>
        <Flex>
          <h2>{title}</h2>
        </Flex>
        <div className={'p-4'}>
          {description}
        </div>
      </Flex>
    </div>
  )
}