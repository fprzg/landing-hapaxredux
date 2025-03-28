import NavigationBar from "@/components/navigation-bar";
import PricingTable from "@/components/pricing-table";
import BulletList from "@/components/bullet-list";
import { seoPricing } from "@/lib/data";

const Page = () => {
    return (
        <>
            {/* Nav Section */}
            < section >
                <NavigationBar
                    cta={{ label: "Comenzar Ahora", href: "/form-detailed" }}
                />
            </section >

            {/* Section */}
            <section id="" className="section space-y-4">
                <BulletList items={seoPricing.included} />
                <PricingTable services={seoPricing.table} />
            </section>
        </>
    );
};

export default Page;