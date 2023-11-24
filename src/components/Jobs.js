'use client'

import React, { useEffect, useState } from 'react'
import Job from './Job'
import Image from 'next/image'

const Jobs = ({ jobs }) => {
  const [selected, setSelected] = useState([])
  const [selectedJobs, setSelectedJobs] = useState([...jobs])

  useEffect(() => {
    if (!selected.length) {
      setSelectedJobs([...jobs])
    } else {
      const filteredJobs = []

      jobs.map((job) => {
        const { role, level, languages, tools } = job
        const options = [role, level, ...languages, ...tools]

        if (selected.every((filter) => options.includes(filter))) {
          filteredJobs.push(job)
        }
      })
      setSelectedJobs([...filteredJobs])
    }
  }, [selected])

  const addSelection = (toAdd) => {
    if (selected.find((select) => select === toAdd)) return
    setSelected([...selected, toAdd])
  }

  const deleteSelection = (toDelete) => {
    setSelected([...selected.filter((select) => select !== toDelete)])
  }

  const deleteOptions = () => {
    setSelected([])
  }

  return (
    <div className="px-6 relative">
      {selected.length ? (
        <section
          className="relative items-center top-0 translate-y-[-50%] flex justify-between
           bg-white p-5 rounded-[5px] text-blue font-bold
              shadow-[0_15px_20px_-5px_rgba(13,113,130,0.15)] gap-4"
        >
          <div className="flex flex-wrap gap-4">
            {selected.map((filter) => (
              <div className="flex">
                <p className="px-5 py-1 rounded-l-[4px] bg-blue/10">{filter}</p>
                <div
                  onClick={() => deleteSelection(filter)}
                  className="rounded-r-[4px] flex items-center bg-blue hover:bg-darkBlue cursor-pointer px-2"
                >
                  <Image width={20} height={20} src="/images/icon-remove.svg" />
                </div>
              </div>
            ))}
          </div>
          <p
            onClick={() => deleteOptions()}
            className="cursor-pointer text-darkGrey hover:text-blue"
          >
            Clear
          </p>
        </section>
      ) : (
        ''
      )}
      <section className="mt-14 flex flex-col gap-10">
        {selectedJobs.map((job) => {
          return <Job key={job.id} job={job} addSelection={addSelection} />
        })}
      </section>
    </div>
  )
}

export default Jobs
