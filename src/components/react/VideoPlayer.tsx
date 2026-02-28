import { useEffect, useRef } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

interface VideoPlayerProps {
  src: string
  poster?: string
  controls?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  width?: string
  height?: string
}

const VideoPlayer = ({
  src,
  poster,
  controls = true,
  autoplay = false,
  muted = false,
  loop = false,
  width = "100%",
  height = "auto",
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<videojs.Player | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls,
        autoplay,
        muted,
        loop,
        poster,
      })

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose()
        }
      }
    }
  }, [controls, autoplay, muted, loop, poster])

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
        width={width}
        height={height}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
