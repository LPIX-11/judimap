import { Flex, Heading, Image } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { Media, MediaContextProvider } from "../../../src/utils/Media";
import DesktopCoverView from "./views/DesktopCover";
import MobileCoverView from "./views/MobileCoverView";

export default function Cover() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'xl'}>
        <DesktopCoverView />
      </Media>
      <Media lessThan={'xl'}>
        <MobileCoverView />
      </Media>
    </MediaContextProvider>
  )
}