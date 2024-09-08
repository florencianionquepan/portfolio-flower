
export const Presentation = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center p-8 lg:p-16 max-w-7xl mx-auto">
      <div className="lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left text-fuchsia-300">
        <h1 className="text-3xl lg:text-4xl mb-4">
          Hi! 
          <br></br>
          My name is Florencia Ñonquepan
        </h1>
        <p className="text-lg my-4">
        I'm a Fullstack Developer with a focus on backend development, 
        particularly with Java Spring Boot. While backend is my primary expertise, 
        I also have experience with frontend technologies to complement full-stack solutions when needed.
        </p>
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
