import React from 'react'

export const KawaraDate: React.FC<{ date: Date }> = ({ date }) => (
  <>
    <section className="date">{date.toLocaleDateString()}</section>
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
