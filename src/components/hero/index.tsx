import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imageUrl: StaticImageData;
  title: string;
  altText?: string;
}
const Hero = (props: HeroProps) => {
  const { imageUrl, title, altText = "" } = props;
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0">
        <Image src={imageUrl} fill alt={altText} style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/500 to-transparent"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl font-bold z-10">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
