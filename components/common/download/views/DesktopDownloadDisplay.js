import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Img,
  AspectRatio
} from '@chakra-ui/react';
import Link from 'next/link';

import AppStoreBadge from '../storeBadges/AppStoreBadge';
import PlayStoreBadge from '../storeBadges/PlayStoreBadge';


const DesktopDownloadDisplay = () => {
  return (
    <Flex w={'100%'}>
      <Box w={'75%'}>
        <Stack direction={["column", "row"]} spacing={4}>
          <Heading textAlign={['left']} fontSize={'4xl'}>
            Download our app
          </Heading>
          <Text
            textAlign={['center', 'center', 'left']}
            color={'gray.600'}
            fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
        </Text>
          <Stack
            justifyContent={['center', 'center', 'left']}
            direction={'row'}
            pt={6}>
            <Link href={'/'} passHref>
              <a target={'_blank'}>
                <AppStoreBadge />
              </a>
            </Link>
            <Link href={'/'} passHref>
              <a target={'_blank'}>
                <PlayStoreBadge />
              </a>
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Box w={'25%'}>
        <Stack>
          {/* <Box p={[0, 0, 10]} pt={[20, 20, 0]}> */}
          <AspectRatio maxW="100px" ratio={4 / 3}>
            <Img
              // style={{
              //   transform: useBreakpointValue([
              //     'rotate(-45deg)',
              //     'rotate(-45deg)',
              //     'rotate(0deg)',
              //   ]),
              // }}
              objectFit={'cover'}
              alt={'Device'}
              src={'https://chakra-templates.dev/images/device.png'}
            />
          </AspectRatio>
          {/* </Box> */}
        </Stack>
      </Box>
    </Flex>
  )
}

export default DesktopDownloadDisplay;