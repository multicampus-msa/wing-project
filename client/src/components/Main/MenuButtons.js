import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import SearchInputField from "./SerachInputField";


const MenuButtons = () => {
    const [colorSwitch, setColorSwitch] = useState([1, 0, 0, 0, 0]);

    const buttons = ["Home", "Streaming", "Live", "Support", "Concert"];

    const onClick = id => {
        const nextColor = colorSwitch.map((val, idx) => idx === id);
        setColorSwitch(nextColor);
    };

// 버튼 컴포넌트 5개 생성
    const buttonList = buttons.map(
        (button, idx) => {
            return (
                <Link style={{ textDecoration: 'none' }} to={'/' + button}>
                    <Button
                        style={{minWidth: "120px", maxWidth: "120px"}}
                        size="large" variant="contained" color={colorSwitch[idx] ? "secondary" : "primary"}
                        onClick={() => onClick(idx)}
                    >
                        {button}
                    </Button>
                </Link>
            )
        }
    );

    return (
        <div>
            {buttonList}<SearchInputField/>
        </div>
    )
};

export default MenuButtons;