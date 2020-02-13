import React from 'react'
import { format } from 'date-fns'

export const KawaraDate: React.FC<{ date: Date }> = ({ date }) => {
  const formattedDate = format(date, "MMM.d,Y")
  return (
    <>
      <section className="date">{formattedDate}</section>
      <style jsx>
        {`
          @font-face {
            font-family: 'kawara';
            src: url('OnKawara-Regular.otf');
          }

          section.date {
            font-family: kawara;
            font-size: 10vw;
          }
        `}
      </style>
    </>
  )
}
