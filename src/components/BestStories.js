import React from 'react'
import Stories from './Stories'

function BestStories(props) {
    const [url,stories] = Stories('best')

    return (
        <div>
            <ul style={{color:"gray"}}>
            {  stories.map((item) => {
                    return (
                        <li className="m-1" key={item.id}>
                            <a href = {item.url} style={{color:"gray"}}>{item.title}</a>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default BestStories
