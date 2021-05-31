import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import TopMenu from './components/TopMenu/TopMenu';
import MainContainer from './pages/MainContainer'
import asyncComponent from './AsyncComponent';


const AsyncReports = asyncComponent(() => import('./pages/ReportsPage/Reports'));
const AsyncConfigureReports = asyncComponent(() => import('./pages/ConfigureReportsPage/ConfigureReports'));
const AsyncReportsResult = asyncComponent(() => import('./pages/ReportsResultPage/ReportsResult'));
const AsyncDashboard = asyncComponent(() => import('./pages/DashboardPage/Dashboard'));
const AsyncDropdowns = asyncComponent(() => import('./pages/DropdownPage/Dropdowns'));
const AsyncRangePicker = asyncComponent(() => import('./pages/FormPage/RangePicker'));
const AsyncInput = asyncComponent(() => import('./pages/FormPage/Input'));
const AsyncCalendar = asyncComponent(() => import('./pages/CalendarPage/Calendar'));
const AsyncChart = asyncComponent(() => import('./pages/ChartPage/Chart'));
const AsyncLayout = asyncComponent(() => import('./pages/LayoutPage/Layout'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <LeftMenu />
        {/* <Header /> */}
        <MainContainer>
          {/* {this.props.children} */}
          <Switch>
            <Route path="/configureReports:id" exact component={AsyncConfigureReports} />
            <Route path="/reports" exact component={AsyncReports} />
            <Route path="/reportsResult:id" component={AsyncReportsResult} />
            <Route path="/dashboard" exact component={AsyncDashboard} />
            <Route path="/input" exact component={AsyncInput} />
            <Route path="/calendar" exact component={AsyncCalendar} />
            <Route path="/dropdown" exact component={AsyncDropdowns} />
            <Route path="/range-picker" exact component={AsyncRangePicker} />
            <Route path="/chart" exact component={AsyncChart} />
            <Route path="/layout" exact component={AsyncLayout} />
          </Switch>
        </MainContainer>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
