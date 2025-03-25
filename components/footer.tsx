import { SiX, SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                            <span className="text-xl font-bold">HapaxRedux</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Delivering innovative technology solutions since 2024.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-black hover:bg-white hover:text-gray-900 transition">
                                    <SiX className="w-4 h-4" />
                                </div>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-black hover:bg-white hover:text-gray-900 transition">
                                    <SiFacebook className="w-4 h-4" />
                                </div>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-black hover:bg-white hover:text-gray-900 transition">
                                    <SiInstagram className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="/services" className="text-gray-400 hover:text-white">Web Design</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white">Web Hosting</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white">Email Services</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white">Mobile Development</a></li>
                        </ul>
                    </div>

                    {
                        /**
                         * 
                                        <div>
                                            <h3 className="text-lg font-semibold mb-6">Company</h3>
                                            <ul className="space-y-3">
                                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                                <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                                            </ul>
                                        </div>
                    
                         */
                    }
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} HapaxRedux. All rights reserved.
                    </p>
                    {/**
                     * 
                    <p className="text-gray-400 mt-2 md:mt-0">
                        Designed and developed with ❤️
                    </p>
                     */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;