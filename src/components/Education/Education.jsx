const Education = () => {
    return (
        <div className="w-11/12 rounded-2xl mx-auto shadow-xl md:mt-10 bg-[#F1F1F1] mt-6 md:p-12 p-6">
            <h2 className="md:text-3xl text-2xl font-bold text-center">Educational Qualification:</h2>
            <div className="flex flex-col gap-2 md:gap-3 md:mt-6 mt-2">
                <div className="bg-white rounded-lg p-4">
                    <h2 className="md:text-2xl text-base font-bold">Master of Social Science</h2>
                    <hr className="my-2 border-[1px]"></hr>
                    <p className="md:text-base text-sm"><strong>Subject:</strong> Political Science</p>
                    <p className="md:text-base text-sm"><strong>Name of Institution:</strong> Government Shaheed Suhrawardy College, Dhaka</p>
                    <p className="md:text-base text-sm"><strong>University:</strong> University of Dhaka</p>
                    <p className="md:text-base text-sm"><strong>Passing Year:</strong> 2022</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                    <h2 className="md:text-2xl text-base font-bold">Bachelor of Social Science</h2>
                    <hr className="my-2 border-[1px]"></hr>
                    <p className="md:text-base text-sm"><strong>Subject:</strong> Political Science</p>
                    <p className="md:text-base text-sm"><strong>Name of Institution:</strong> Government Shaheed Suhrawardy College, Dhaka</p>
                    <p className="md:text-base text-sm"><strong>University:</strong> University of Dhaka</p>
                    <p className="md:text-base text-sm"><strong>Passing Year:</strong> 2021</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                    <h2 className="md:text-2xl text-base font-bold">Higher Secondary Certificate (HSC) </h2>
                    <hr className="my-2 border-[1px]"></hr>
                    <p className="md:text-base text-sm"><strong>Group:</strong> Science</p>
                    <p className="md:text-base text-sm"><strong>Name of Institution:</strong> Demra Ideal College</p>
                    <p className="md:text-base text-sm"><strong>Board:</strong> Dhaka</p>
                    <p className="md:text-base text-sm"><strong>Passing Year:</strong> 2017</p>
                </div>
            </div>
        </div>
    );
};

export default Education;