import React, { PureComponent } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

export default class PicCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

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
                name: 'eeprom',
                eeprompic1: this.props.mydata[0].eeprom,
                eeprompic2: this.props.mydata[1].eeprom,
              }
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={this.renderTooltipeeprom} tooltipeepromdata={this.props.mydata}/>
            <Bar dataKey="eeprompic1" fill="rgb(255, 99, 132, 0.6)" />
            <Bar dataKey="eeprompic2" fill="rgba(54, 162, 235, 0.6)" />
          </BarChart>

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
                name: 'ram',
                rampic1: this.props.mydata[0].ram,
                rampic2: this.props.mydata[1].ram,
              }
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={this.renderTooltipram} tooltipramdata={this.props.mydata} />
            <Bar dataKey="rampic1" fill="rgb(255, 99, 132, 0.6)" />
            <Bar dataKey="rampic2" fill="rgba(54, 162, 235, 0.6)" />
          </BarChart>

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
                name: 'Input/Output pins',
                inputpic1: this.props.mydata[0].pins,
                inputpic2: this.props.mydata[1].pins,
              }
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={this.renderTooltipinputs} tooltipinputsdata={this.props.mydata} />
            <Bar dataKey="inputpic1" fill="rgb(255, 99, 132, 0.6)" />
            <Bar dataKey="inputpic2" fill="rgba(54, 162, 235, 0.6)" />
          </BarChart>

        </div > 

        <div style={{display: "flex", justifyContent: "center", margin: "40px 0px"}}>

          <LineChart
            width={500}
            height={200}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            data={[
              {
                name: 'adc',
                linedatapic1: this.props.mydata[0].adc,
                linedatapic2: this.props.mydata[1].adc,
              },
              {
                name: 'res',
                linedatapic1: this.props.mydata[0].res,
                linedatapic2: this.props.mydata[1].res,
              },
              {
                name: 'comp',
                linedatapic1: this.props.mydata[0].comp,
                linedatapic2: this.props.mydata[1].comp,
              },
              {
                name: 'timer16',
                linedatapic1: this.props.mydata[0].timer16,
                linedatapic2: this.props.mydata[1].timer16,
              },
              {
                name: 'timer8',
                linedatapic1: this.props.mydata[0].timer8,
                linedatapic2: this.props.mydata[1].timer8,
              }
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={this.renderTooltipline} tooltiplinedata={this.props.mydata} />
            <Line dataKey="linedatapic1" stroke="rgb(255, 99, 132, 0.6)" activeDot={{ r: 8 }} strokeWidth={2}/>
            <Line dataKey="linedatapic2" stroke="rgba(54, 162, 235, 0.6)" activeDot={{ r: 8 }} strokeWidth={2}/>
          </LineChart>
          
          <div style={{width: "200px", position: "relative"}}>

            <BarChart
              width={200}
              height={200}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              data={
                [
                  {
                    name: 'pic1',
                    speedpic1: this.props.mydata[0].max,
                    speedpic2: this.props.mydata[0].intosc,
                  },
                  {
                    name: 'pic2',
                    speedpic1: this.props.mydata[1].max,
                    speedpic2: this.props.mydata[1].intosc,
                  },
                ]
              }
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={this.renderTooltipspeed} tooltipspeeddata={this.props.mydata}/>
              <Bar dataKey="speedpic1" stackId="a" fill="rgb(255, 99, 132, 0.6)" />
              <Bar dataKey="speedpic2" stackId="a" fill="rgba(54, 162, 235, 0.6)" />
            </BarChart>

            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
              <div>
                <div style={{display: "flex"}}>
                  <div style={{height: "10px", width: "20px", backgroundColor: "rgb(255, 99, 132, 0.6)", margin: "3px"}}></div>
                  <div style={{fontSize: "0.8em"}}>Max Speed</div>
                </div>
                <div style={{display: "flex"}}>
                  <div style={{height: "10px", width: "20px", backgroundColor: "rgba(54, 162, 235, 0.6)", margin: "3px"}}></div>
                  <div style={{fontSize: "0.8em"}}>Internal Osc</div>
                </div>
              </div>
            </div>

          </div>

        </div>
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

  renderTooltipeeprom(props) {
    return (
      <div style={{backgroundColor: "white"}}>
        <h6>EEprom</h6>
        <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltipeepromdata[0].product}: {props.tooltipeepromdata[0].eeprom}</div>
        <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltipeepromdata[1].product}: {props.tooltipeepromdata[1].eeprom}</div> 
      </div>
    )
  }

  renderTooltipram(props) {
    return (
      <div style={{backgroundColor: "white"}}>
        <h6>Ram</h6>
        <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltipramdata[0].product}: {props.tooltipramdata[0].ram}</div>
        <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltipramdata[1].product}: {props.tooltipramdata[1].ram}</div> 
      </div>
    )
  }

  renderTooltipinputs(props) {
    return (
      <div style={{backgroundColor: "white"}}>
        <h6>Inputs</h6>
        <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltipinputsdata[0].product}: {props.tooltipinputsdata[0].pins}</div>
        <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltipinputsdata[1].product}: {props.tooltipinputsdata[1].pins}</div> 
      </div>
    )
  }

  renderTooltipline(props) {
    
    if (props.label === "adc"){
    return (
      <div style={{backgroundColor: "white"}}>
        <h6>{props.label}</h6>
        <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltiplinedata[0].product}: {props.tooltiplinedata[0].adc}</div>
        <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltiplinedata[1].product}: {props.tooltiplinedata[1].adc}</div> 
      </div>
    )
    }

    if (props.label === "res"){
      return (
        <div style={{backgroundColor: "white"}}>
          <h6>{props.label}</h6>
          <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltiplinedata[0].product}: {props.tooltiplinedata[0].res}</div>
          <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltiplinedata[1].product}: {props.tooltiplinedata[1].res}</div> 
        </div>
      )
      }

    if (props.label === "comp"){
      return (
        <div style={{backgroundColor: "white"}}>
          <h6>{props.label}</h6>
          <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltiplinedata[0].product}: {props.tooltiplinedata[0].comp}</div>
          <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltiplinedata[1].product}: {props.tooltiplinedata[1].comp}</div> 
        </div>
      )
      }

      if (props.label === "timer16"){
        return (
          <div style={{backgroundColor: "white"}}>
            <h6>{props.label}</h6>
            <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltiplinedata[0].product}: {props.tooltiplinedata[0].timer16}</div>
            <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltiplinedata[1].product}: {props.tooltiplinedata[1].timer16}</div> 
          </div>
        )
        }

      if (props.label === "timer8"){
        return (
          <div style={{backgroundColor: "white"}}>
            <h6>{props.label}</h6>
            <div style={{color: "rgb(255, 99, 132)"}}>{props.tooltiplinedata[0].product}: {props.tooltiplinedata[0].timer8}</div>
            <div style={{color: "rgb(54, 162, 235)"}}>{props.tooltiplinedata[1].product}: {props.tooltiplinedata[1].timer8}</div> 
          </div>
        )
        }

    return null
  } 

  renderTooltipspeed(props) {
      if (props.label === "pic1"){
        return (
          <div style={{backgroundColor: "white"}}>
            <h6>{props.tooltipspeeddata[0].product}</h6>
            <div style={{color: "rgb(255, 99, 132)"}}>External: {props.tooltipspeeddata[0].max}</div>
            <div style={{color: "rgb(54, 162, 235)"}}>Internal: {props.tooltipspeeddata[0].intosc}</div> 
          </div>
        )
        }

      if (props.label === "pic2"){
        return (
          <div style={{backgroundColor: "white"}}>
            <h6>{props.tooltipspeeddata[1].product}</h6>
            <div style={{color: "rgb(255, 99, 132)"}}>External: {props.tooltipspeeddata[1].max}</div>
            <div style={{color: "rgb(54, 162, 235)"}}>Internal: {props.tooltipspeeddata[1].intosc}</div> 
          </div>
        )
        }
        
    return null
  }


}

