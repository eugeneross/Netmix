import React from 'react';

import TextField from 'material-ui/TextField';

const styles = {
  floatingLabelStyle: {
    fontSize: '10px',
    fontFamily: 'Open Sans',
  },
  errorStyle: {
    textAlign: 'left',
    fontFamily: 'Open Sans',
  },
  hintStyle: {
    fontFamily: 'OpenSans',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#d9d9d9',
    fontFamily: 'Open Sans',
  },
  underlineFocusStyle:{
    border: 'solid 0.4px #d9d9d9',
    borderColor: '#d9d9d9',
  },
  underlineStyle: {
    border: 'solid 0.4px #d9d9d9',
    borderColor: '#d9d9d9',
  },
  floatingLabelFocusStyle: {
    color: '#212121',
    fontFamily: 'Open Sans',
  },
  floatingLabelStyle:{
    color: '#212121',
    fontSize: '12px',
    fontFamily: 'Open Sans',
  }
}


const InputField = props => {
  const { onChange, onFocus, type, name, value, label, errorText, errorName, hintText } = props;
  return (
    <div>
      <TextField
        floatingLabelText={label}
        hintText={props.hintText}
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFixed={true}
        onChange={val => onChange(name, val.target.value, errorName)}
        onFocus={onFocus}
        errorText={errorText}
        errorStyle={styles.errorStyle}
        type={type}
        fullWidth={true}
        hintStyle={styles.hintStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelStyle={styles.floatingLabelStyle}
        underlineStyle={styles.underlineStyle}
      /><br />
    </div>
  )
};

export default InputField;

