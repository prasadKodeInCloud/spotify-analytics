import PictorialBarChart from "@/components/charts/pictorialBarChart";
import RadarChart from "@/components/charts/radarChart";
import { spotifyClient } from "@/lib/spotify-client";
import { useEffect } from "react";

const Track: React.FC<{
  track: SpotifyApi.SingleTrackResponse;
  trackFeatures: SpotifyApi.AudioFeaturesResponse;
  trackAnalytics: SpotifyApi.AudioAnalysisResponse;
}> = ({ track, trackFeatures, trackAnalytics }) => {
  console.log("###track info: ", track);
  console.log("###trackFeatures info: ", trackFeatures);
  console.log("###trackAnalytics info: ", trackAnalytics);

  return (
    <div className="p-3">
      <div className="flex flex-wrap md:flex-1 gap-1 ">
        <div className=" grow border border-solid border-gray-200 h-52 w-1/5 hover:shadow-lg p-4">
          <div className="flex shrink-0 items-start justify-between ">
            <div>
              <img
                src={track.album.images[1].url}
                style={{
                  height: "180px",
                  width: "178px",
                }}
                alt=""
                className="absolute object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-semibold">{track.name}</span>
                  <span className="text-gray-400">
                    {track.album.release_date}
                  </span>
                </div>
              </div>
              <div>
                <span>Popularity </span>
                <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
                  {track.popularity}%
                </span>
              </div>
              <div>
                <span>Duration </span>
                <span className="inline-block px-2 text-sm text-white bg-orange-200 rounded">
                  {Math.round((track.duration_ms * 100) / (60 * 1000)) / 100}{" "}
                  mins
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-gray-200 h-52 basis-1/2 grow">
          03
        </div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="basis-1/2 grow  h-1/4 border border-solid border-gray-200 shadow-md hover:shadow-lg">
          <PictorialBarChart trackFeatures={trackFeatures} />
        </div>
        <div className=" h-1/4 grow  border border-solid border-gray-200  shadow-md hover:shadow-lg">
          <div className="flex place-items-center justify-center">
            <RadarChart trackFeatures={trackFeatures} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="grow border border-solid border-gray-200 h-52 w-42 shadow-md hover:shadow-lg">
          06
        </div>
      </div>
    </div>
  );
};

export default Track;

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const grantResponse = await spotifyClient.clientCredentialsGrant();
  const trackId = id;

  spotifyClient.setAccessToken(grantResponse.body.access_token);
  const [track, trackFeatures, trackAnalytics] = await Promise.all([
    spotifyClient.getTrack(trackId),
    spotifyClient.getAudioFeaturesForTrack(trackId),
    spotifyClient.getAudioAnalysisForTrack(trackId),
  ]);

  return {
    props: {
      track: await track.body,
      trackFeatures: await trackFeatures.body,
      trackAnalytics: await trackAnalytics.body,
    },
  };
}
