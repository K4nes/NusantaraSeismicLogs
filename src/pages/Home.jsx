import { useEffect, useState } from "react";
import { useMapContext } from "../context/MapContext";
import { gempaTerbaru } from "../data/data";
import { magnitudeStyle } from "../utils/magnitudeColor";

export default function Home() {
  const [dataGempa, setDataGempa] = useState(null);

  const { setActiveMarker } = useMapContext();

  useEffect(() => {
    let isMounted = true;

    gempaTerbaru().then((res) => {
      if (isMounted && res && !(res instanceof Error)) {
        setDataGempa(res);

        if (res.Coordinates) {
          const [lat, lng] = res.Coordinates.split(",");
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

  const {
    Magnitude,
    Wilayah,
    Tanggal,
    Jam,
    DateTime,
    Coordinates,
    Kedalaman,
    Potensi,
    Dirasakan,
    Shakemap,
  } = dataGempa;

  const [lat, lng] = Coordinates ? Coordinates.split(",") : ["-", "-"];
  const magStyle = magnitudeStyle(Magnitude);

  return (
    <article className="flex flex-col gap-3 font-jetbrains w-full">
      <h1 className="sr-only">Informasi Gempa Bumi Terbaru</h1>

      <div>
        <div className="border px-2 py-2.5">
          <span className="text-xs uppercase tracking-wider block">
            MAGNITUDE
          </span>
          <span className={`text-5xl font-bold block ${magStyle.text}`}>
            {Magnitude}
          </span>
        </div>
        <div className="font-geist border border-t-0 px-2 py-2.5 flex flex-col gap-1">
          <p className="font-medium text-sm text-white leading-snug">
            {Wilayah}
          </p>
          <time dateTime={DateTime} className="text-xs">
            {Tanggal} — {Jam}
          </time>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col border px-2 py-2.5">
          <dt className="text-xs uppercase tracking-wider">LATITUDE</dt>
          <dd className="text-white font-semibold text-sm mt-1">{lat}</dd>
        </div>
        <div className="flex flex-col border px-2 py-2.5">
          <dt className="text-xs uppercase tracking-wider">LONGITUDE</dt>
          <dd className="text-white font-semibold text-sm mt-1">{lng}</dd>
        </div>

        <div className="col-span-2 border px-2 py-2.5 flex justify-between items-center text-sm">
          <dt className="text-xs uppercase tracking-wider">KEDALAMAN</dt>
          <dd className="text-white font-semibold">{Kedalaman}</dd>
        </div>

        <div className="col-span-2 flex flex-col border px-2 py-2.5 gap-1">
          <dt className="text-xs uppercase tracking-wider">POTENSI</dt>
          <dd className="font-geist text-white text-sm leading-snug">
            {Potensi}
          </dd>
        </div>

        {Dirasakan && (
          <div className="col-span-2 flex flex-col border px-2 py-2.5 gap-1">
            <dt className="text-xs uppercase tracking-wider">
              DIRASAKAN
            </dt>
            <dd className="font-geist text-white text-sm leading-snug">
              {Dirasakan}
            </dd>
          </div>
        )}
      </dl>

      {Shakemap && (
        <figure className="w-full mt-1">
          <img
            src={`https://static.bmkg.go.id/${Shakemap}`}
            alt={`Peta guncangan (shakemap) gempa bumi di ${Wilayah}`}
            loading="lazy"
            className="w-full h-auto border border-secondary"
          />
          <figcaption className="sr-only">
            Peta Guncangan Gempa Bumi BMKG
          </figcaption>
        </figure>
      )}
    </article>
  );
}
