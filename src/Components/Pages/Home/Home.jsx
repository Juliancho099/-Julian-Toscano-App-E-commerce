import ProductosDestacados from "./Destacados/ProductosDestacados";
import Video from "./Video/Video"

export default function Home() {
  const urlVideo = 'https://firebasestorage.googleapis.com/v0/b/yanbal-con-stefany.appspot.com/o/Video%2FHomeVideo.mp4?alt=media&token=21589bfb-ed78-429e-a684-b5d0e3fdd20c'
  return (
		<main className="home">
			<Video video={urlVideo} />
			<ProductosDestacados />
		</main>
  );
}
