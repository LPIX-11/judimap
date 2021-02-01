import { Media, MediaContextProvider } from '../../../src/utils/Media';
import DesktopDownloadDisplay from './views/DesktopDownloadDisplay';
import MobileDownloadDisplay from './views/MobileDownloadDisplay';

export default function DownloadAppLinks() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual={'lg'}>
        <DesktopDownloadDisplay />
      </Media>
      <Media lessThan={'lg'}>
        <MobileDownloadDisplay />
      </Media>
    </MediaContextProvider>
  );
}