import { Flex } from "@chakra-ui/react";
import { FaBalanceScale } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import ServiceCard from "../../ServiceCard";

export default function DesktopServiceCardListView() {
  return (
    <>
      <Flex className={'pt-4'} justify={'space-evenly'} w={'100%'} >
        <ServiceCard
          name={'Qui sommes nous ?'}
          description={'La nouvelle plateforme d’information et d’orientation juridique au Sénégal.'} />


        <ServiceCard
          name={'Ce qu’on fait'}
          description={'Information - Conseil - Assistance - Consulting'} />

        <ServiceCard
          name={'Ce qu’on fait'}
          description={'Information - Conseil - Assistance - Consulting'} />
      </Flex>
    </>
  )
}