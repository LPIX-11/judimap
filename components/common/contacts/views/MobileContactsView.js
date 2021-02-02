import { Flex } from "@chakra-ui/react";
import { ImLinkedin, ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { VscTwitter } from "react-icons/vsc";
import { LINKEDIN, MAIL, TWITTER, WHATSAPP } from "../../../../src/functions/Contacts";

export default function MobileContactsView() {
  return (
    <Flex justify={'space-evenly'} paddingBottom={30}>
      <a href={LINKEDIN} target="_blank" rel="noopener">
        <ImLinkedin size={30} color={'#0a66c2'} />
      </a>
      <a href={MAIL}>
        <SiGmail size={30} color={'#bf211e'} />
      </a>
      <a href={WHATSAPP}>
        <ImWhatsapp size={30} color={'#27d246'} />
      </a>
      <a href={TWITTER} target="_blank" rel="noopener">
        <VscTwitter size={30} color={'#1da1f2'} />
      </a>
    </Flex>
  )
}