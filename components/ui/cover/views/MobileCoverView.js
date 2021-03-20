import { Flex, Heading, Image } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export default function MobileCoverView() {
  return (
    <Flex className={'position-relative'} mb={80} direction={'column'} w={'100%'} h={'30vh'} align={'center'} justify={'center'}>
      <div className={'bg-dark position-absolute'} style={{ height: 300, width: '100%', top: 0, opacity: .6 }}></div>

      <Image src={'/wedo.jpeg'} height={300} width={'100%'} pos={'absolute'} top={0} zIndex={-2} alt={'Cover'} loading={'lazy'} />

      <Flex className={'position-relative container-fluid'} mt={35} direction={'column'} w={'100%'} h={'100vh'} bg={'transparent'} align={'start'} justify={'center'}>
        <Heading color={'#FFF'} size={'lg'}>JudiMap</Heading>
        <Heading color={'#FFF'} as={'h5'} size={'md'} fontSize={18}>“ Le souci d’un justiciable bien informé “</Heading>
      </Flex>

      <Flex className={'position-absolute w-100'} bottom={-70} align={'center'} justify={'center'}>
        <FiChevronDown color={'white'} size={32} />
      </Flex>
    </Flex>
  )
}