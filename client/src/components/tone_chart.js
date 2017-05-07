import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const ToneChart = ({userTone}) => {
  return (
    <section>
      <VictoryChart
        domainPadding={20}>
        {/* <VictoryAxis
          dependentAxis
          tickValues={[0, 0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        /> */}
        <VictoryBar
          data={userTone.tones}
          // horizontal={true}
          x="tone_name"
          y="score" />
      </VictoryChart>
    </section>
  )
}

export default ToneChart;
