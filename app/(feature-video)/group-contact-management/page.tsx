import Video from "@/components/video";
import VideoThumb from "@/public/images/smart-bulk-messaging/1.png";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 pb-4">Group Contact Management</h1>
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
                <h3 className="font-bold mb-2">How to Add Group Members</h3>
                <Video
                  video="/videos/group-contact-management/1.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">2.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">How to Use Group Finder</h3>
                <Video
                  video="/videos/group-contact-management/2.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-lime-500 font-bold text-xl">3.</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">How to Use Group Generator</h3>
                <Video
                  video="/videos/group-contact-management/3.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
