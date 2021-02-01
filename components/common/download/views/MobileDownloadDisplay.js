import { Container } from 'react-bootstrap'
import {
  Heading,
  Text,
  Stack,
  Flex
} from '@chakra-ui/react';
import Link from 'next/link';

import AppStoreBadge from '../storeBadges/AppStoreBadge';
import PlayStoreBadge from '../storeBadges/PlayStoreBadge';


const MobileDownloadDisplay = () => {
  return (
    <Container fluid className={'px-1'}>
      <Flex
        maxW={'7xl'}
        p={4}
        display={'flex'}
        alignItems={'center'}
        direction={'column'}>
        <Stack spacing={4}>
          <Heading textAlign={['center', 'center', 'left']} fontSize={'4xl'}>
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
      </Flex>
    </Container>
  )
}

export default MobileDownloadDisplay;