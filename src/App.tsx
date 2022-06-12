import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@toast-ui/react-grid'
import "tui-grid/dist/tui-grid.css";
import {popupRenderer} from './popupRenderer'

function App() {
    const columns:any = [ 
        {header: '사용자UID',name: 'USER_UID',width: 200,align : 'right',  sortable : true,resizable: true,sortingType: 'desc',  editor: 'text' ,renderer:popupRenderer}
    ];

    const data= [ 
        {USER_UID :'aaa'},
        {USER_UID :'aaa'},
    ];

  return (
    <Grid  
        columnOptions={{
        resizable: true
        }}

        data ={data}
        columns={columns}
        minRowHeight={40}
        bodyHeight={400}
        showDummyRows={false}
        minBodyHeight={500}
        pageOptions={{
        useClient: true,
        perPage: 14
        }}
        scrollX={false}
        scrollY={false}
        heightResizable={false}
    ></Grid>
  );
}

export default App;
