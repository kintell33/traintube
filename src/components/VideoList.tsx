import SimpleImageSlider from "react-simple-image-slider";

export default function VideoList({ videoIds, onClickVideo, selected }: { videoIds: string[], onClickVideo: (videoId: string) => void, selected: string }) {

    const images = videoIds.map((e: string) => { return { image: `https://img.youtube.com/vi/${e}/0.jpg`, videoId: e } });

    return <div style={{ height: '350px', width: '900px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {images.map((e, i): any => {
            return (
                <>
                    <div onClick={() => { onClickVideo(e.videoId) }} style={e.videoId === selected ? { border: '1px solid red', height: '100px' } : { height: '100px' }}>
                        <img src={e.image} height='100px' width='100px' alt={'videoImage' + i}></img>
                    </div>
                </>
            )
        })}
    </div>

}