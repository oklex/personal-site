import React from 'react'
import './ExperienceCard.scss'

interface IExperienceCardProps {
    id?: number
    dateDetails: string
    jobTitle: string
    jobType?: string
    CompanyName?: string
}

class ExperienceCard extends React.Component<IExperienceCardProps,{}> {
    showMetaInfo = () => {
        var metaString = ''
        if (this.props.jobType) metaString = this.props.jobType
        if (this.props.CompanyName) metaString += this.props.CompanyName
        return <h4>{metaString}</h4>
    }

    showLightBox = () => {
        console.log('imagine a lightbox here')
    }
    
    render() {
        return (
            <div className='exp-card' onClick={() => this.showLightBox()}>
                <h3>{this.props.dateDetails}</h3>
                <h1>{this.props.jobTitle}</h1>
                {this.showMetaInfo()}
            </div>
        )
    }
}

export default ExperienceCard