import React, { PureComponent } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default class PicCharts extends PureComponent {
  
  render() {
    return (
      <div>
        <div style={{display: "flex", justifyContent: "center", margin: "30px 0px"}}>
          <BarChart
            width={180}
            height={200}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
            data={[
              {
                name: 'memory',
                memorypic1: this.props.mydata[0].progmemory,
                memorypic2: this.props.mydata[1].progmemory,
              }
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip  content={this.renderTooltipmemory} tooltipmemorydata={this.props.mydata} />
            <Bar dataKey="memorypic1" fill="rgb(255, 99, 132, 0.6)" />
            <Bar dataKey="memorypic2" fill="rgba(54, 162, 235, 0.6)" />
          </BarChart>

          
        </div > 

      

            

         
      </div>
    );
  }

  renderTooltipmemory(props) {
    return (
      <div style={{backgroundColor: "white"}}>
        <h6>Memory</h6>
        <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltipmemorydata[0].product}: {props.tooltipmemorydata[0].progmemory}</div>
        <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltipmemorydata[1].product}: {props.tooltipmemorydata[1].progmemory}</div> 
      </div>
    )
  }

  


}

