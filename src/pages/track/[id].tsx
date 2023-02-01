import PictorialBarChart from "@/components/charts/pictorialBarChart";
import RadarChart from "@/components/charts/radarChart";
import AudioSectionsChart from "@/components/charts/audioSectionsChart";

import { spotifyClient } from "@/lib/spotify-client";
import BatteryGauge from "react-battery-gauge";
import GuageChart from "@/components/charts/guageChart";
import BpmChart from "@/components/charts/bpmChart";
import BeatChart from "@/components/charts/beatChart";

const batteryOptions = {
  batteryBody: {
    strokeWidth: 2,
    cornerRadius: 6,
    fill: "none",
    strokeColor: "#77eae0",
  },
  batteryCap: {
    fill: "none",
    strokeWidth: 2,
    strokeColor: "#77eae0",
    cornerRadius: 2,
    capToBodyRatio: 0.4,
  },
  batteryMeter: {
    fill: "#77eae0",
    lowBatteryValue: 15,
    lowBatteryFill: "#eb1e32",
    outerGap: 1,
    noOfCells: 1,
    interCellsGap: 1,
  },
  readingText: {
    lightContrastColor: "#352d2d",
    darkContrastColor: "white",
    lowBatteryColor: "red",
    fontFamily: "arial",
    fontSize: 18,
    showPercentage: true,
  },
  chargingFlash: {
    scale: undefined,
    fill: "orange",
    animated: true,
    animationDuration: 200,
  },
};

const Track: React.FC<{
  track: SpotifyApi.SingleTrackResponse;
  trackFeatures: SpotifyApi.AudioFeaturesResponse;
  trackAnalytics: SpotifyApi.AudioAnalysisResponse;
}> = ({ track, trackFeatures, trackAnalytics }) => {
  console.log("###track info: ", track);
  console.log("###trackFeatures info: ", trackFeatures);
  console.log("###trackAnalytics info: ", trackAnalytics);

  const loudnessGourge = {
    name: "Loudness",
    min: -60,
    max: 0,
    value: trackAnalytics.track.loudness,
  };

  return (
    <div className="p-3">
      <div className="flex flex-wrap md:flex-1 gap-1 ">
        <div className=" grow border border-solid border-gray-200 h-52  shadow-md hover:shadow-lg p-4">
          <div className="flex gap-6">
            <div style={{ width: "180px" }}>
              <img
                src={track.album.images[1].url}
                style={{
                  height: "180px",
                }}
                alt=""
                className="absolute object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <div>
                <div className="flex flex-col space-y-2">
                  <span className="text-lg font-semibold">{track.name}</span>
                  <span className="text-gray-400">
                    {track.album.release_date}
                  </span>
                </div>
              </div>
              <div className="flex pt-1">
                <div className="track-info">Popularity </div>
                <div className="inline-block px-2 text-sm text-white bg-green-200 rounded">
                  {track.popularity}%
                </div>
              </div>
              <div className="flex pt-1">
                <div className="track-info">Duration </div>
                <div className="inline-block px-2 text-sm text-white bg-orange-200 rounded">
                  {Math.round((track.duration_ms * 100) / (60 * 1000)) / 100}{" "}
                  mins
                </div>
              </div>
              <div className="flex pt-1">
                <div className="track-info">Energy </div>
                <BatteryGauge
                  value={trackFeatures.energy * 100}
                  size={60}
                  customization={batteryOptions}
                />
              </div>
              <div className="flex pt-1">
                <div className="track-info">Tempo </div>
                <div className="inline-block px-2 text-sm text-white bg-purple-400 rounded">
                  {Math.round(trackAnalytics.track.tempo * 100) / 100} BPM
                </div>
              </div>
              <div className="p-1">
                <BpmChart tempo={trackAnalytics.track.tempo} />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-gray-200 h-52 basis-1/3 grow shadow-md hover:shadow-lg p-4">
          <BeatChart trackAnalytics={trackAnalytics} />
        </div>
        <div className="border border-solid border-gray-200 h-52 w-60 grow shadow-md hover:shadow-lg">
          <GuageChart params={loudnessGourge} />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="basis-1/2 grow  h-1/4 border border-solid border-gray-200 shadow-md hover:shadow-lg p-4">
          <PictorialBarChart trackFeatures={trackFeatures} />
        </div>
        <div className=" h-1/4 grow  border border-solid border-gray-200  shadow-md hover:shadow-lg p-4">
          <div className="flex place-items-center justify-center">
            <RadarChart trackFeatures={trackFeatures} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-1 gap-1 pt-1">
        <div className="grow border border-solid border-gray-200 h-1/3 w-42 shadow-md hover:shadow-lg p-4">
          <AudioSectionsChart sections={trackAnalytics.sections} />
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
