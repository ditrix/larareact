import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


export const QuestionDropdown = content => {
    return(
        <div className="dropdown">
            <FontAwesomeIcon className="question-ico" icon={faQuestionCircle} size="lg" color="#1fb6ff" />
            <div class="dropdown-content">
                <p>{content}</p>
            </div>
        </div>
    )
}