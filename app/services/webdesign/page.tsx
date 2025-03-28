import NavigationBar from "@/components/navigation-bar";
import PricingTable from "@/components/pricing-table";
import BulletList from "@/components/bullet-list";
import { webDesignPricing } from "@/lib/data";

const Page = () => {
    return (
        <>
            {/* Nav Section */}
            <section>
                <NavigationBar
                    cta={{ label: "Comenzar Ahora", href: "/form-detailed" }}
                />
            </section >

            {/* Section */}
            <section id="" className="section space-y-4">
                <div >
                    <BulletList items={webDesignPricing.included} />
                    <PricingTable services={webDesignPricing.table} />
                </div>
            </section>
        </>
    );
};

export default Page;