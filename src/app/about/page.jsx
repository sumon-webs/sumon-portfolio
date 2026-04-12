import About from "@/components/About";


export const metadata = {
  title: "About Sumon's",
  description: "This is sumon's portfolio",
};

const AboutPage = () => {
    return (
        <div className=" ">
            <div className=" container mx-auto ">
                <About/>
            </div>
        </div>
    );
};
export default AboutPage;