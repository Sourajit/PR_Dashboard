import React, { Component } from 'react';
import { useParams } from 'react-router';
import { Button } from 'semantic-ui-react';
import { Grid, Segment, Dropdown } from 'semantic-ui-react';
import './ConfigureReports.css';
import Header from '../../components/Header/Header';

const tcList = [{
  "tcId": "14",
  "tcName": "Digital",
  "pods": [{
    "pod": "Cards",
    "featureTeam": ["Team4", "Team6", "Team8"]
  }, {
    "pod": "Lending",
    "featureTeam": ["Team1", "Team2", "Team3"]
  }]
},{
  "tcId": "12",
  "tcName": "SampleTC",
  "pods": [{
    "pod": "SamplePod1",
    "featureTeam": ["Team11", "Team12", "Team13"]
  }, {
    "pod": "SamplePod2",
    "featureTeam": ["Team21", "Team22", "Team23"]
  }]
}];
const channelList = [{
  "channelId": "1",
  "channelName": "bmb",
  "repoList": ["Repo11", "Repo12", "Repo13"]
},{
  "channelId": "2",
  "channelName": "rolb",
  "repoList": ["Repo21", "Repo22", "Repo23"]
},{
  "channelId": "3",
  "channelName": "online",
  "repoList": ["Repo31", "Repo32", "Repo33"]
},{
  "channelId": "4",
  "channelName": "branch",
  "repoList": ["Repo41", "Repo42", "Repo43"]
}];
const durationOptions = [
  {
    text: 'Last Week',
    value: 'week',
  },
  {
    text: 'Last Month',
    value: 'month',
  },
  {
    text: 'Last Quarter',
    value: 'quarter',
  },
  {
    text: 'Last Year',
    value: 'year',
  },
]
const getReportType = {
  ":1": "Pie Chart",
  ":2": "Resolution Time"
};
class ConfigureReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tcSelected: [],
      podSelected: [],
      teamSelected: [],
      channelSelected: [],
      repoSelected: [],
      durationSelected: ""
    };
  }
  debugger;
  podList = [];
  teamList = [];
  repoList = [];
  onChangeTC = function(e,data){
    this.setState({...this.state,tcSelected: data.value });
    this.podList = tcList.reduce((acc,cur,i)=>{
      if(data.value.includes(cur.tcId)){
        return acc.concat(cur.pods);
      }
      return acc;
    },[]);
  };
  onChangePOD = function(e,data){
    this.setState({...this.state,podSelected: data.value });
    this.teamList = this.podList.reduce((acc,cur,i)=>{
      if(data.value.includes(cur.pod)){
        return acc.concat(cur.featureTeam);
      }
      return acc;
    },[]);
  };
  onChangeChannel = function(e,data){
    this.setState({...this.state,channelSelected: data.value });
    this.repoList = channelList.reduce((acc,cur,i)=>{
      if(data.value.includes(cur.channelId)){
        return acc.concat(cur.repoList);
      }
      return acc;
    },[]);
  };
  submitReportsData = function(){
    console.log("data");

    debugger;
    return "/reportsResult"+ this.props.routeParams.id;
  };
  render() {
    this.headerProps = {'title': 'configure '+ getReportType[this.props.match.params.id]+' report', desc:'Configure your filters and submit to view the final report'};
    return (
      <div>
        <Segment className="report-header">
            <Header {...this.headerProps} />
        </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment className="configure-reports" width={6}>
               <div className="_col6">
                  <p>Select Business Area / TC</p>
                  <Dropdown placeholder='Select an option' fluid selection multiple 
                  options={tcList.map((item)=> {return { key: item.tcId, text: item.tcName.toUpperCase(), value: item.tcId } })} 
                  onChange={this.onChangeTC.bind(this)}/>
                  <p>Organisation Unit / POD</p>
                  <Dropdown placeholder='Select an option' disabled={this.state.tcSelected.length===0} fluid selection multiple 
                  options={this.podList.map((item)=> {return { key: item.pod, text: item.pod.toUpperCase(), value: item.pod }})} 
                  onChange={this.onChangePOD.bind(this)}/>
                  <p>Feature Team</p>
                  <Dropdown placeholder='Select an option' disabled={this.state.podSelected.length===0}  fluid selection multiple 
                  options={this.teamList.map((item)=> {return { key: item, text: item.toUpperCase(), value: item }})} 
                  onChange = {(e,data)=>  this.setState({...this.state,teamSelected: data.value })} />
                </div>
                <div className="_col6">
                  <p>Channel / Application</p>
                  <Dropdown placeholder='Select an option' fluid selection multiple 
                    options={channelList.map((item)=> {return { key: item.channelId, text: item.channelName.toUpperCase(), value: item.channelId } })} 
                    onChange={this.onChangeChannel.bind(this)} />
                  <p>Repository</p>
                  <Dropdown placeholder='Select an option' fluid selection multiple 
                    options={this.repoList.map((item)=> {return { key: item, text: item.toUpperCase(), value: item }})} 
                    onChange = {(e,data)=>  this.setState({...this.state,repoSelected: data.value })} />
                  <p>Select Duration</p>
                  <Dropdown placeholder='Select an option' fluid selection options={durationOptions} 
                   onChange = {(e,data)=>  this.setState({...this.state, durationSelected: data.value })} />
                </div>
                <div>
                  <Button className="submit-btn" onClick={()=>{debugger; return this.submitReportsData.bind(this)}}>Submit</Button>
                </div>
              </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default ConfigureReports;
