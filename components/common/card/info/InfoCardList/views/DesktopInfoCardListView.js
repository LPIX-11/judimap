import { Flex } from "@chakra-ui/react";
import InfoCard from '../../InfoCard';

export default function DesktopInfoCardListView() {
  return (
    <div className={'w-100 px-5'} data-aos={'fade-up'}>
      <Flex className={'pt-4 w-100'} justify={'space-between'}>
        <InfoCard title={'Qui sommes nous ?'} image={'/whoami.jpeg'} description={'La première plateforme digitale dédiée à l’information juridique et administrative au Sénégal pour pallier au manque de connaissances juridiques de bases qui devraient être la feuille de route de tout bon citoyens.'} />

        <InfoCard title={'Ce qu’on fait'} image={'/wedo.jpeg'} description={`
              -Nous informons et orientons la population sur leurs droits et obligations, et sur  l’actualité juridique au Sénégal.
              -Conseil et assistance aux entrepreneurs dans la formalisation de leurs activités et aux entreprises étrangères dans le processus d’investissement et d’implantation au Sénégal.`} />

        <InfoCard title={'Notre Cible ?'} image={'/target.jpeg'} description={`Population sénégalaise
              Entrepreneurs
              Entreprises
              Agents de justice
              Étudiant / Juristes`} />
      </Flex>
    </div>
  )
}