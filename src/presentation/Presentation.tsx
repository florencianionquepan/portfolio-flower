import { useFetch } from "../hooks/useFetch";
import { Girl } from "./draw/Girl";

export const Presentation = () => {
  const {data, isLoading, hasError } =useFetch('public/profile/ñonquepan');
  //console.log(data);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center p-8 xl:p-16">
      <div className="xl:w-3/5 flex flex-col items-center lg:items-start text-center xl:text-left text-fuchsia-300">
        <h1 className="text-3xl xl:text-4xl mb-4">
          Hi! 
          <br></br>
          My name is Florencia Ñonquepan
        </h1>
        {
          !isLoading && 
          <p className="text-lg my-4">
            {hasError? '😞 An error occurred.':''}
            {data?.presentation}
          </p>
        }

        {isLoading && <p>...</p>}

      </div>
      <div className="xl:w-2/5 flex justify-center xl:justify-center mb-8 lg:mb-0">
          <Girl/>
      </div>
    </section>
  )
}
