// import Container from "../container";
// import Image from "nex/image";

export default function video() {
  return (
    <div className="aspect-w-16 aspect-h-9 ">
      <iframe
        width={1000}
        height={500}
        src="https://www.youtube.com/embed/SXiXQ7zdvgc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
