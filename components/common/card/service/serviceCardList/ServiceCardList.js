import { Media, MediaContextProvider } from "../../../../../src/utils/Media";
import DesktopServiceCardListView from "./views/DesktopServiceCardListView";

export default function ServiceCardList() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'xl'}>
        <DesktopServiceCardListView />
      </Media>
      <Media lessThan={'xl'}>

      </Media>
    </MediaContextProvider>
  )
}