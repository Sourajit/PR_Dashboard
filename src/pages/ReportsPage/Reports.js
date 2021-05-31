import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChartComponent from '../../components/Chart/BarChartComponent'
import { Segment, Grid } from 'semantic-ui-react';
import './Reports.css'
import PieChartComponent from '../../components/Chart/ActivePieChartComponent';
import Header from '../../components/Header/Header';

const headerProps = {'title': 'select reports', desc:'Choose and select report from the below list'};

class Reports extends Component {
  render() {
    return (
      <div>
        <Segment className="report-header">
            <Header {...headerProps} />
        </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Link to='/configureReports:1' name='configureReports' key='configureReports'>
              <Segment className="chart-container">
                <p className="report-heading">Pie Chart</p>
                <PieChartComponent /> 
              </Segment>
          </Link>
          </Grid.Column>
          <Grid.Column width={8}>
          <Link to='/configureReports:2' name='configureReports' key='configureReports'>
              <Segment className="chart-container">
              <p className="report-heading">Bar Chart</p>
                <BarChartComponent /> 
              </Segment>
          </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

export default Reports;
