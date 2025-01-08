import React from "react";
import { Box, Typography, Container, Rating, Avatar } from "@mui/material";
import "./TestimonialSection.scss";

import client1 from "../../../assets/clients/client1.png";
import client2 from "../../../assets/clients/client2.png";
import client3 from "../../../assets/clients/client3.png";

export default function TestimonialSection() {
  return (
    <Box className="section__testimonials">
      <Container>
        <Typography variant="h4" color="#0B254B" fontWeight="bold" className="title">Témoignages</Typography>
        <Typography variant="body1" color="#5E6E89" paragraph className="subtitle">
            Quelques citations de nos clients satisfaits
        </Typography>
        <Box className="testimonials__container">
          <Box className="testimonial__card">
            <Avatar alt="Client 1" src={client1} sx={{ width: 80, height: 80 }} />
            <Box className="testimonial__content">
              <Rating name="read-only" value={5} readOnly />
              <Typography variant="body1" color="black" paragraph>
                "J'adore cette bougie ! L'odeur est incroyable et elle dure longtemps. Je la recommande à 100%."
              </Typography>
              <Typography variant="subtitle1" color="black"> Alice Dupont </Typography>
            </Box>
          </Box>
          <Box className="testimonial__card">
            <Avatar alt="Client 2" src={client2} sx={{ width: 80, height: 80 }} />
            <Box className="testimonial__content">
              <Rating name="read-only" value={4} readOnly />
              <Typography variant="body1" color="black" paragraph>
                "Très bonne qualité et service rapide. La bougie est bien parfumée et se consume lentement."
              </Typography>
              <Typography variant="subtitle1" color="black"> Marc Lefevre </Typography>
            </Box>
          </Box>
          <Box className="testimonial__card">
            <Avatar alt="Client 3" src={client3} sx={{ width: 80, height: 80 }} />
            <Box className="testimonial__content">
              <Rating name="read-only" value={5} readOnly />
              <Typography variant="body1" color="black" paragraph>
                "Une bougie de qualité supérieure avec une belle ambiance. Parfaite pour offrir ou pour soi-même."
              </Typography>
              <Typography variant="subtitle1" color="black"> Sophie Martin </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
