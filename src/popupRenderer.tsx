import { createRoot } from 'react-dom/client';
import { FunctionComponent, useRef } from "react";
import { CellRendererProps } from "tui-grid/types/renderer";
import React from 'react';

interface InputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    inputRef?: React.MutableRefObject<null>;
    value?: string;
  }

const Input = ({ type = 'text', ...props }:InputProps ) => {
    return <input  {...props} ref={props.inputRef} />;
  };

export class popupRenderer {
    private el:  HTMLDivElement;     
    private txt : string='';
    private fn: Function | undefined;
    private element: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
    private value : string="aaaaa";

    constructor(props: CellRendererProps) {
        const el =  document.createElement('div');     

        
        const t:InputProps = {type:'a'};
        //const element = React.createElement(Input);
        const root = createRoot(el); // createRoot(container!) if you use TypeScript
        //root.render(this.element);
        root.render(<Input value={this.value}  />)

        this.el = el;
        this.render(props);
    }

     getElement() {
      return this.el;
    }

    render(props:CellRendererProps) {
        console.log("render =>" +props.value);
        
    }
}