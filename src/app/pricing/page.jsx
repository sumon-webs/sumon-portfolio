import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Sumon's pricing",
  description: "This is sumon's portfolio",
};

const Pricing = () => {
    return (
        <section className=" bg-base-200 flex items-center px-4 py-20">
            <div className="max-w-6xl mx-auto w-full">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Pricing Plans</h2>
                    <p className="text-base-content/70 mt-3">
                        Choose a plan that fits your needs
                    </p>
                </div>

                {/* PRICING GRID */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* BASIC */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-bold">Basic</h3>
                            <p className="text-4xl font-extrabold my-4">$19</p>

                            <ul className="space-y-2 text-left text-base-content/80">
                                <li className="flex items-center gap-2"><FaCheck /> 1 Page Website</li>
                                <li className="flex items-center gap-2"><FaCheck /> Responsive Design</li>
                                <li className="flex items-center gap-2"><FaCheck /> Basic Support</li>
                            </ul>

                            <div className="card-actions justify-center mt-6">
                                <button className="btn btn-outline btn-primary w-full">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* STANDARD (POPULAR) */}
                    <div className="card bg-primary text-primary-content shadow-2xl scale-105">
                        <div className="card-body text-center">
                            <div className="badge badge-secondary mb-2">Most Popular</div>

                            <h3 className="text-2xl font-bold">Standard</h3>
                            <p className="text-4xl font-extrabold my-4">$49</p>

                            <ul className="space-y-2 text-left">
                                <li className="flex items-center gap-2"><FaCheck /> 5 Pages Website</li>
                                <li className="flex items-center gap-2"><FaCheck /> Responsive Design</li>
                                <li className="flex items-center gap-2"><FaCheck /> API Integration</li>
                                <li className="flex items-center gap-2"><FaCheck /> Priority Support</li>
                            </ul>

                            <div className="card-actions justify-center mt-6">
                                <button className="btn btn-secondary w-full">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PREMIUM */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
                        <div className="card-body text-center">
                            <h3 className="text-2xl font-bold">Premium</h3>
                            <p className="text-4xl font-extrabold my-4">$99</p>

                            <ul className="space-y-2 text-left text-base-content/80">
                                <li className="flex items-center gap-2"><FaCheck /> Full Website</li>
                                <li className="flex items-center gap-2"><FaCheck /> Admin Dashboard</li>
                                <li className="flex items-center gap-2"><FaCheck /> Authentication System</li>
                                <li className="flex items-center gap-2"><FaCheck /> 24/7 Support</li>
                            </ul>

                            <div className="card-actions justify-center mt-6">
                                <button className="btn btn-outline btn-primary w-full">
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;