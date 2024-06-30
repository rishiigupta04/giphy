import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gif-context";
import Gif from "../components/Gif";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import FollowOn from "../components/FollowOn";
import { HiOutlineExternalLink } from "react-icons/hi";

const contentType = ["gifs", "stickers", "text"];
const GifPage = () => {
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { type, slug } = useParams();

  const { gifFetcher } = GifState();

  const fetchGif = async () => {
    const gifId = slug.split("-");
    const { data } = await gifFetcher.gif(gifId[gifId.length - 1]);
    const { data: related } = await gifFetcher.related(
      gifId[gifId.length - 1],
      {
        type: "gifs",
        limit: 10,
      }
    );
    setGif(data);
    setRelatedGifs(related);
  };

  useEffect(() => {
    // if (!contentType.includes(type)) {
    //   throw new Error("Invalid Content Type");
    // }

    fetchGif();
  }, []);

  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block ">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14 rounded-full"
              />

              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
            </div>

            {gif?.user?.description && (
              <p className="py-4 whitespace-pre-line faded-text">
                {readMore
                  ? gif?.user?.description
                  : gif?.user?.description.slice(0, 100) + ".."}
                {gif?.user?.description.length > 100 && (
                  <div
                    className="flex items-center faded-text cursor-pointer"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? (
                      <>
                        Read less <HiMiniChevronUp size={20} />
                      </>
                    ) : (
                      <>
                        Read more <HiMiniChevronDown size={20} />
                      </>
                    )}
                  </div>
                )}
              </p>
            )}
          </>
        )}

        <FollowOn />

        <div className="divider" />
        {gif?.source && (
          <div>
            <span className="font-extrabold text-gray-400">Source</span>
            <div className="flex gap-2 items-center text-sm font-bold">
              <HiOutlineExternalLink size={25} />
              <a
                href={gif?.source}
                target="_blank"
                className="faded-text truncate"
              >
                {gif?.source}
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="text-sm sm:text-xl truncate mb-2 faded-text">
              {gif.title}
            </div>
            <Gif gif={gif} hover={false} />

            {/* mobile UI */}
          </div>
          favorites/share/embed
        </div>

        <div>
          <span className="font-extrabold">Related GIFs</span>
        </div>
      </div>
    </div>
  );
};

export default GifPage;
