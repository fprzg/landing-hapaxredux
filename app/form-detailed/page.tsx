import { ContactFormDetailed } from "@/components/contact";
import NavigationBar from "@/components/navigation-bar";

const Page = () => {
    return (
        <div className="min-h-screen bg-white">
            <NavigationBar sections={[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
            ]}
            /**
             * cta={{ label: "Get Started", href: "#contact" }}
             */
            />

            <section className="py-20 bg-gray-50 grid grid-cols-1 ">
                <div className="text-center mb-12">
                    <h2 className="h2"> Let's talk about your project</h2>
                    <p className="p">Fill this form so we can help your business meets their goals.</p>
                </div>

                <div className="w-[95%] lg:w-[75%] xl:w-[60%] mx-auto">
                    <ContactFormDetailed />
                </div>
            </section>
        </div>
    );
};

export default Page;