import { Flex, Heading, Text } from '@chakra-ui/react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Media, MediaContextProvider } from '../../../src/utils/Media';

import Card3D from '../card/3D/Card3D';

export default function BottomSection() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'lg'}>
        <Container fluid className={'px-5'}>
          <Flex align={'start'} w={'100%'}>
            <div data-aos={'fade-right'}>
              <Card3D />
            </div>
            <div className={' pl-3'} data-aos={'fade-left'}>
              <Heading as={'h3'} color={'purple'}>Notre Stratégie</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </Text>
              <Text>
                A travers le service de LINKING que nous proposons, nous  permettons aux justiciables de trouver facilement des agents de justice spécialisés (avocats, notaire, huissier…) pour les assistés dans certaines démarches.
                Nous équipe est jeune, qualifiée et très à l’écoute. Elle s’adapte au besoin particulier et permanent de chaque client.
              </Text>
            </div>
          </Flex>
        </Container>
      </Media>
      <Media lessThan={'lg'}>
        <div data-aos={'zoom-out-down'}>
          <Card border={'warning'} style={{ width: '100%' }}>
            <Card.Img variant={'top'} src={'/black_lawyer.webp'} />
            <Card.Body>
              <Card.Title as={'h3'} style={{ color: 'purple' }}>Notre Stratégie</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
            </Card.Body>
            <ListGroup className={'list-group-flush'}>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href={'#'}>Card Link</Card.Link>
              <Card.Link href={'#'}>Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Media>
    </MediaContextProvider >
  )
}