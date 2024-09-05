import ProductosDestacados from "./Destacados/ProductosDestacados";
import Video from "./Video/Video"

export default function Home() {
  const urlVideo = '/src/assets/videos/HomeVideo.mp4'
  return (
		<main className="home">
			<Video video={urlVideo} />
			<ProductosDestacados />
		</main>
  );
}
