import React from 'react'
import { workshopData } from './workshopData'
import { useParams } from 'react-router-dom';
export default function WorkshopTemplate() {
    const params = useParams();
  return (
    <div>
    
      <div className="stock-container">
        
            
             <h1>{params.workName}</h1>
             {/* <h2>{workshopData.main.dataMain}</h2> */}
             {
                workshopData.map((e) =>{
                    if(e.workName === params.workName){
                        return <h3>
                            {e.main.dataMain}
                        </h3>
                    }
                })
             }


            </div>
        
       
      </div>
    


   
  )
}
