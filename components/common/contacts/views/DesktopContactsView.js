import { Flex } from "@chakra-ui/react";
import { ImLinkedin, ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { VscTwitter } from "react-icons/vsc";

export default function DesktopContactsView() {
  return (
    <Flex justify={'space-evenly'} paddingBottom={30}>
      <ImLinkedin size={30} color={'#0a66c2'} />
      <SiGmail size={30} color={'#bf211e'} />
      <ImWhatsapp size={30} color={'#27d246'} />
      <VscTwitter size={30} color={'#1da1f2'} />
    </Flex>
  )
}