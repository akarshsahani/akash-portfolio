import Image from "next/image"

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 w-[250px] xl:w-[320px] rotate-12 mix-blend-color-dodge duration-75 animate-pulse">
      <Image 
      src={'/bulb.png'}
      width={320}
      height={240}
      className="w-full h-full"
      alt=""
      />
    </div>
  );
};

export default Bulb;