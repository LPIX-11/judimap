import { Flex, Heading, Image } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export default function MobileCoverView() {
  return (
    <Flex className={'position-relative'} direction={'column'} w={'100%'} h={'30vh'} align={'center'} justify={'center'}>
      <div className={'bg-dark position-absolute'} style={{ height: '30vh', width: '100%', opacity: .6 }}></div>

      <Image src={'/black_woman_min.webp'} height={'100%'} width={'100%'} pos={'absolute'} zIndex={-2} alt={'Cover'} />

      <Flex className={'position-relative container-fluid'} direction={'column'} w={'100%'} h={'100vh'} bg={'transparent'} align={'start'} justify={'center'}>
        <Heading color={'#FFF'} size={'lg'}>JudiMap</Heading>
        <Heading color={'#FFF'} as={'h5'} size={'md'}>“ Le souci d’un justiciable bien informé “</Heading>
      </Flex>

      <Flex className={'position-absolute w-100'} bottom={10} align={'center'} justify={'center'}>
        <FiChevronDown color={'white'} size={32} />
      </Flex>
    </Flex>
  )
}