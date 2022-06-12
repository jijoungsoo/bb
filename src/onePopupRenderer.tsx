import { createRoot } from 'react-dom/client';
import { FunctionComponent, useRef } from "react";
import { CellRendererProps } from "tui-grid/types/renderer";
import React from 'react';

export class onePopupRenderer {
    private el : HTMLInputElement;
    

    constructor(props: CellRendererProps) {
        const el =  document.createElement('input');     

        this.el = el;
        this.render(props);
    }

     getElement() {
      return this.el;
    }

    render(props:CellRendererProps) {
        console.log("render =>" +props.value);
        this.el.value=props.value as string;
        
    }
}