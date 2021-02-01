import { Media, MediaContextProvider } from '../../../../src/utils/Media';
import DesktopInfoCardView from './views/DesktopInfoCardView/DesktopInfoCardView';
import MobileInfoCardView from './views/MobileInfoCardView/MobileInfoCardView';

export default function InfoCard(props) {
  return (
    <>
      <MediaContextProvider>
        <Media greaterThanOrEqual={'xl'}>
          <DesktopInfoCardView {...props} />
        </Media>
        <Media lessThan={'xl'}>
          <MobileInfoCardView {...props} />
        </Media>
      </MediaContextProvider>
    </>
  )
}

/*
- Aide et assistance dans les démarches administratives au Sénégal.
- Consulting juridique ( rédaction de contrat, secrétariat juridique, reporting...)
*/