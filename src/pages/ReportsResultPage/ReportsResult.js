import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChartComponent from '../../components/Chart/BarChartComponent'
import { Segment, Grid } from 'semantic-ui-react';
import './ReportsResult.css'
import PieChartComponent from '../../components/Chart/PieChartComponent';
// http://recharts.org/

class Reports extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Link to='/configureReports:1' name='configureReports' key='configureReports'>
              <Segment className="chart-container">
                Pie Chart
                <PieChartComponent /> 
              </Segment>
          </Link>
          </Grid.Column>
          <Grid.Column width={8}>
          <Link to='/configureReports:2' name='configureReports' key='configureReports'>
              <Segment className="chart-container">
                Bar Chart
                <BarChartComponent /> 
              </Segment>
          </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Reports;
