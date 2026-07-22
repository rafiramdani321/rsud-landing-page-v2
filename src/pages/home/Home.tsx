import Dokter from "./sections/Dokter";
import Artikel from "./sections/Artikel";
import LayananPenunjang from "./sections/LayananPenunjang";
import LayananSpesialis from "./sections/LayananSpesialis";
import { Polyclinics } from "./sections/Polyclinics";

const Home = () => {
  return (
    <>
      <Polyclinics />
      {/* <div className="py-7">
        <LayananPenunjang />
        <div className="bg-primary/10">
          <LayananSpesialis />
        </div>
        <Dokter />
        <div className="bg-primary/10">
          <Artikel />
        </div>
      </div> */}
    </>
  );
};

export default Home;
