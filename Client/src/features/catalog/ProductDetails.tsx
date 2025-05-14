import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/product";
import {
  Grid,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const productDetails = [
    {label: 'Name', value: product.name},
    {label: 'Description', value: product.description},
    {label: 'Type', value: product.type},
    {label: 'Brand', value: product.brand},
    {label: 'Stock', value: product.quantityInStock}
  ]

  return (
    <Paper sx={{ p: 4 }}>
      <Grid
      container
      spacing={4}
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ flexWrap: 'nowrap' }} // ensures side-by-side layout without wrapping
      >
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img
            src={product.pictureUrl}
            alt={product.name}
            style={{ width: "100%", borderRadius: 8}}
          />
        </Grid>

        {/* Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {product.name}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography
            variant="h4"
            fontWeight={600}
            color="text.secondary"
            gutterBottom
          >
            ₱{product.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
          </Typography>

          <TableContainer sx={{ mt: 2 }}>
            <Table>
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>{detail.label}:</TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                type="number"
                label="Quantity"
                fullWidth
                defaultValue={1}
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                size="large"
                variant="contained"
                fullWidth
                sx={{
                  height: "55px",
                  backgroundColor: "text.primary",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#333" },
                }}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

}


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import type { Product } from "../../app/models/product";
// import Grid from "@mui/material/Grid";
// import { Button, Divider, Table, TableBody, TableContainer, TextField, Typography } from "@mui/material";

// export default function ProductDetails() {

//   const {id} = useParams();
//   const [product, setProducts] = useState<Product | null>();

//   useEffect(() => {
//     fetch(https://localhost:5001/api/products/${id})
//         .then(response => response.json())
//         .then(data => setProducts(data))
//         .catch(error => console.log(error))
//   }, [] )

//   if(!product) return <div>Loading...</div>

//   return (
//     <Grid container spacing={6} maxWidth='lg' sx={{mx: 'auto'}}>
//       <Grid size={6}>
//         <img src={product?.pictureUrl} alt={product.name} />
//       </Grid>
//       <Grid size={6}>
//        <Typography
//           gutterBottom
//           variant="subtitle1"
//           fontWeight={600}
//           color="text.primary"
//         >
//           {product.name}
//         </Typography>
//         <Divider sx={{mb: 2}} />
//         <Typography
//           variant="h6"
//           fontWeight="bold"
//           color="text.secondary"
//         >
//           ₱{product.price.toFixed(2)}
//         </Typography>
//         <TableContainer>
//           <Table>
//             <TableBody>
//               Table goes here
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Grid container spacing={2} marginTop={3}>
//           <Grid size={6}>
//               <TextField 
//                   variant="outlined"
//                   type="number"
//                   label='Quantity'
//                   fullWidth
//                   defaultValue={1}/>
//           </Grid>       
//           <Grid size={6}>
//             <Button
//               color="primary"
//               size="large"
//               variant="contained"
//               fullWidth
//               >Add to Cart
//             </Button>
//           </Grid> 
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }