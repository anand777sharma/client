import {useEffect} from 'react';

// component
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import {Box ,styled} from '@mui/material';

import {getProducts} from '../../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux';


const Component =styled(Box)`
padding:10px 10px;
background:#F2F2F2;`


const Home = () => {

    const {products,error}=useSelector(state=>state.getProducts);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner/>
                <Slide products = {products||[]} title="Deal Of The Day" timer={true}/>
                <MidSlide products = {products} title="Discounts for You" timer={false}/>
                <Slide products = {products||[]} title="Suggesting Items" timer={false}/>
                <MidSection/>
                <Slide products = {products||[]} title="Top Selection" timer={false}/>
                <Slide products = {products||[]} title="Recommded Items"timer={false}/>
                <Slide products = {products||[]} title="Trending Offers"timer={false}/>
                <Slide products = {products||[]} title="Season's top Picks" timer={false}/>
                <Slide products = {products||[]} title="Top Deals onAccessories" timer={false}/>
            </Component>

        </>
    )
}

export default Home;