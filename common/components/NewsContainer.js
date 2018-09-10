import React from 'react'
import PropTypes from 'prop-types'

function NewsContainer({news}) {
    return (
                <div>
                    { news.news.map( ( { title, url, description, urlToImage, publishedAt }, indx ) => (
                        <div className="col-md-6 card" key={indx}>
                             <div className="row card-header mt-2 mr-1 mb-2 ml-1">
                                 <div className="col-md-12">
                                    <div>
                                        <h5 id="title"><a href={url}>{title}</a></h5>
                                         <p className="pb-1" id="description">{description}</p>
                                         <span className="font-italic">{publishedAt}</span>                
                                     </div>        
                                 </div>
                            </div>            
                         </div>
                      ) ) 
                    }
                </div>
    )
}

NewsContainer.propTypes = {
  news: PropTypes.object.isRequired,
}

export default NewsContainer;



