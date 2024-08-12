import ProductosDestacados from "./Destacados/ProductosDestacados";
import Video from "./Video/Video"

export default function Home() {
  const urlVideo = '/src/assets/videos/HomeVideo.mp4'
  return (
		<>
			<Video video={urlVideo} />
			<ProductosDestacados />
		</>
  );
}
