import { Media, MediaContextProvider } from "../../../../../src/utils/Media";
import DesktopServiceCardListView from "./views/DesktopServiceCardListView";

export default function ServiceCardList() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'lg'}>
        <DesktopServiceCardListView />
      </Media>
      <Media lessThan={'lg'}>

      </Media>
    </MediaContextProvider>
  )
}