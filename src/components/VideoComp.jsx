import { Box } from "@mui/material";

const VideoComp = () => {
  return (
    <Box sx={{ background: "gray", width: "100vw", height: "100vh", overflow:"hidden" }}>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover"}}
      >
        <source
          src="/src/assets/videos/3171546-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoComp;
