import * as React from 'react';
import Button from '@mui/material/Button';

type buttonProps = {
    label: string;
    typeBtn: "submit" | "button" | "reset" ;
    layout: "text" | "contained" | "outlined" ;
    // action: () => {}
}

const BasicButton = ({
    label,
    layout,
    typeBtn
    // action
}: buttonProps) => {
  return (
      <div>
          <Button variant={layout ||'contained'} type={typeBtn}>{label}</Button>
      </div>
  );
}

export default BasicButton;