import { Button } from 'antd';
import React from 'react';

const CButton = ({
    styles = {},
    extra = '',
    callBackFunction = () => { },
    text = '',
    type,
    variant
}) => (
    <Button
        type={type}
        variant={variant}
        style={styles}
        className={extra}
        onClick={callBackFunction}
    >
        {text}
    </Button>
);

export default CButton;
