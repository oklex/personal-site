import React from 'react'

interface IExperienceCardProps {
    id?: number
    dateDetails: string
    expTitle: string
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
                <h1>{this.props.expTitle}</h1>
                {this.showMetaInfo()}
            </div>
        )
    }
}

export default ExperienceCard