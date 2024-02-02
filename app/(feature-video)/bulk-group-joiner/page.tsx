import Video from "@/components/video";

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 pb-4">Bulk Group Joiner</h1>
            {/* Hero image */}
            <Video
              video="/videos/bulk-group-joiner/1.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
