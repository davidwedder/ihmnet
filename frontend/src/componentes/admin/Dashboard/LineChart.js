import React,{useState,useEffect} from "react";
import  Chart  from "react-apexcharts";
import { useApi } from '../../../hooks/useApi';




function LineChart(){ 

   
      const [getDatayear, setDatayear] = useState([]);
      const [getDataAmp, setDataAmp]  = useState([]);

      const getAmp = [];
      const getYear = [];


      const {data} =  useApi(`/devices/detalhes/6695bb5df2930a01ae4c8063`)
      {data?.message?.medidas?.map(med =>{
       return(<tr>
            
                    
             </tr>)

            })}

    return(
    <React.Fragment>
      
        <div className="container-fluid mb-3 mt-3">    
        <h2>{data?.message?.nome}</h2>
       
       <Chart 
       
       type="area"
       width={400}
       height={250}

       series={[
              {   name:"Commits",
                  data:[345,27,121,676,98,321]
              }
       ]}
     
       options={ {
        

        colors:['#471269'],
        stroke: {width:3, curve:'smooth'},
       
      
      xaxis:{
         
           categories:[2024,2024,2024,2024,2024,2024]
         },
      yaxis:{
       
      }
       }}          
       >
        
       </Chart>
      
        </div>
    </React.Fragment>
    );
}
export default LineChart;