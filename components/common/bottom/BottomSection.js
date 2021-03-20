import { Flex, Heading, Text, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react';
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
                A travers notre équipe composée de juristes spécialisés dans tous les domaines du droit et les démarches administratives ; et des experts dans le domaine de l’entrepreneuriat et du développement de PME, nous vous garantissons :
              </Text>
              <UnorderedList>
                <ListItem>Une assistance et des conseils juridiques sur mesure</ListItem>
                <ListItem>Une réponse rapide, fiable et opérationnelle à toutes vos questions juridiques</ListItem>
                <ListItem>Un accompagnement dans les procédures administratives.</ListItem>
              </UnorderedList>

              <Text>
                Dès réception de votre demande, un de nos collaborateur  :
              </Text>
              <UnorderedList>
                <ListItem>Vous rappelle dans un délai de 24 h pour recueillir plus d’informations</ListItem>
                <ListItem>Vous fixe un rendez-vous en présentielle ou en ligne</ListItem>
                <ListItem> Fait une analyse de votre demande et une proposition financière</ListItem>
                <ListItem> Établit un compte rendu et, vous mets en rapport avec un spécialiste qui se chargera de traiter votre demande dans les plus brefs délais.</ListItem>
              </UnorderedList>
            </div>
          </Flex>
        </Container>
      </Media>
      <Media lessThan={'lg'}>
        <div data-aos={'zoom-out-down'}>
          <Card border={'warning'} style={{ width: '100%' }}>
            <Card.Img variant={'top'} src={'/strat.jpeg'} alt="Card image" loading={'lazy'} />
            <Card.Body>
              <Card.Title as={'h3'} style={{ color: 'purple' }}>Notre Stratégie</Card.Title>
              <Card.Text>
                A travers notre équipe composée de juristes spécialisés dans tous les domaines du droit et les démarches administratives ; et des experts dans le domaine de l’entrepreneuriat et du développement de PME, nous vous garantissons :
              </Card.Text>
            </Card.Body>
            <ListGroup className={'list-group-flush'}>
              <ListGroupItem>Une assistance et des conseils juridiques sur mesure</ListGroupItem>
              <ListGroupItem>Une réponse rapide, fiable et opérationnelle à toutes vos questions juridiques</ListGroupItem>
              <ListGroupItem>Un accompagnement dans les procédures administratives.</ListGroupItem>
            </ListGroup>
            <Card.Body>
              Dès réception de votre demande, un de nos collaborateur  :
              <UnorderedList px={0}>
                <ListItem>Vous rappelle dans un délai de 24 h pour recueillir plus d’informations</ListItem>
                <ListItem>Vous fixe un rendez-vous en présentielle ou en ligne</ListItem>
                <ListItem> Fait une analyse de votre demande et une proposition financière</ListItem>
                <ListItem> Établit un compte rendu et, vous mets en rapport avec un spécialiste qui se chargera de traiter votre demande dans les plus brefs délais.</ListItem>
              </UnorderedList>
            </Card.Body>
          </Card>
        </div>
      </Media>
    </MediaContextProvider >
  )
}