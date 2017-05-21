import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

const ToneChart = ({userTone}) => {
  const toneLabels = userTone.tones.map(tone => {
    return tone.tone_name;
  });
  // console.log(userTone.category_name);

  return (
    <section>
      <VictoryChart
        domainPadding={20}
        // theme={VictoryTheme.material}
        >
        <VictoryLabel text={userTone.category_name} x={110} y={30} />
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
          // labels={toneLabels}
          data={userTone.tones}
          horizontal={true}
          x="tone_name"
          y="score" />
      </VictoryChart>
    </section>
  )
}

export default ToneChart;
