export default function Video({
  video,
  videoWidth,
  videoHeight,
}: {
  video: string;
  videoWidth: number;
  videoHeight: number;
}) {
  return (
    <div className="flex flex-col justify-center">
      <video width={videoWidth} height={videoHeight} loop controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
