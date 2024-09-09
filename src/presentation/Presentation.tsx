import { useFetch } from "../hooks/useFetch";

export const Presentation = () => {
  const {data, isLoading, hasError } =useFetch('public/profile/ñonquepan');
  //console.log(data);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center p-8 lg:p-16 max-w-7xl mx-auto">
      <div className="lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left text-fuchsia-300">
        <h1 className="text-3xl lg:text-4xl mb-4">
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
      <div className="lg:w-2/5 flex justify-center lg:justify-center mb-8 lg:mb-0">
        <div className="custom-border-">
        <img
            src="https://res.cloudinary.com/df0jqz3nr/image/upload/v1725833611/portfolio/profile_zf2kje.jpg"
            alt="Florencia"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
        </div> 
      </div>
    </section>
  )
}
