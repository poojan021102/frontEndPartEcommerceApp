import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../components/Product';
export default function ProductCarousel({ data }){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          paritialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          paritialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          paritialVisibilityGutter: 30
        }
      };
    return (
        <>
            <Carousel partialVisbile = {true} autoPlay = {true} autoPlaySpeed = {3000} infinite = {true} paritialVisibile='right' className='m-3' responsive={responsive} draggable = {true} swipeable = {true}>
            {
                    data.map((item,index)=>{
                        return <Product key = {index} id = {item.id} imageLink = {item.thumbnail} title = {item.title} price={item.price} ratings={Math.round(item.rating)}/>
                    })
                }
            </Carousel>
        </>
    );
}