import React from 'react';

const ToneChart = ({userTone}) => {
  // console.log(userTone);
  return (
    <div>
      {userTone.map(tones =>
        <section key={tones.category_id}>
          {tones.category_name}<br />
          <ul>
            {tones.tones.map(tone =>
              <li key={tone.tone_id}>{tone.tone_name}: {tone.score}</li>
             )}
           </ul>

        </section>
      )}
    </div>
  )
}

export default ToneChart;
