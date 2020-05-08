import React from 'react'

function ProjectDetail(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth">
                <div className="card-content">
                    <span className="card-title ">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptates provident incidunt, aliquid architecto aspernatur iusto facilis fugiat, mollitia enim facere exercitationem autem veritatis? Perferendis dicta sint voluptatum ex delectus.</p>
                </div>
                <div className="card-action gret lighten-3 grey-text">
                    <div>Posted by Johnnie Codes</div>
                    <div>Date:TimeStamp</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
