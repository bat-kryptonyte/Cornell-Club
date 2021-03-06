import React, { Component } from 'react';

export default  class Mission extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="mission">
         <div className="row">
            <div className="twelve columns">
              { 
                webData.mission && webData.mission.map((item)=>{
                  return(
                    <div key={item.specialization} className="row item">
                       <div align='center' className="twelve columns">
                       <h1><span>Mission</span></h1>
                          <br></br>
                          <p className="info">
                            {item.specialization}
                            <a href="https://sanmarinohs.myschoolcentral.com/asbworks/(S(fc1x52hcofp4jgixczskauy0))/apps/webstore/pages/WebStore.aspx?org=668"><br></br><br></br>Register for the 2021 AMC 10/12 (American Mathematic Competitions) here!</a>
                          </p>
                      

                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );
  }
}