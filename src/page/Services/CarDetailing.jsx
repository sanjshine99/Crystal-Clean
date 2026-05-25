
// Components
import ServiceBanner from '../../Common/ServiceBanner';
import ServiceDetail from '../../Common/ServiceDetail';
import Package from '../../Common/Package';

// Data - Single source of truth for this page
import {
    packagesData,
    serviceBannerData,
    serviceDetailData, // Assuming you refactor this next
} from '../../Data/CarDetailing/data';
import Seo from '../../components/Seo';


const CarDetailing = () => {
    return (
        <div className="bg-black">
            <Seo
                title="Car Detailing in Okehampton | Crystal Clean"
                description="Premium car detailing in Okehampton with mobile and studio options. Crystal Clean restores, protects, and refines vehicles across Devon."
                canonicalPath="/car-detailing-exeter"
            />
            <ServiceBanner data={serviceBannerData} />
            <ServiceDetail data={serviceDetailData} />
            <Package data={packagesData}/>
        </div>
    );
};

export default CarDetailing;
