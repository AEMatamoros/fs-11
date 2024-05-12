import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes } from "../redux/operators/heroOperator";
import { NavLink } from "react-router-dom";
// import { createHeroe } from "../redux/operators/heroOperator";
export default function App() {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.hero.heroes);
  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <>
      {/* <button
        className="round-lg bg-green-400 text-white"
        onClick={() => {
          dispatch(createHeroe());
        }}
      >
        llamar API
      </button> */}
      <div className="flex w-full justify-around flex-wrap gap-2">
        {heroes
          .filter((chr) => !chr.thumbnail.path.includes("image_not_available"))
          .map((chr) => (
            <NavLink
              to={`/${chr.id}`}
              key={chr.id}
              className="relative overflow-hidden text-white"
            >
              <img src={`${chr.thumbnail.path}/portrait_xlarge.jpg`} />
              <div className=" text-white absolute w-full h-full hero-img top-0 flex justify-center items-center text-center">
                {chr.name}
              </div>
            </NavLink>
          ))}
      </div>
    </>
  );
}
