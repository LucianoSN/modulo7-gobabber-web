import React from 'react';
import api from '~/services/api';

const Dashboard = () => {
	api.get('appointments');
	return <h1>Dashboard</h1>;
};

export default Dashboard;
