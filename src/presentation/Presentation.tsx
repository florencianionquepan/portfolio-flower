import { Girl } from "./draw/Girl";
import { useEffect } from "react";
import { getPerson } from "../store/person/thunks";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Presentation = () => {
  //const {data, isLoading, hasError } =useFetch('public/profile/ñonquepan');
  //console.log(data);

  const dispatch = useAppDispatch();
  const {person, loading, error }= useSelector ( (state: RootState) => state.person); 

  useEffect(() => {
    dispatch( getPerson());

  }, [dispatch])
  

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center p-8 xl:p-16">
      <div className="xl:w-3/5 flex flex-col items-center lg:items-start text-center xl:text-left text-black">
        <h1 className="text-3xl xl:text-4xl mb-4">
          Hi! 
          <br></br>
          <span className="quicksand font-medium"> My name is Florencia Ñonquepan </span>
        </h1>
        {
          !loading && 
          <p className="text-lg my-4 font-normal">
            {error? '😞 An error occurred.':''}
            {person?.presentation}
          </p>
        }

        {loading && <p>...</p>}

      </div>
      <div className="xl:w-2/5 flex justify-center xl:justify-center mb-8 lg:mb-0">
          <Girl/>
      </div>
    </section>
  )
}
