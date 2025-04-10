import img from "../assets/react.svg";

interface RatingProps {
    ratings: number; // Explicitly defining 'ratings' as a number
  }

function Rating({ratings}: RatingProps){
    let final_rating = [];
    for (let i = 0; i <= ratings; i++){
        final_rating.push(<img key={i} src={img}></img>);
    }

    return (<div style={{ display: "flex", gap: "4px", justifyContent: 'center'}}>{final_rating}</div>);
}

export default Rating;