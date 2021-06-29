import React from 'react';
import Chart from 'react-google-charts';
import { Loading } from './styles';


export default function NewChart({ row }){
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

    return(
      <>
      {row.length === 0 && <Loading><div></div></Loading>}
      {row.length !== 0 &&        
      <Chart
        width='100%'
        height='300px'
        chartType="AreaChart"
        rows={rows}
        columns={columns}
        options={{ 
            colors: ['#ff9900'],
            vAxes: {0: { gridlines: { color: "transparent"}} },
            legend:{ position: 'none' },
            title: 'Uso de Wi-Fi',
            titleTextStyle:{ fontSize: 14, color: '#9fa0a1'},
            chartArea: { width: '90%', height: '60%' },
            pointSize: 5,
            series: {
              0: { lineWidth: 2 },
            },
        }}
    />}
      </>
    );
}
