import React from 'react'

const Swaure = ({colorValue}) => {
  return (
    <section
    className='square'
    style={{backgroundColor: colorValue}}
    >
        <p>{colorValue ? colorValue: "Empty Color"}</p>
    </section>
  )
}
Swaure.defaultProps = {
    colorValue : "Empty Color Value"
}
export default Swaure