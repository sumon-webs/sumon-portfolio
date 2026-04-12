import About from "@/components/About";
import Chart from '@/Ui/Chart'

export const metadata = {
  title: "About Sumon's",
  description: "This is sumon's portfolio",
};

const AboutPage = () => {
    return (
        <div className=" ">
            <div className="  ">
                <About/>
                <Chart/>
            </div>
        </div>
    );
};
export default AboutPage;