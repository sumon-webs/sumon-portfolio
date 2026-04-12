import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact with Sumon",
  description: "This is sumon's portfolio",
};

const ContactPage = () => {
    return (
        <div className=" bg-base-100">
            <div className=" container mx-auto ">
            <Contact/>
        </div>
        </div>
    );
};
export default ContactPage;