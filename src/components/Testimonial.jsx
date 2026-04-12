import TestimonialImage from '@/assets/image/testimonial.png'
import Image from 'next/image';

const Testimonial = () => {
    return (
        <section className="py-16 px-4">
            <div className=' container mx-auto  border-b border-gray-700 pb-18'>
                <h1 className="text-3xl md:text-6xl font-bold text-white text-center mb-12  ">
                    Testimonials
                </h1>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-md 
                rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300">

                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={TestimonialImage}
                                alt="testimonial"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-white font-semibold text-lg">
                                    Sumon Ali
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Web Developer
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            “Very professional and talented developer. The project was completed on time with excellent quality. Highly recommended!”
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-md 
                rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300">

                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={TestimonialImage}
                                alt="testimonial"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-white font-semibold text-lg">
                                    Client Name
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            “Amazing experience! Clean UI design and smooth performance. Will definitely work again.”
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;