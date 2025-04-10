
import Slider from "react-slick";
import Rating from './Ratings'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css"

const reviews = [
    {
      title: "Best Korean Realtor in Cresskill, NJ",
      text: "Simon is by far the best agent out there! As a first-time home buyer during the pandemic, he was nothing...",
      name: "Scott S",
      rating: 4,
    },
    {
      title: "뉴저지한인 부동산 최고 리얼터",
      text: "I sold my duplex home in Palisades Park through Simon Kim. Although my home was located in an unfavorable...",
      name: "John Kim",
      rating: 3,
    },
    {
      title: "Best Realtor in New Jersey",
      text: "Simon Kim is the best realtor in the industry. I bought a condo from Simon in Fort Lee in November,...",
      name: "Michael Cong",
      rating: 5,
    },
    {
      title: "Best Realtor in Old Tappan, NJ",
      text: "We closed on our new house in Old Tappan. NJ a few months ago. We had very limited knowledge around...",
      name: "O.T.O",
      rating: 5,
    },
  ];

function Reviews(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return(
        <div className="Slider-Container">
          <h1 className="Client-Reviews">
            Client Reviews
          </h1>
          <Slider {...settings}>
            {reviews.map((review) => (
              <div className="Review-Container">
                <h1 className="Review-Title">{review.title}</h1>
                <p className="Review-Text">
                  {review.text}
                </p>
                <div className="Review-Rating">
                  <Rating ratings={review.rating}></Rating>
                </div>
                <div className="Review-Name">
                  {review.name}
                </div>
              </div>
            ))}         
          </Slider>
        </div>
        
    );
};

export default Reviews;

{/* <Container className="Review-Container">
        <h2>Client Reviews</h2>
        <Row>
            <Slider {...settings}>
            {reviews.map((review, index) => (
                <Card key={index} className="Review-Card">
                    <Card.Img src={img} className="Review-Card-Image"></Card.Img>
                    <Card.Body>
                        <Card.Title>
                            {review.title}
                        </Card.Title>
                        <Card.Text>
                            {review.text}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                ))}
            </Slider>
        </Row>
        
        </Container> */}