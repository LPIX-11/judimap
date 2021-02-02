import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Img,
} from '@chakra-ui/react';
import Link from 'next/link';

import downloadStyle from './DesktopDownloadDisplay.module.css'

import AppStoreBadge from '../storeBadges/AppStoreBadge';
import PlayStoreBadge from '../storeBadges/PlayStoreBadge';
import { Container } from 'react-bootstrap';

const DesktopDownloadDisplay = () => {
  return (
    <Container fluid className={'px-5 pb-5'}>
      <Flex w={'100%'} direction={'column'} className={'py-5 mb-5'}>
        <Heading textAlign={['center']} fontSize={'4xl'} className={'pb-4'}>
          Download our app
        </Heading>
        <Flex className={'mb-4'}>
          <div data-aos={'fade-up'}>
            <Flex direction={'column'}>
              <Box >
                <Stack direction={["column", "row"]} spacing={4}>
                  <Text
                    textAlign={['center', 'center', 'left']}
                    color={'gray.600'}
                    fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                  </Text>
                  <Text
                    textAlign={['center', 'center', 'left']}
                    color={'gray.600'}
                    fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                  </Text>
                </Stack>
              </Box>
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
            </Flex>
          </div>

          <div className={'position-relative'} data-aos={'fade-down'} style={{ width: '50%', }}>
            <Img
              height={400}
              alt={'Device'}
              src={'/mobile_mockup.webp'}
              pos={'absolute'}
              top={-20}
              right={20}
              loading={'lazy'}
            />
          </div>
        </Flex>
      </Flex>
    </Container>
  )
}

export default DesktopDownloadDisplay;