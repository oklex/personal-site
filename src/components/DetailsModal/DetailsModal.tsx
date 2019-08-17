import React from 'react'
import './DetailsModal.scss'
import backIcon from "../../img/back-link.svg";

interface IDetailsModalProps {
    show: boolean
    titleSection: JSX.Element
    content: JSX.Element
}

/*
I got a bit ahead of myself to build this in the wrong order
I should have built out hte data flow first
buildign a prototpye using the console log
*/

class DetailsModal extends React.Component<IDetailsModalProps,{}> {
    showModal=()=>{
        if (this.props.show) {
            return (<div id='modal'>
                <p>show</p>
            </div>)
        } else {
            return <div id='modal'/>
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default DetailsModal