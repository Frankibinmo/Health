import React from "react";
import { nidle1, nidle2, nidle3 } from "../assets";





const TestArticle = () => {
    const ArticleImages = [
        {
            id: 0,
            image: nidle1,
            heading:       "Desease detection, chek up in the laboratory",
            paragraph: "In this case, the role of the health laboratory is very important to do a disease detection"
        },
        {
            id: 1,
            image: nidle2,
            heading: "Herbal medicines that are safe for consumption",
            paragraph:  "Herbal medicine is very widely used at this time because of its very good for your health"
        },
        {
            id: 2,
            image: nidle3,
            heading: "Natural care for healthy facial skin",
            paragraph:"A healthy lifestyle should start from now and also for your skin health.There are some"
        },
    ]


    const displayImages = ArticleImages.map((item) =>
        <div className="col-sm-12 col-md-12 col-lg-4" key={item.id}>
            <div className="my-imgcode" style={{}}>
               <div className="my-imgcode">
                {
                   <img src={item.image} alt="" className='w-25'/>
                }
               </div>
               <div className="myCard-body">
                   <h5 className=''><b>{item.heading}</b></h5>
                   <p style={{}}>{item.paragraph}</p>
               </div>
           </div>
        </div> 
    
        )
      return (
        <React.Fragment>
           {displayImages}
        </React.Fragment>
      )

}

export default TestArticle;
    