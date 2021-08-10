import React from 'react';
import styles from './Dashboard.module.css';
import test from '../../services/testApi.js';

const Dashboard = () => {
  React.useEffect(() => {
    test.getSortedTickets().then((res) => console.log(res));
  }, [])
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard;
