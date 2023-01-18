import React from 'react';
import { RotatingLines } from "react-loader-spinner";
import "./Loading.scss"

const Loading = () => {
    return (
        <div className="Loading">
            <RotatingLines
                strokeColor="#5cb85c"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default Loading;