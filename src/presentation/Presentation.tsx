import { Girl } from "./draw/Girl";
import { useEffect } from "react";
import { getPerson } from "../store/person/thunks";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FullScreenLoader } from "../assets/FullScreenLoader";

export const Presentation = () => {

  const dispatch = useAppDispatch();
  const {person, loading, error }= useSelector ( (state: RootState) => state.person); 

  useEffect(() => {
    dispatch( getPerson());

  }, [dispatch])
  

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center p-8 xl:p-16 mt-20 xl:mt-10" id="about-me">
      <div className="xl:w-3/5 flex flex-col items-center lg:items-start text-center xl:text-left text-black">
        <h1 className="text-3xl xl:text-4xl mb-2">
          Hi! My name is 
          <br></br>
          <span className="quicksand font-medium"> Florencia Ñonquepan </span>
        </h1>
        {
          !loading && 
          <p className="text-lg my-2 font-normal">
            {error? '😞 An error occurred.':''}
            {person?.presentation}
          </p>
        }

        {loading && 
        <FullScreenLoader message="This may take a few seconds because the backend is hosted on a free server."
        />}

      </div>
      <div className="xl:w-2/5 flex justify-center xl:justify-center mb-8 lg:mb-0">
          <Girl/>
      </div>
    </section>
  )
}
