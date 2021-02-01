import { Media, MediaContextProvider } from "../../../../../src/utils/Media";
import DesktopInfoCardListView from './views/DesktopInfoCardListView'
import MobileInfoCardListView from "./views/MobileInfoCardListView";

export default function InfoCardList() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'xl'}>
        <DesktopInfoCardListView />
      </Media>
      <Media lessThan={'xl'}>
        <MobileInfoCardListView />
      </Media>
    </MediaContextProvider>
  )
}