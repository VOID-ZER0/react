// function Card(props){
//     console.log(props.user);

//     return(
//     <div className="cardz">
//         <img src="https://images.unsplash.com/photo-1762236096060-964c4acb6700?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"></img>
//         <h1>Skylit Corp.</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//         <button className="btn">View Profile</button>
//     </div>
//     )
// }
// export default Card;

import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log(props.Company);
  

  return (

    <div className="card">
      <div>

        <div className="top">
          <img
            src={props.brandLogo}
          />
          <button>
            Save <Bookmark size={12} />{" "}
          </button>
        </div>
        <div className="center">
          <h3>
            {props.Company} <span> {props.datePosted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply now </button>
      </div>
    </div>
  );
};

export default Card;
