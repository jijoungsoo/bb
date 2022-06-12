import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@toast-ui/react-grid'
import "tui-grid/dist/tui-grid.css";
import {popupRenderer} from './popupRenderer'
import {onePopupRenderer} from './onePopupRenderer'

function App() {
    const columns:any = [ 
        {header: 'REACT',name: 'REACT',width: 200,align : 'right',  sortable : true,resizable: true,sortingType: 'desc',  editor: 'text' ,renderer:popupRenderer},
        {header: '순수',name: 'PURE',width: 200,align : 'right',  sortable : true,resizable: true,sortingType: 'desc',  editor: 'text' ,renderer:onePopupRenderer}
    ];

    const data= [ 
        {REACT :'aaa'},
        {PURE :'aaa'},
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
