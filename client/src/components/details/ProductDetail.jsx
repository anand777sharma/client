
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
&>p{
    font-size:14px;
    margin-top:10px;
}
`;

const StyledBadge = styled(Badge)`
margin-right:10px;
color:#00cc00;
font-size:20px;
`;
 const ColumnText = styled(TableRow)`
 font-size:14px;
 vertical-align:baseline;
 &>td{
    font-size:14px;
    margin-top:10px;
    border:none;
 }
 `


const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (
        <>
            <Typography>{product.title.longTitle} </Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="fassured" /></Box>
            </Typography>

            <Typography>
                <Box component="span" style={{ fontSize: 20 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388e3c' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1500, on orders of ₹5,000 and above T&C </Typography>
                <Typography> <StyledBadge />Bank Offer10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and aboveT&C</Typography>
                <Typography> <StyledBadge />Bank Offer10% off on Yes Bank Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹10,000 and aboveT&C</Typography>
                <Typography> <StyledBadge />Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C</Typography>
                <Typography> <StyledBadge />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* </Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} > Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}> Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} >Warranty</TableCell>
                        <TableCell > No Warranty</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} >Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                            <Typography> GST invoice available </Typography>
                            <Typography> view more sellers starting from ₹{product.price.cost}</Typography>

                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan ={2}>
                            <img src={adURL} style={{width:390}} alt="flipCartPoints" />
                            </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }} >Description</TableCell>
                        <TableCell >{product.description} </TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;