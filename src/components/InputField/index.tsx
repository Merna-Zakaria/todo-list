import React from "react";
import TextField from '@mui/material/TextField';

type inputProps = {
  name: string,
  id: string,
  className: string,
  label: string,
  value: string,
  error: boolean,
  changeHandler: () => {},
  helperText: string,
  isMultiline: boolean,
  isRequired: boolean,
  max: number,
  disabled: boolean,
  type: string,
  rows: number,
  wrapperStyle: string,
  description: string
}

 const InputField = ({
  name,
  id,
  className,
  label,
  value,
  error,
  changeHandler,
  helperText,
  isMultiline,
  isRequired,
  max,
  disabled,
  type,
  rows,
  wrapperStyle,
  description,
  ...rest
}: inputProps) => {
  return (
    <div className={`mb-3 ${wrapperStyle}`}>
    <label>{isRequired ? label + "*" : label} {description && <span className='font-10'>{description}</span>}</label>
    <TextField
      disabled={disabled}
      className={`my-0 ${className ? className : ""}`}
      name={name}
      id={id}
      type={type ? type : "text"}
      inputProps={{ maxLength: max ? max : isMultiline ? 500 : 50 }}
      variant="outlined"
      fullWidth
      value={value}
      error={error}
      helperText={error && helperText}
      onChange={changeHandler}
      multiline={isMultiline}
      // rows={isMultiline ? 3 : 1}
      rows={rows ? rows : 3}
      margin="dense"
      {...rest}
    />
    </div>
  );
};

export default InputField;