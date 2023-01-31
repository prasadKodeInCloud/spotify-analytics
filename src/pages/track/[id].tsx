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
    <div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className=" grow  border border-solid border-gray-200 h-52 w-44">
          01
        </div>
        <div className=" border border-solid border-gray-200 h-52 w-52 grow">
          02
        </div>
        <div className="border border-solid border-gray-200 h-52 basis-1/2 grow">
          03
        </div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="basis-1/2 grow   h-1/4 border border-solid border-gray-200 ">
          <PictorialBarChart trackFeatures={trackFeatures} />
        </div>
        <div className=" h-1/4 grow  border border-solid border-gray-200">
          <div className="flex place-items-center justify-center">
            <RadarChart trackFeatures={trackFeatures} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="grow border border-solid border-gray-200 h-52 w-42">
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
