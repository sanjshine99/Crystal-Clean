
// Components
import ServiceBanner from '../../Common/ServiceBanner';
import ServiceDetail from '../../Common/ServiceDetail';
import Package from '../../Common/Package';

// Data - Single source of truth for this page
import {
    packagesData,
    serviceBannerData,
    serviceDetailData, // Assuming you refactor this next
} from '../../Data/Polishing/data';
import Seo from '../../components/Seo';


const Polishing = () => {
    return (
        <div className="bg-black">
            <Seo
                title="Paint Correction & Polishing in Okehampton | Crystal Clean"
                description="Professional paint correction and machine polishing in Okehampton. Restore gloss, reduce swirl marks, and refine your vehicle's finish with Crystal Clean."
                canonicalPath="/paint-correction-exeter"
            />
            <ServiceBanner data={serviceBannerData} />
            <ServiceDetail data={serviceDetailData} />
            <Package data={packagesData}/>
        </div>
    );
};

export default Polishing;
