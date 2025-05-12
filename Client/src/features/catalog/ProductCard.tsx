import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { Product } from "../../app/models/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={4}
      sx={{
        width: 280,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)"
        }
      }}
    >
      <CardMedia
        sx={{
          height: 240,
          backgroundSize: 'cover',
          backgroundColor: "#f5f5f5"
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          fontWeight="bold"
          color="text.primary"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="secondary"
        >
          ₱{product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          size="small"
          endIcon={<VisibilityIcon />}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}





// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
// import type { Product } from "../../app/models/product"

// type Props = {
//   product: Product
// }

// export default function ProductCard({product}: Props) {
//   return (
//     <Card 
//         elevation={3}  
//         sx={{
//             width: 280,
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between'
//         }}
//     >
       
//         <CardMedia 
//             sx={{height: 240, backgroudSize: 'cover'}}
//             image={product.pictureUrl}
//             title={product.name}
//         />
//         <CardContent>
//             <Typography 
//                 gutterBottom 
//                 sx={{color: 'secondary.main'}}
//                 variant="subtitle2">
//                     {product.name}
//             </Typography>
//             <Typography
//                 variant="h6"
//                 sx={{color: 'secondary.main'}}
//             >
//                 ₱{(product.price).toFixed(2)}
//             </Typography>
//         </CardContent>
//         <CardActions
//             sx={{justifyContent: 'space-between'}}       
//         >
//             <Button>Add to Cart</Button>
//             <Button>View</Button>
//         </CardActions>
//     </Card>
//   )
// }