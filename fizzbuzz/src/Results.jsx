import React from 'react';

function Results(props) {

  const results = [];
  for (let i = 1; i <= props.props.upperLimit; i++){
    let string =""
    for (let condition in props.props.conditionals){
      if (i % condition === 0) {
        string += props.props.conditionals[condition];
      }
    }
    !string ? results.push(i) : results.push(string);

  }
  //console.log(results)
  let list = results.map((filtereNumber, index) => (
    <p>{filtereNumber}</p>
  ));

     return (
     <div className="results" data-testid="html-element" id="results">
        {list}
     </div>)

}
export default Results;