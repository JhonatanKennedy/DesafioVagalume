import React from 'react';
import Chart from 'react-google-charts';
import { Loading } from './styles';


export default function NewChart({row}){
    const columns = [
        {
          type: "string",
          label: "Mês"
        },
        {
          label: "Uso",
          type: "number"
        }
      ];
    const rows = [
    ['Jan', row[0]], 
    ['Fev', row[1]], 
    ['Mar', row[2]],
    ['Abr',row[3]],
    ['Mai',row[4]],
    ['Jun',row[5]],
    ['Jul',row[6]],
    ['Ago',row[7]],
    ['Set',row[8]],
    ['Out',row[9]],
    ['Nov',row[10]],
    ['Dez',row[11]]
    ];
    const max = Math.max(...row)

    return(
        <Chart
        width='100%'
        height='300px'
        chartType="AreaChart"
        loader={<Loading><div></div></Loading>}
        rows={rows}
        columns={columns}
        options={{ 
            colors: ['#ff9900'],
            vAxes: {0: { gridlines: { color: "transparent"}} },
            vAxis:{ maxValue: max+1 },
            legend:{ position: 'none' },
            title: 'Uso de Wi-Fi',
            titleTextStyle:{ fontSize: 14, color: '#9fa0a1'},
            chartArea: { width: '90%', height: '60%' },
            pointSize: 5,
            series: {
              0: { lineWidth: 2 },
            },
        }}
    />
    );
}
