import { DocumentArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { startDownloadingResume } from "../store/resume/thunk";
import { Login } from "./Login";

const contact=[
    {id:1, name:'Github',link:'https://github.com/florencianionquepan'},
    {id:2, name:'LinkedIn', link:'https://www.linkedin.com/in/florencia-nionquepan/'},
    {id:3, name:'Resume'},
    {id:4, name:'Email',link:'mailto:florencianionquepan@gmail.com'}
];

export const MyFooter = () => {

  const dispatch: AppDispatch = useDispatch();

  const handleDownload = ()=>{
      dispatch(startDownloadingResume());
  }

  return (
    <footer className="bg-purple-100 py-6 mt-12 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.15),0_-2px_4px_-2px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-row items-center">
            <Login/>
            <p className="text-sm text-gray-900 mx-2">
              © {new Date().getFullYear()} Florencia Ñonquepan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
          {contact.map(({ id, name, link }) => (
            name === "Resume" ? (
              <button
                key={id}
                onClick={handleDownload}
                className="bg-transparent border border-2 border-purple-600 rounded-full p-2 hover:shadow hover:shadow-purple-600"
                aria-label="Download Resume" >
                <DocumentArrowDownIcon className="w-5 h-5 text-purple-600" />
              </button>
            ) : (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-2 border-purple-600 rounded-full p-2 hover:shadow hover:shadow-purple-600"
                aria-label={name} >
                {name === "Github" && <img src="/icons/github.svg" className="w-5 h-5" alt={name} />}
                {name === "LinkedIn" && <img src="/icons/linkedin.svg" className="w-5 h-5" alt={name} />}
                {name === "Email" && <EnvelopeIcon className="w-5 h-5 text-purple-600" />}
              </a>
            )
          ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
