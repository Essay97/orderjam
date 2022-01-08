import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import Stack from "@mui/material/Stack";
import WeightIcon from "@mui/icons-material/FitnessCenter";
import EuroIcon from "@mui/icons-material/EuroSymbol";
import AnimatedShowMore from "react-animated-show-more";

const styles = {
  card: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
  },
  content: {
    display: {
      xs: "flex",
      sm: "grid",
    },
    gridTemplateColumns: "4fr 1fr",
    flexGrow: 1,
    flexDirection: "column",
  },
  photo: {
    maxWidth: 300,
    objectFit: "contain",
  },
};

function LabelIcon({ label, icon }) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {icon}
      <Typography variant="label" color="secondary">
        {label}
      </Typography>
    </Stack>
  );
}

export default function ProductCard({
  imgUrl,
  title,
  description,
  weight,
  price,
  marginBottom,
}) {
  return (
    <Card sx={{ ...styles.card, marginBottom }} variant="outlined">
      <CardMedia component="img" image={imgUrl} sx={styles.photo} />
      <CardContent sx={styles.content}>
        <Box>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            {title}
          </Typography>
          <AnimatedShowMore
            height={93}
            toggle={({ isOpen }) =>
              isOpen ? (
                <Typography variant="button" color="secondary">
                  Show less
                </Typography>
              ) : (
                <Typography variant="button" color="primary">
                  Show more
                </Typography>
              )
            }
          >
            <Typography>{description}</Typography>
          </AnimatedShowMore>
        </Box>
        <Stack
          direction="row"
          gap={8}
          gridColumn={1}
          gridRow={2}
          marginTop={2}
          marginBottom={{ xs: 2, sm: 0 }}
        >
          <Box>
            <LabelIcon icon={<WeightIcon color="secondary" />} label="Weight" />
            <Typography variant="h3" fontWeight={100}>
              {weight} kg
            </Typography>
          </Box>
          <Box>
            <LabelIcon icon={<EuroIcon color="secondary" />} label="Price" />
            <Typography variant="h3" fontWeight={100}>
              {price.toFixed(2)} €
            </Typography>
          </Box>
        </Stack>
        <Box
          gridColumn={2}
          gridRow="1 / 3"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained">Add to cart</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
