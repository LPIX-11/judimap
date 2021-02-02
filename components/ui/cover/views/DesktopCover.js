import { Flex, Heading, Image } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

import coverStyle from '../Cover.module.css'

export default function DesktopCoverView() {
  return (
    <Flex className={'position-relative'} direction={'column'} w={'100%'} h={'80vh'} align={'center'} justify={'center'}>

      <div className={coverStyle.left} style={{ zIndex: 1 }}>
        <Flex className={'position-relative pl-5'} direction={'column'} w={'60vw'} h={'80vh'} bg={'transparent'} align={'start'} justify={'center'}>
          <Heading color={'#FFF'} as={'h1'} size={'lg'} style={{ fontSize: 52 }}>JudiMap</Heading>
          <Heading color={'#FFF'} as={'h3'} className={`text-primary fade-in`} size={'md'}>
            La nouvelle plateforme d’information et d’orientation juridique au Sénégal.
          </Heading>

          <a className={coverStyle.ctaButton} onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>Découvrir</a>
        </Flex>
      </div>

      <div className={coverStyle.right}>
        <Image src={'/young_girl.webp'} height={'100vh'} width={'100%'} pos={'absolute'} zIndex={-2} right={-10} alt={'Cover'} />
      </div>
      <div className={'bg-dark position-absolute'} style={{ height: '80vh', width: '100%', opacity: .3 }}></div>
      <Flex className={'position-absolute w-100'} bottom={10} align={'center'} justify={'center'} zIndex={300}>
        <FiChevronDown className={'bouncy'} color={'white'} size={32} />
      </Flex>
    </Flex>
  )
}