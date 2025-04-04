import { ContactFormDetailed } from "@/components/contact";
import NavigationBar from "@/components/navigation-bar";

const Page = () => {
    return (
        <>
            <NavigationBar />

            <section className="py-16 bg-gray-50 grid grid-cols-1 ">
                <div className="text-center mb-12">
                    <h2 className="h2 mb-4">
                        Trabajemos juntos
                    </h2>
                    <p className="p">
                        Completa este formulario para que entendamos tu negocio y agendemos una videollamada.
                    </p>
                </div>

                <div className="w-[95%] lg:w-[75%] xl:w-[60%] mx-auto">
                    <ContactFormDetailed />
                </div>
            </section>
        </>
    );
};

export default Page;