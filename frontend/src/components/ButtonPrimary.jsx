import React from 'react'

const ButtonPrimary = (props) => {
    return (
        <div>
            <button type="submit"
                className="inline-flex items-center rounded py-2 px-4 text-sm font-medium text-center text-white bg-[#07174D]">
                {props.text}
            </button>
        </div>
    )
}

export default ButtonPrimary