import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function VideoPlayer() {
    return (
        <>
            <div className="w-80 h-100">
                <Video
                    autoPlay
                    loop
                    muted
                    controls={[
                        "PlayPause",
                        "Seek",
                        "Time",
                        "Volume",
                        "Fullscreen",
                    ]}
                    poster="http://sourceposter.jpg"
                    onCanPlayThrough={() => {
                        // Do stuff
                    }}
                >
                    <source src="http://sourcefile.webm" type="video/webm" />
                    <track
                        label="English"
                        kind="subtitles"
                        srcLang="en"
                        src="http://source.vtt"
                        default
                    />
                </Video>
            </div>
        </>
    );
}

export default VideoPlayer;
