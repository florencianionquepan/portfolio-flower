
export const Presentation = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center p-8 lg:p-16 max-w-7xl mx-auto">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-fuchsia-300">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Hi! My name is Florencia
        </h1>
        <p className="text-lg mb-4">
        I'm a Fullstack Developer with a focus on backend development, particularly with Java Spring Boot. However, I also enjoy learning about front-end technologies to view certain data or when I need to be creative with design.
        </p>
        <p className="text-lg mb-4">
        In my free time, aside from exploring new technologies, I enjoy traveling to the mountains, meditating regularly, and occasionally practicing some extreme sports.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-center mb-8 lg:mb-0">
        <div className="custom-border-">
        <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQH-gTT9oBWj_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689178410836?e=1730937600&v=beta&t=iKsPDvQme56Wllm5WGKDu6DmM9XTmg7fbLqEGp1sUUU" 
            alt="Florencia"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
        </div>
        
      </div>
    </section>
  )
}
