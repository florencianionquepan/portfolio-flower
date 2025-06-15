import { useEffect, useState } from "react";
import { getPerson } from "../store/person/thunks";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FullScreenLoader } from "../assets/FullScreenLoader";
import BreakpointDisplay from "../assets/Breakpoint";

const icons = ['1.svg', '2.svg', '3.svg', '4.svg'];

export const Presentation = () => {

  const dispatch = useAppDispatch();
  const {person, loading, error }= useSelector ( (state: RootState) => state.person);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]); 

  useEffect(() => {
    dispatch( getPerson());

  }, [dispatch])

  useEffect(() => {
    const getTwoUniqueIndexes = () => {
      const first = Math.floor(Math.random() * icons.length);
      let second;
      do {
        second = Math.floor(Math.random() * icons.length);
      } while (second === first);
      return [first, second];
    };

    setActiveIndexes(getTwoUniqueIndexes());

    const interval = setInterval(() => {
      setActiveIndexes(getTwoUniqueIndexes());
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <section className="flex flex-col md:flex-row items-center px-8 pt-8 xl:pt-20 xl:px-16 mt-20 xl:mt-10" id="about-me">
      <div className="md:w-[90%] lg:w-3/4 flex flex-col items-center text-center md:items-start md:text-start xl:text-left text-black">
      <h1 className="text-3xl xl:text-4xl mb-2">
          ¡Hola! Mi nombre es <span className="quicksand">Florencia Ñonquepan</span>
          <br></br>
          <span className="quicksand text-2xl xl:text-3xl"> Desarrolladora web e Ingeniera Química </span>
        </h1>
        <p className="text-sm my-2 font-normal">
          Con experiencia previa en gestión documental dentro del sector industrial, estoy enfocada en crear soluciones digitales para empresas del Oil & Gas y rubros afines.
          <br></br>Mi objetivo es ayudar a profesionales y pequeñas empresas a organizar mejor su trabajo, optimizar procesos y dar sus primeros pasos hacia la digitalización.
          <br></br>Estoy dando mis primeros pasos en el desarrollo freelance, con la mirada puesta en ofrecer sistemas simples, seguros y adaptados a cada necesidad.
        </p>

        {loading && 
        <FullScreenLoader message="Esto puede demorar unos segundos..."
        />}

      </div>
      <div className="lg:w-1/4 flex justify-center mb-8 md:mb-0 grid grid-cols-4 md:grid-cols-1 lg:grid-cols-2 p-2">
        {icons.map((img, i) => {
          let bg="";
            if (i === activeIndexes[0]) bg = 'bg-purple-300';
            else if (i === activeIndexes[1]) bg = 'bg-gray-400';
        return (
            <div
              key={i}
              className={`p-2 aspect-square shadow-md shadow-lg shadow-gray-400
              flex items-center justify-center transition-all duration-500 ${bg}`}>
              <img
                src={`/presentation/${img}`}
                alt={`icono-${i}`}
                className="w-16 md:w-14 lg:w-20"
              />
            </div>
        );
      })}
      </div>
    </section>
  )
}
