import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { videos } from "../VideoData";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaSadTear } from "react-icons/fa";
import Countdown from "../components/Countdown";

const VideosPlayPage = () => {
  const params = useParams();
  const productId = parseInt(params.videoId);

  const selectedVid = videos.find((vid) => vid.id === productId);

  return (
    <>
      {selectedVid ? (
        <div className="flex flex-col items-center z-[99]">
          <Link to="/content">
            <div className="fixed inset-0 z-[999] bg-[#000000d3] h-[100vh] w-full  flex items-center justify-center" />
          </Link>
          <div className="container mx-auto my-4 absolute top-[10%] z-[999]">
            <Link to="/content">
              <BiArrowBack className="bg-[grey] text-4xl my-2 rounded-full p-2 bg-[grey]" />
            </Link>
            <div className="h-[500px] bg-[black] rounded-lg ">
              <ReactPlayer
                url={selectedVid.video}
                playing
                controls
                loop
                width="100%"
                height="100%"
                className="outline-0"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="py-12 flex flex-col items-center justify-center">
            <FaSadTear className="text-4xl" />
            <h1 className="text-2xl">Page not Found</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default VideosPlayPage;