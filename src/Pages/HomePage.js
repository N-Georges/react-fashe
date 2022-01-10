// import React from 'react';
// import { Box } from '@mui/system';
// import BannerHome from '../components/Banner/BannerHome';
// import CardComingSoon from '../components/CardComingSoon';
// import CardProductHome from '../components/CardProductHome';
// import ProductCardHome from '../components/ProductCardHome';
// import BannerVideoHome from '../components/BannerVideoHome';
// import Data from  '../Data'
// import { useNavigate } from 'react-router-dom';



// const HomePage = () => {
//     // const [data, setData] = useState([])
//     // const [panier, setPanier] = useState()
//     const navigate = useNavigate()

//     // const BuyArticle1 = () => {
//     //     // let copieArticle = Data
//     //     // let copiePanier = panier
//     //     // copiePanier.push(copieArticle[i])
//     //     // setPanier(copiePanier)
//     //     // setData(copieArticle)
//     //     // console.log(Data[i]);
//     //     // console.log(panier);
//     //     console.log('achat effectuer');

//     // }
//     // eslint-disable-next-line
//     // let DataCopy = data 
//     const handlebtns=(e)=>{
//         console.log(e.target.value);
//     }

//     const DetailArticle =(e) => {
//         navigate(`/product/${e.subTitle}`)
//     }
//     return (
//         <div>
//             <BannerHome/>
//             <CardComingSoon/>
//             <ProductCardHome
//                handleOnClick={handlebtns}
//             />
//             <Box sx={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap',
//                     '& > :not(style)': {
//                         m: 1,
//                         width: 193,
//                         height: 228,
//                         marginBottom: 20 
//                     }
//             }}>
//             {Data.map((item, index) => {
//                 return  (
//                     <CardProductHome
//                         onClickDetail={()=> DetailArticle(item)}
//                         key={index}
//                         picture={item.picture}
//                         subTitle={item.subTitle}
//                         price={item.price}
//                         tag={item.tag}
//                     />
//                 )
//             })}
//             {/* {Data.filter(tag => tag === 'new').map((item, index) => {
//                 return(
//                     <CardProductHome
//                         onBuyArticle={() => BuyArticle(index)}
//                         key={index}
//                         picture={item.picture}
//                         subTitle={item.subTitle}
//                         price={item.price}
//                         tag={item.tag}
//                     />
//                 )
//             })} */}
//             </Box>
//             <BannerVideoHome/>
//         </div>
//     );
// };

// export default HomePage;
import React, { useState } from 'react';
import { Box } from '@mui/system';
import BannerHome from '../components/Banner/BannerHome';
import CardComingSoon from '../components/CardComingSoon';
import CardProductHome from '../components/CardProductHome';
import ProductCardHome from '../components/ProductCardHome';
import BannerVideoHome from '../components/BannerVideoHome';
import Data from  '../Data'
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
    // const [data, setData] = useState([])
    // const [panier, setPanier] = useState()
    const navigate = useNavigate()
    let bestseller = Data.slice(0, 4)
    console.log(bestseller);
    let [filter, setFilter] = useState(bestseller)
    let [product_details, setProduct_details] = useState([])
    // const BuyArticle1 = () => {
    //     // let copieArticle = Data
    //     // let copiePanier = panier
    //     // copiePanier.push(copieArticle[i])
    //     // setPanier(copiePanier)
    //     // setData(copieArticle)
    //     // console.log(Data[i]);
    //     // console.log(panier);
    //     console.log('achat effectuer');

    // }
    // eslint-disable-next-line
    // let DataCopy = data 



    const handlebtns=(e)=>{
        let result =  Data.filter(el => el.tag === e.target.value)
        console.log(result);
        setFilter(result)
    }
    console.log(filter);


    const DetailArticle =(e) => {
        navigate(`/product/${e.subTitle}`)
        setProduct_details(e)
        console.log(product_details);
        console.log(e);

    }
    // console.log(test)
    return (
        <div>
            <BannerHome/>
            <CardComingSoon/>
            <ProductCardHome
               handleOnClick={handlebtns}
            />
            <Box sx={{ display: 'flex', justifyContent:'center', flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 193,
                        height: 228,
                        marginBottom: 20 
                    }
            }}>            
            {filter.map( (item,index) => {
                return ( 
                    <CardProductHome
                    // onBuyArticle={() => BuyArticle(index)}
                    onClickDetail={() => DetailArticle(item)}
                    key={index}
                    picture={item.picture}
                    subTitle={item.subTitle}
                    price={item.price}
                    tag={item.tag}
                />
                )
            })}
       
            </Box>
            <BannerVideoHome/>
        </div>
    );
};

export default HomePage;