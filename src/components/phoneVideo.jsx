import ReactPlayer from "react-player";
import phoneVideo from "./../assets/video/excursion.mp4";

const PhoneVideo = () => {
  return (
    <figure id="phone-video">
      <video src={phoneVideo} type="video/mp4" autoPlay loop></video>
      <figcaption id="video-caption">Your personal travel guide</figcaption>
    </figure>
  );
};

export default PhoneVideo;
