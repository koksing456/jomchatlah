import VideoThumb from "@/public/images/dynamic-message/1.png";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 pb-4">Dynamic Message</h1>
            {/* Hero image */}
            <Image src={VideoThumb} alt="Hero image" width={768} height={432} />
          </div>
        </div>

        {/* Step-by-step section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-2xl font-bold text-center mb-8">How to Use</h2>

          {/* Steps List */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">1.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Download Excel Template</h3>
                <p>Obtain the sample Excel file to start.</p>
                <p className="mt-2">
                  <Image
                    alt="Download Excel Template"
                    src="/images/dynamic-message/1.png"
                    width={700}
                    height={300}
                  />
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">2.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Prepare Your Excel</h3>
                <p>
                  Enter mobile numbers with country codes and names in the
                  sheet. Add additional columns for specific message
                  requirements as needed.
                </p>
                <p className="mt-2">
                  <Image
                    alt="Prepare Your Excel"
                    src="/images/dynamic-message/2.png"
                    width={700}
                    height={300}
                  />
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">3.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Upload Excel</h3>
                <p>
                  Click 'UPLOAD EXCEL', and select your prepared Excel file. The
                  extra columns and their values will be incorporated from the
                  sheet.
                </p>
                <p className="mt-2">
                  <Image
                    alt="Upload Saved Excel File"
                    src="/images/dynamic-message/3.png"
                    width={700}
                    height={300}
                  />
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">4.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Set Message Parameters</h3>
                <p>
                  In the message field, use column headers enclosed in double
                  curly braces (e.g., {"{{ Name }}"}) to personalize messages.
                  Remember to match the exact column names and case without
                  adding spaces.
                </p>
                <p className="mt-2">
                  <Image
                    alt="Type Your Message"
                    src="/images/dynamic-message/4.png"
                    width={700}
                    height={300}
                  />
                </p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">5.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Launch Campaign</h3>
                <p>
                  Execute the campaign as usual, and personalized messages will
                  be sent out based on the Excel data.
                </p>
                <p className="mt-2">
                  <Image
                    alt="Name Your Campaign"
                    src="/images/dynamic-message/5.png"
                    width={700}
                    height={300}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
