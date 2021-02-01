import { Flex, Heading, Image } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { Media, MediaContextProvider } from "../../../src/utils/Media";
import DesktopCoverView from "./views/DesktopCover";
import MobileCoverView from "./views/MobileCoverView";

export default function Cover() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'lg'}>
        <DesktopCoverView />
      </Media>
      <Media lessThan={'lg'}>
        <MobileCoverView />
      </Media>
    </MediaContextProvider>
  )
}