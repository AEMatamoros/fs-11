import { useEffect } from "react";
import { fetchHeroes } from "./redux/operations/heroOperations";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.hero);
  console.log(state);
  const heroes = useSelector((state) => state.hero.heroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <div className="flex w-full justify-around flex-wrap gap-2">
      {heroes.map((chr) => (
        <div key={chr.id} className="relative overflow-hidden">
          <img src={`${chr.thumbnail.path}/portrait_xlarge.jpg`} />
          <div className=" text-white absolute w-full h-full hero-img top-0 flex justify-center items-center text-center">
            {chr.name}
          </div>
        </div>
      ))}
    </div>
  );
}
