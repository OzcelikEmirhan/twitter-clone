import classNames from "classnames"
import { createElement } from "react"
import PropTypes from "prop-types"

export default function Button({size,children}){
    
    return  createElement('button' , {
        className: classNames("bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold text-[17px] hover:bg-[#1a8cd8] transition-colors", {
            "px-4 h-9" : size==="normal",
            "px-4 font-[17px] h-[52px] w-full" : size==="large",
        })
    }, children)
}


Button.propTypes = {
    size: PropTypes.oneOf(["large", "normal"])
}

Button.defaultProps = {
    size: "normal"
}