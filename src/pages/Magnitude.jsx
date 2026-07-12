import { useEffect, useState } from "react";
import { useMapContext } from "../context/MapContext";
import { gempaTerkini } from "../data/data";
import { magnitudeStyle } from "../utils/magnitudeColor";

export default function Magnitude() {
  const [dataGempa, setDataGempa] = useState(null);
  const { activeMarker, setActiveMarker } = useMapContext();

  useEffect(() => {
    let isMounted = true;

    gempaTerkini().then((res) => {
      if (isMounted && res && !(res instanceof Error)) {
        setDataGempa(res);

        if (res.length > 0 && res[0].Coordinates) {
          const [lat, lng] = res[0].Coordinates.split(",");
          setActiveMarker({
            index: 0,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
          });
        }
      }
    });

    return () => {
      isMounted = false;
      setActiveMarker(null);
    };
  }, [setActiveMarker]);

  if (!dataGempa) {
    return <div className="font-geist text-xs">Memuat data...</div>;
  }

  return (
    <section className="flex flex-col gap-3 font-jetbrains">
      <h1 className="sr-only">Daftar Gempa Terkini Berdasarkan Magnitudo</h1>

      {dataGempa.map((item, index) => {
        const {
          Tanggal,
          Jam,
          DateTime,
          Coordinates,
          Magnitude,
          Kedalaman,
          Wilayah,
          Potensi,
        } = item;

        const isSelected = activeMarker && activeMarker.index === index;
        const [lat, lng] = Coordinates ? Coordinates.split(",") : ["-", "-"];
        const magStyle = magnitudeStyle(Magnitude);

        return (
          <article
            key={index}
            className={`flex flex-col border gap-2 px-2 py-2.5 transition-colors duration-200 ${
              isSelected
                ? "border-amber-500 bg-amber-950/20"
                : "border-secondary hover:bg-neutral-800"
            }`}
          >
            <div className="flex">
              <div className="flex flex-col justify-center border border-secondary px-2.5 py-1.5 min-w-16.25 items-center">
                <span
                  className={`${magStyle.text} text-2xl font-bold leading-none`}
                >
                  {Magnitude}
                </span>
                <span className="text-[10px] font-semibold mt-1">MAG</span>
              </div>

              <div className="flex flex-col justify-between px-2.5">
                <p className="font-medium text-sm leading-snug">{Wilayah}</p>
                <time
                  dateTime={DateTime}
                  className="w-fit border border-secondary px-1 text-xs "
                >
                  {Tanggal}, {Jam}
                </time>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveMarker({
                  index: index,
                  lat: parseFloat(lat),
                  lng: parseFloat(lng),
                });
              }}
              className={`text-xs px-2.5 py-1 border transition-colors ${
                isSelected
                  ? "bg-amber-500 text-black border-amber-500 font-bold"
                  : "border-secondary text-white hover:bg-white hover:text-black"
              }`}
            >
              {isSelected ? "Terpilih" : "Lihat Peta"}
            </button>

            {/* Bagian Bawah: Grid detail menggunakan Description List */}
            <dl className="grid grid-cols-[max-content_max-content] gap-x-6 gap-y-2 text-xs">
              <div className="flex flex-col gap-1">
                <dt className=" text-[10px] uppercase tracking-wider">
                  LATITUDE
                </dt>
                <dd className="font-semibold">{lat}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className=" text-[10px] uppercase tracking-wider">
                  KEDALAMAN
                </dt>
                <dd className="font-semibold">{Kedalaman}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className=" text-[10px] uppercase tracking-wider">
                  LONGITUDE
                </dt>
                <dd className="font-semibold">{lng}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className=" text-[10px] uppercase tracking-wider">
                  POTENSI
                </dt>
                <dd className="font-semibold normal-case leading-snug">
                  {Potensi}
                </dd>
              </div>
            </dl>
          </article>
        );
      })}
    </section>
  );
}
