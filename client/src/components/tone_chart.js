import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const parseUserTone = (userTone) => {
  let tones = [];
  if(userTone) {
    tones = userTone.map(toneChart => {
      // console.log('inside tone', toneChart.tones);
      const toneData = toneChart.tones.map(tone => {
        // console.log(tone.tone_name, tone.score);
        const toneDataRow = {
          tone_name: tone.tone_name,
          score: tone.score
        }
        return toneDataRow;
      });
      return toneData;
    })
    return tones;
  }
}

const ToneChart = ({userTone}) => {
  const toneChartList = parseUserTone(userTone);
  // console.log('tonelist', toneChartList[0]);

  return (
    <div>
      <VictoryChart
        domainPadding={20}>
        {/* <VictoryAxis
          tickValues={[0, 0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        /> */}
        <VictoryBar
          data={toneChartList[0]}
          horizontal={true}
          x="tone_name"
          y="score" />
      </VictoryChart>

      <VictoryChart
        domainPadding={20}>
        <VictoryBar
          data={toneChartList[1]}
          horizontal={true}
          x="tone_name"
          y="score" />
      </VictoryChart>

      <VictoryChart
        domainPadding={20}>
        <VictoryBar
          data={toneChartList[2]}
          horizontal={true}
          x="tone_name"
          y="score" />
      </VictoryChart>

    </div>
  )
}

export default ToneChart;
