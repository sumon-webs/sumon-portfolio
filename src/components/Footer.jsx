import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content border-t border-gray-800 pt-12">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">SUMON</h2>
                    <p className="text-sm text-base-content/70">
                        Building modern, responsive and user-friendly web applications.
                    </p>

                    {/* SOCIAL */}
                    <div className="flex gap-4 mt-4 text-xl">
                        <FaGithub className="hover:text-primary cursor-pointer transition" />
                        <FaLinkedin className="hover:text-primary cursor-pointer transition" />
                        <FaTwitter className="hover:text-primary cursor-pointer transition" />
                    </div>
                </div>

                {/* SERVICES */}
                <div>
                    <h6 className="font-semibold mb-3">Services</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-primary cursor-pointer">Web Design</li>
                        <li className="hover:text-primary cursor-pointer">Frontend Development</li>
                        <li className="hover:text-primary cursor-pointer">Responsive Design</li>
                        <li className="hover:text-primary cursor-pointer">API Integration</li>
                    </ul>
                </div>

                {/* COMPANY */}
                <div>
                    <h6 className="font-semibold mb-3">Company</h6>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-primary cursor-pointer">About Me</li>
                        <li className="hover:text-primary cursor-pointer">Projects</li>
                        <li className="hover:text-primary cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h6 className="font-semibold mb-3">Contact</h6>
                    <ul className="space-y-2 text-sm text-base-content/70">
                        <li>Email: example@email.com</li>
                        <li>Phone: +880 1XXX-XXXXXX</li>
                        <li>Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t border-gray-800 text-center py-4 text-sm text-base-content/60">
                © {new Date().getFullYear()} Sumon. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;