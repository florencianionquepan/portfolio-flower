
type TytleProps={
    title:string
}


export const Titles = (props: TytleProps) => {
  return (
    <h2 className="text-2xl 
    sm:text-3xl quicksand font-normal text-black">
        {props.title}
    </h2>
  )
}
