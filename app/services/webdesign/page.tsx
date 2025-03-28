import NavigationBar from "@/components/navigation-bar";
import PricingTable from "@/components/pricing-table";
import BulletList from "@/components/bullet-list";
import { webDesignPricing } from "@/lib/data";
import { Img } from "@/components/img";

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

            {/* Results Section */}
            <Img
                alt="Google Page"
                src="/imgs/pagespeedinsights-01.png"
                width={800}
            />

            <Img
                alt="Google Page"
                src="/imgs/pagespeedinsights-02.png"
                width={800}
            />

        </>
    );
};

export default Page;