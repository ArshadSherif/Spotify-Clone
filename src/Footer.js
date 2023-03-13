import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircledIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPrevious from "@mui/icons-material/SkipPreviousOutlined";
import SkipNext from "@mui/icons-material/SkipNextOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlayListPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";
import { useDataLayer } from "./DataLayer";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayer();
  useEffect(() => {
    console.log("THis is the use effect ");
    spotify.getMyCurrentPlaybackState().then((res) => {
      console.log("Playing", res.is_playing);
      dispatch({
        type: `SET_PLAYING`,
        playing: res.is_playing,
      });

      dispatch({
        type: `SET_ITEM`,
        item: res.item,
      });
    });
  }, [spotify]);

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: `SET_ITEM`,
        item: r.item,
      });

      dispatch({
        type: `SET_PLAYING`,
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: `SET_ITEM`,
        item: r.item,
      });

      dispatch({
        type: `SET_PLAYING`,
        playing: true,
      });
    });
  };

  const handlePlayPause = () => {
    console.log("This is the pLaying", playing);
    if (playing) {
      spotify.pause();
      dispatch({
        type: `SET_PLAYING`,
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: `SET_PLAYING`,
        playing: true,
      });
    }
  };

  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src={item?.album.images[0].url}
          alt={item?.name}
          className="footer_albumLogo"
        />
        {item ? (
          <div className="footer_songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No song is playing</h4>
            <p>....</p>
          </div>
        )}
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPrevious onClick={skipNext} className="footer_icon" />

        {playing ? (
          <PlayCircledIcon
            onClick={() => handlePlayPause()}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircledIcon
            onClick={() => handlePlayPause()}
            fontSize="large"
            className="footer_icon"
          />
        )}
        <SkipNext className="footer_icon" onClick={skipPrevious} />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <p>
          <Grid container spacing={2}>
            <Grid item>
              <PlayListPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </p>
      </div>
    </div>
  );
}

export default Footer;
