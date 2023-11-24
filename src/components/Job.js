import React from 'react'
import Image from 'next/image'

const Job = ({ job, addSelection }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job

  return (
    <article
      className="w-full flex flex-col md:flex-row relative md:items-center md:justify-between  bg-white rounded-[5px]
              shadow-[0_15px_20px_-5px_rgba(13,113,130,0.15)] pt-8 px-6 pb-6"
    >
      <div className="flex items-center md:gap-6">
        <Image
          className="absolute md:hidden top-0 translate-y-[-50%] md:translate-y-0"
          width={48}
          height={48}
          src={logo.slice(1)}
          alt="company logo"
        />
        <Image
          className="hidden md:block top-0 translate-y-[-50%] md:translate-y-0"
          width={88}
          height={88}
          src={logo.slice(1)}
          alt="company logo"
        />
        <div className="flex flex-col gap-[9px]">
          <div className="flex items-center gap-8">
            <p className="text-blue font-bold text-[13px]">{company}</p>
            <div className="flex gap-2">
              {job.new && (
                <p className="bg-blue text-white px-2 pt-1 rounded-xl font-bold text-sm tracking-[-0.108px]">
                  NEW!
                </p>
              )}
              {featured && (
                <p className="bg-darkBlue text-white px-2 pt-1 rounded-xl font-bold text-sm tracking-[-0.108px]">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <h2 className="font-bold text-[15px] text-darkBlue transition-all duration-500 hover:text-blue cursor-pointer">
            {position}
          </h2>
          <div className="flex gap-5 text-darkGrey items-center font-medium">
            <p>{postedAt}</p>
            <div className="w-1 h-1 rounded-full bg-grey"></div>
            <p>{contract}</p>
            <div className="w-1 h-1 rounded-full bg-grey"></div>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap md:max-w-[50%] 
      border-t-grey border-t md:border-t-0 mt-4 md:mt-0 pt-4 md:pt-0 gap-4 text-blue font-bold"
      >
        <p
          onClick={() => addSelection(role)}
          className="px-5 py-1 rounded-[4px] bg-blue/10 cursor-pointer
         transition-all duration-500 hover:bg-blue hover:text-white"
        >
          {role}
        </p>
        <p
          onClick={() => addSelection(level)}
          className="px-5 py-1 rounded-[4px] bg-blue/10 cursor-pointer
        transition-all duration-500 hover:bg-blue hover:text-white"
        >
          {level}
        </p>
        {languages.map((language) => (
          <p
            key={language}
            onClick={() => addSelection(language)}
            className="px-5 py-1 rounded-[4px] bg-blue/10 cursor-pointer
           transition-all duration-500 hover:bg-blue hover:text-white"
          >
            {language}
          </p>
        ))}
        {tools.map((tool) => (
          <p
            key={tool}
            onClick={() => addSelection(tool)}
            className="px-5 py-1 rounded-[4px] bg-blue/10 cursor-pointer
             transition-all duration-500 hover:bg-blue hover:text-white"
          >
            {tool}
          </p>
        ))}
      </div>
    </article>
  )
}

export default Job
