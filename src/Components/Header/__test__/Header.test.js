import React from "react"
import Header from "../Header";
import {render} from "@testing-library/react";
import "testing-library/jest-dom/extended-expect";

test("header renders the correct text",()=>{
    const {getByTestId} = render(<Header/>);
    
})