import { Flex, Grid, Heading } from '@chakra-ui/react'
import Head from 'next/head'

import DownloadAppLinks from '../components/common/download/Download'
import Cover from '../components/ui/cover/Cover'
import Layout from '../components/ui/skeleton/Layout'

import { GiScales } from 'react-icons/gi';

import InfoCardList from '../components/common/card/info/InfoCardList/InfoCardList'
import BottomSection from '../components/common/bottom/BottomSection'
import Contacts from '../components/common/contacts/Contacts'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Layout>
        <Cover />
        <Container fluid style={{ maxWidth: 1600 }}>
          <Flex className={'py-4 pt-5 w-100'} justify={'center'}>
            <span className={'text-center'} style={{ fontFamily: 'Poppins', fontSize: 34 }}>La bonne connaissance du droit par tous !</span>
          </Flex>
          <InfoCardList />

          <div data-aos={'fade-left'}>
            <Grid className={'my-5'}>
              <Flex justify={'center'} className={'pb-4'}>
                <GiScales size={60} />
              </Flex>

              <Flex justify={'center'} direction={'column'}>
                <Flex justify={'center'}>
                  <span className={'h5'} style={{ color: 'orange', fontFamily: 'Poppins regular' }}>Comme disait Aristote</span>
                </Flex>

                <Flex align={'center'} justify={'center'}>
                  <Heading as={'h3'} className={'text-center'} style={{ fontFamily: 'Poppins' }}>"Le droit est un ordre, mais le bon droit est  le bon ordre"</Heading>
                </Flex>
              </Flex>
            </Grid>
          </div>

          <BottomSection />

          <DownloadAppLinks />

          <Contacts />
        </Container>
      </Layout>
    </div >
  )
}
