import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { Product } from "../../app/models/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        width: 280,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: theme.shadows[3],
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 240,
          objectFit: "contain",
          backgroundColor: "#f1f3f4", // light Google-gray
          p: 1.5,
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          fontWeight={600}
          color="text.primary"
        >
          {product.name}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.secondary"
        >
          ₱{product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<ShoppingCartIcon />}
          color="gray" // from your theme
          sx={{
            textTransform: "none",
            fontWeight: 500,
            px: 2,
            py: 0.5,
            fontSize: '0.8rem',
          }}
        >
          Add to Cart
        </Button>
        <Button
            variant="contained"
            size="small"
            color="gray"
            endIcon={<VisibilityIcon />}
            sx={{
                textTransform: "none",
                fontWeight: 500,
                px: 2,
                py: 0.5,
                fontSize: '0.8rem',
            }}
            >
            View
        </Button>
      </CardActions>
    </Card>
  );
}
