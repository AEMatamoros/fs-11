import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHeroDetail } from "../redux/operators/heroOperator";
import { useDispatch, useSelector } from "react-redux";

export default function CharacterDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const hero = useSelector((state) => state.hero.heroDetailData);
  const loading = useSelector((state) => state.hero.loading);
  const error = useSelector((state) => state.hero.error);

  useEffect(() => {
    dispatch(fetchHeroDetail(id));
  }, [id]);

  return (
    <>
      {loading ? (
        <h1 className="text-white w-full text-center text-6xl">Cargando</h1>
      ) : (
        <div className="flex justify-around">
          {error ? (
            <h1 className="text-white w-full text-center text-6xl">
              Error al cargar el detalle
            </h1>
          ) : (
            <>
              {hero.id && (
                <>
                  <div className="px-24 w-4/12">
                    <img
                      src={`${hero.thumbnail.path}/portrait_uncanny.jpg`}
                      className="w-full"
                    />
                  </div>

                  <div className="text-white flex flex-col justify-start text-left w-7/12 px-24">
                    <h2 className="font-semibold text-4xl text-red-700 py-4">
                      {hero.name}
                    </h2>
                    <ul className="list-none flex flex-col gap-y-4">
                      {hero.comics.items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
