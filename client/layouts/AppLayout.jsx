import React from 'react';
import { Layout } from 'antd';
import './Layout.css';

class AppLayout extends React.Component {

  render() {
    const { children } = this.props;

    return (
        <div>
            <h1 > Application Layout (You are in Application) </h1>
            <Layout style={{ height: '100vh' }}>
                { children }
            </Layout>
        </div>
    );
  }
}

export default AppLayout;
