import { Media, MediaContextProvider } from "../../../../../src/utils/Media";
import DesktopInfoCardListView from './views/DesktopInfoCardListView'
import MobileInfoCardListView from "./views/MobileInfoCardListView";

export default function InfoCardList() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'lg'}>
        <DesktopInfoCardListView />
      </Media>
      <Media lessThan={'lg'}>
        <MobileInfoCardListView />
      </Media>
    </MediaContextProvider>
  )
}