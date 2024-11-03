import { Education } from "../store/model/Education"

interface EducationItemProps {
    education: Education;
}

export const EducationItem = ({education}: EducationItemProps) => {

  const startYear = education.startDate ? new Date(education.startDate).getFullYear() : "-";
  const endYear = education.endDate ? new Date(education.endDate).getFullYear() : "-";

  return (
    <div className="flex flex-items-center justify-start mt-2" role="listitem" aria-label="Educational background">
        <div className="mx-1 pr-3 border-purple-400 border-r-2 font-normal">
          <p aria-label="Start year">{startYear} - </p>
          <p aria-label="End year">{endYear}</p>
        </div>
        <div className="pl-3">
            <p className="font-semibold"> {education.name} - {education.institution} </p>
            <p> {education.degreeType} </p>
            <p> Status: <span className="font-semibold">{education.status}</span></p>
        </div>
    </div>
  )
}
