
// Components
import ServiceBanner from '../../Common/ServiceBanner';
import ServiceDetail from '../../Common/ServiceDetail';
import Package from '../../Common/Package';

// Data - Single source of truth for this page
import {
    packagesData,
    serviceBannerData,
    serviceDetailData, // Assuming you refactor this next
} from '../../Data/PaintProtectionFilmInstallation/data';
import Seo from '../../components/Seo';


const PaintProtectionFilmInstallation = () => {
    return (
        <div className="bg-black">
            <Seo
                title="PPF Installation in Okehampton | Crystal Clean"
                description="Certified paint protection film installation in Okehampton. Shield your vehicle from stone chips, scratches, and road damage with Crystal Clean."
                canonicalPath="/paint-protection-film-installation"
            />
            <ServiceBanner data={serviceBannerData} />
            <ServiceDetail data={serviceDetailData} />
            <Package data={packagesData}/>
        </div>
    );
};

export default PaintProtectionFilmInstallation;
