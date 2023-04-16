import {useState,useEffect} from 'react';

import { Typography, Box, styled } from "@mui/material";


const Header = styled(Box)`
padding:15px 24px;
background:#fff;
border-bottom:1px solid #f0f0f0;
`
const Heading = styled(Typography)`
color:#878787;`

const Container = styled(Box)`
padding:15px 24px;
background:#fff;
&>p{
  margin-bottom : 20px;
}
&>h6{
  margin-bottom:20px;
}
`;

const Price = styled(Box)`
float:right;
`
const Discount = styled(Typography)`

color:green;
font-weight:500;
`

const TotalBalance = ({ cartItems }) => {
  const [price,setPrice]= useState(0);
  // const [price]= useState(0);
  const [discount,setDiscount] = useState(0);
  // const [discount] = useState(0);

useEffect(()=>
{
  const totalAmount = ()=>{
    let price =0,discount =0;
    cartItems.map(item =>{
      price +=item.price.mrp;
      discount += (item.price.mrp - item.price.cost);
      return price;
    });
    
    setPrice(price);
    setDiscount(discount);

  }
  totalAmount();
},[cartItems]
);



  return (
    <Box>
      <Header>
        <Heading>Price Details</Heading>
      </Header>
      <Container>
        <Typography>price({cartItems?.length}item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>
        <Typography>Dilivery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <Typography variant ="h6">Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will Save ₹{discount-40} on this order</Discount>
      </Container>
      <Box>

      </Box>
    </Box>

  )
}

export default TotalBalance;