
// Components
import ServiceBanner from '../../Common/ServiceBanner';
import ServiceDetail from '../../Common/ServiceDetail';
import Package from '../../Common/Package';

// Data - Single source of truth for this page
import {
    packagesData,
    serviceBannerData,
    serviceDetailData, // Assuming you refactor this next
} from '../../Data/CeramicCoating/data';
import Seo from '../../components/Seo';


const CeramicCoating = () => {
    return (
        <div className="bg-black">
            <Seo
                title="Ceramic Coating in Okehampton | Crystal Clean"
                description="Protect your vehicle with professional ceramic coating in Okehampton. Crystal Clean delivers durable gloss, hydrophobic protection, and easier maintenance."
                canonicalPath="/ceramic-coatings-exeter"
            />
            <ServiceBanner data={serviceBannerData} />
            <ServiceDetail data={serviceDetailData} />
            <Package data={packagesData}/>
        </div>
    );
};

export default CeramicCoating;
