
type TytleProps={
    title:string
}


export const Titles = (props: TytleProps) => {
  return (
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {props.title}
    </h2>
  )
}
