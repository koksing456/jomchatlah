import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/smart-bulk-messaging/1.png";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className=" text-4xl font-bold text-center mb-8">
              Smart Bulk Messaging
            </h1>
            {/* Hero image */}
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Modal video thumbnail"
              video="/videos/smart-bulk/messaging/BulkWhatsAappSender-SingleSenderDemo.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
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
                  <p>
                    Download the provided Excel template to get started with
                    formatting your contact list correctly.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Download Excel Template"
                      src="/images/smart-bulk-messaging/1.png"
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
                    Prepare your Excel file with targeted mobile numbers
                    (without '+' sign and with country code) and save it.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Prepare Your Excel"
                      src="/images/smart-bulk-messaging/2.png"
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
                  <h3 className="font-bold mb-2">Upload Saved Excel File</h3>
                  <p>
                    Upload the saved Excel file with the targeted mobile
                    numbers.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Upload Saved Excel File"
                      src="/images/smart-bulk-messaging/3.png"
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
                  <h3 className="font-bold mb-2">Type Your Message</h3>
                  <p>
                    Type your message in the provided space then click on 'START
                    CAMPAIGN'.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Type Your Message"
                      src="/images/smart-bulk-messaging/4.png"
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
                  <h3 className="font-bold mb-2">Name Your Campaign</h3>
                  <p>Enter any name for your campaign and click 'OK'.</p>
                  <p className="mt-2">
                    <Image
                      alt="Name Your Campaign"
                      src="/images/smart-bulk-messaging/5.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
              {/* Step 6 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-lime-500 font-bold text-xl">6.</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Initiate the Process</h3>
                  <p>Click on the 'Click to initiate' button.</p>
                  <p className="mt-2">
                    <Image
                      alt="Initiate the Process"
                      src="/images/smart-bulk-messaging/6.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
              {/* Step 7 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-lime-500 font-bold text-xl">7.</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Scan QR Code</h3>
                  <p>
                    Web WhatsApp will open in the Chrome browser, scan the QR
                    code from your mobile phone and wait.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Scan QR Code"
                      src="/images/smart-bulk-messaging/7.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
              {/* Step 8 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-lime-500 font-bold text-xl">8.</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Start the Campaign</h3>
                  <p>
                    Once the status becomes 'Initialized', click on the 'Start'
                    button.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Start the Campaign"
                      src="/images/smart-bulk-messaging/8.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
              {/* Step 9 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-lime-500 font-bold text-xl">9.</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Monitor the Campaign</h3>
                  <p>
                    Now the status of your campaign becomes 'Running', and
                    WaSender will send your message to targeted mobile numbers
                    one by one automatically.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Monitor the Campaign"
                      src="/images/smart-bulk-messaging/9.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
              {/* Step 10 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-lime-500 font-bold text-xl">10.</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Track Progress</h3>
                  <p>
                    You can track the log and progress of the messages being
                    sent in real-time.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Track Progress"
                      src="/images/smart-bulk-messaging/10.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
              {/* Step 11 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-lime-500 font-bold text-xl">11.</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold mb-2">Get Status Report</h3>
                  <p>
                    After finishing the task, you will receive a status report
                    of your campaign.
                  </p>
                  <p className="mt-2">
                    <Image
                      alt="Get Status Report"
                      src="/images/smart-bulk-messaging/11.png"
                      width={700}
                      height={300}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
