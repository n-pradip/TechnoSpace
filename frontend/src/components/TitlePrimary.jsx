import React from 'react'
import '../styles/component/TitlePrimary.css'

const TitlePrimary = (props) => {
    return (
        <p className='custom_title_primary'>{props.title}<span className="text_primary_highlight">{props.highlight_title}</span></p>
    )
}

export default TitlePrimary