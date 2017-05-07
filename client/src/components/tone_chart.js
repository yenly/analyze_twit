import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const ToneChart = ({userTone}) => {
  const toneLabels = userTone.tones.map(tone => {
    return tone.tone_name;
  });
  console.log(toneLabels);

  return (
    <section>
      <VictoryChart
        domainPadding={20}>
        <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {fontSize: 12, padding: 5}
          }}
          tickValues={toneLabels} />
        <VictoryAxis
          tickValues={[0, 0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        />
        <VictoryBar
          data={userTone.tones}
          horizontal={true}
          x="tone_name"
          y="score" />
      </VictoryChart>
    </section>
  )
}

export default ToneChart;
