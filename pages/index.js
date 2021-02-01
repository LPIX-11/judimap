import { Flex, Grid, Heading } from '@chakra-ui/react'
import Head from 'next/head'

// import InfoCard from '../components/common/card/info/InfoCard'
import ServiceCard from '../components/common/card/service/ServiceCard'
import ServiceCardList from '../components/common/card/service/serviceCardList/ServiceCardList'
import DownloadAppLinks from '../components/common/download/Download'
import Cover from '../components/ui/cover/Cover'
import Layout from '../components/ui/skeleton/Layout'

import { GiScales } from 'react-icons/gi'
import Card3D from '../components/common/card/3D/Card3D'
import { Container } from 'react-bootstrap'
import InfoCardList from '../components/common/card/info/InfoCardList/InfoCardList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JudiMap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Cover />
        <Grid>
          <Flex className={'pt-4 w-100'} justify={'center'}>
            <span style={{ fontFamily: 'Poppins', fontSize: 34 }}>La bonne connaissance du droit par tous !</span>
          </Flex>
          <InfoCardList />
          {/* <ServiceCardList /> */}
          {/* Quote */}
          <div data-aos={'fade-left'}>
            <Grid className={'my-5'}>
              <Flex justify={'center'} className={'pb-4'}>
                <GiScales size={60} />
              </Flex>

              <Flex justify={'center'}>
                <span className={'h5'} style={{ color: 'orange', fontFamily: 'Poppins regular' }}>Comme disait Aristote</span>
              </Flex>

              <Flex align={'center'} justify={'center'}>
                <Heading as={'h3'} style={{ fontFamily: 'Poppins' }}>"Le droit est un ordre, mais le bon droit est  le bon ordre"</Heading>
              </Flex>
            </Grid>
            {/* Quote */}
          </div>
        </Grid>

        <Container fluid className={'px-5'}>
          <Flex align={'start'} w={'100%'}>
            <div data-aos={'fade-right'}>
              <Card3D />
            </div>
            <div className={'pt-5 pl-3'} data-aos={'fade-left'}>
              A travers le service de LINKING que nous proposons, nous  permettons aux justiciables de trouver facilement des agents de justice spécialisés (avocats, notaire, huissier…) pour les assistés dans certaines démarches.

              Nous équipe est jeune, qualifiée et très à l’écoute. Elle s’adapte au besoin particulier et permanent de chaque client.
            </div>
          </Flex>
        </Container>

        {/* <ServiceCard name={'Qui sommes nous ?'} description={'La nouvelle plateforme d’information et d’orientation juridique au Sénégal.'} /> */}
        <DownloadAppLinks />
      </Layout>
    </div >
  )
}
