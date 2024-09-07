'use client'; 

import Image from 'next/image';

const DisCover: React.FC = () => {
  return (
    <div className="relative sm:w-[90%] mx-auto max-w-[1280px] top-[100px] sm:top-[250px]">
      <section className="px-[2em] mb-[4em]">
        <p className="text-xl text-center sm:text-left font-playfair">
          Welcome to the <span className="text-[#25580F] font-bold">CCS Manuscript Repository</span>, as part of our commitment to enhancing your experience, we're pleased to introduce a suggested guide for converting your PDF files into scanned documents using an external tool, we recommend following the steps outlined below:
        </p>
      </section>

      <section className="px-[2em] mb-[4em] max-w-[1080px] mx-auto">
        <div className="flex items-center justify-between flex-col md:flex-row mb-[5em]">
          <div className="mb-5 sm:mb-0">
            <div className="flex items-center mb-[2em]">
              <div className="absolute border border-4 border-black bg-white rounded-full w-12 h-12 flex justify-center items-center">
                <h1 className="text-center text-black text-2xl">1</h1>
              </div>
              <div className="mx-5 bg-black text-white px-10 rounded-full">
                <p>Access the External Scanning Tool</p>
              </div>
            </div>
            <div className="max-w-[500px] p-4">
              <p>
                To begin the conversion process, open your web browser and visit the provided external
                link: https://pdfcandle.com/scan_pdf.aspx. This tool enables you to easily convert
                your PDF documents into scanned files.
              </p>
            </div>
          </div>
          <div className="flex justify-center border border-black p-2 rounded-md w-full max-w-[400px]">
            <Image
              src="/images/feature-pic-1.png" // Use absolute path for images
              alt="Feature Pic 1"
              width={400} // Set explicit width and height for better performance
              height={300}
            />
          </div>
        </div>

        {/* ... other sections (similar structure) ... */}

      </section>

      <section className="px-[2em] pb-[5em] max-w-[1280px] mx-auto font-playfair">
        <div className="text-center text-xl">
          <p className="mb-3">
            While the conversion of PDF files into scanned documents is not directly integrated into
            our system, we believe this guide can be valuable for users seeking such functionality.
            Should you have any questions or require assistance regarding this process or any other
            feature within our repository, please do not hesitate to reach out to our support team.
          </p>
          <p className="mb-3">
            We trust that this guide will prove useful in your document management endeavors, and we
            remain committed to providing you with the best tools and resources to support your
            scholarly pursuits. Happy converting!
          </p>
        </div>
      </section>
    </div>
  );
};

export default DisCover;