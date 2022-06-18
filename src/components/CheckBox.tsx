import React, { useState } from 'react'
import styled from 'styled-components'
const StyledCheckBox = styled.div<{checked:boolean}>`
    color: green;
    border: 1px solid ${props => props.checked ? '#0080006a' : '#91919136'};
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font-size: inherit;
    user-select: none;
`
const CheckBox = ({checked,onClick}: {checked:boolean, onClick: () => void}) => {
  return (
    <StyledCheckBox checked = {checked} onClick={onClick}>
        {checked && '✔'}
    </StyledCheckBox>
  )
}

export default CheckBox