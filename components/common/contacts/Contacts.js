import { Media, MediaContextProvider } from "../../../src/utils/Media";
import DesktopContactsView from "./views/DesktopContactsView";
import MobileContactsView from "./views/MobileContactsView";

export default function Contacts() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'lg'}>
        <DesktopContactsView />
      </Media>
      <Media lessThan={'lg'}>
        <MobileContactsView />
      </Media>
    </MediaContextProvider>
  )
}