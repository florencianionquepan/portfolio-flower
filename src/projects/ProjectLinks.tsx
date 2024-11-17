
export const ProjectLinks = ({ label, url }: { label: string; url: string }) => {
  return (
    <div className='mt-2'>
        <a className='text-sm font-bold text-purple-600 
        underline underline-offset-4' 
        target="_blank"
        rel="noopener noreferrer"
        href={url}> 
        {label}
        </a>
    </div>
  )
}
