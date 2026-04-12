import TestimonialImage from "@/assets/image/testimonial.png";
import Image from "next/image";

const testimonials = [
    {
        name: "Sumon Ali",
        role: "Web Developer",
        text: "Very professional and talented developer. The project was completed on time with excellent quality. Highly recommended!",
    },
    {
        name: "Client Name",
        role: "UI/UX Designer",
        text: "Amazing experience! Clean UI design and smooth performance. Will definitely work again.",
    },
];

const Testimonial = () => {
    return (
        <section className=" bg-base-200 py-16 px-4 ">
            <div className="container mx-auto border-b border-gray-700 pb-16">

                {/* TITLE */}
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Testimonials
                </h1>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-base-300 rounded-2xl p-6 shadow-md
                            hover:shadow-2xl hover:-translate-y-2
                            transition duration-300"
                        >

                            {/* HEADER */}
                            <div className="flex items-center gap-4 mb-4">

                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                                    <Image
                                        src={TestimonialImage}
                                        alt="testimonial"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-base-content/70">
                                        {item.role}
                                    </p>
                                </div>

                            </div>

                            {/* TEXT */}
                            <p className="text-sm text-base-content/70 leading-relaxed">
                                “{item.text}”
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Testimonial;