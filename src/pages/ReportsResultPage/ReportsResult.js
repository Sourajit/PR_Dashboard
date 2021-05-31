import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarChartComponent from '../../components/Chart/BarChartComponent'
import { Segment, Tab, Menu, Label , Icon} from 'semantic-ui-react';
import './ReportsResult.css'

import Header from '../../components/Header/Header';
import PieChartComponent from '../../components/Chart/PieChartComponent';
// http://recharts.org/

const panes = [
  {
    menuItem: (
      <Menu.Item key='chart'>
        <Icon name='chart bar' />
        Graphical View
      </Menu.Item>
    ),
    render: () => <Tab.Pane as="div" attached={false}>Graphical View Goes Here</Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='table'>
         <Icon name='table' />
        Tabular View
      </Menu.Item>
    ),
    render: () => <Tab.Pane as="div" attached={false}>Tabular View Goes Here</Tab.Pane>,
  },
]
const getReportType = {
  ":1": "Pie Chart",
  ":2": "Resolution Time"
};
class ReportsResult extends Component {
  render() {
    this.headerProps = {'title': getReportType[this.props.match.params.id]+' report result', desc:'You can view in tabluar and graphical view and go back and search again.'};
    return (
      <div>
        <Segment className="report-result-header">
          <Header {...this.headerProps} />
        </Segment>
        <Segment width={16} className="reports-result">
        <Tab menu={{ color: "#0074a6", secondary: true }} panes={panes} />
        </Segment>
      </div>
    )
  }
}

export default ReportsResult;
