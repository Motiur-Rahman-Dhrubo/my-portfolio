import emailjs from "@emailjs/browser";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import Swal from "sweetalert2";

const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = {
            from_name: e.target.user_name.value,
            from_email: e.target.user_email.value,
            message: e.target.message.value,
        }

        emailjs
            .send("service_tdzo6xz", "template_oyr30e3", formData, "vZePdH_y9Owdiod39")
            .then(
                () => {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Email sent successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    e.target.reset();
                },
                () => {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "Failed to send email. Please try again.",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            );
    };
    
    return (
        <div className="w-11/12 rounded-2xl mx-auto shadow-xl md:mt-10 bg-[#F1F1F1] mt-6 lg:p-12 md:p-8 p-6">
            <h2 className="md:text-3xl text-2xl font-bold text-center">Contact Me:</h2>
            <div className="flex md:mt-6 mt-2 gap-4 md:flex-row flex-col">
                <div className="md:w-1/2 w-full">
                    <form onSubmit={sendEmail} className="flex flex-col md:gap-4 gap-3">
                        <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded-lg"/>
                        <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded-lg"/>
                        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border border-gray-300 rounded-lg h-32"/>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Send Message</button>
                    </form>
                </div>
                <div className="md:w-1/2 w-full bg-white rounded-lg p-4 flex flex-col gap-2">
                    <h2 className="md:text-2xl text-base font-bold">Contact Information:</h2>
                    <p className="flex items-center gap-1 md:text-base text-sm"><FaHome />Dhaka, Bangladesh</p>
                    <p className="flex items-center gap-1 md:text-base text-sm"><MdEmail />mdmotiurrahman383@gmail.com</p>
                    <p className="flex items-center gap-1 md:text-base text-sm"><IoCall />+880 1935-220383</p>
                    <p className="flex items-center gap-1 md:text-base text-sm"><IoLogoWhatsapp />+880 1935-220383</p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;