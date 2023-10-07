import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import BlackDownArrow from "@/src/assets/svg/BlackDownArrow";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Accordion.module.scss";
const cx = createModuleStyleExtractor(styles);

export default function SimpleAccordion() {
  return (
    <div className={cx("accordion")}>
      <Accordion>
        <AccordionSummary
          expandIcon={<BlackDownArrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>More Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desirable neighborhood, great curb appeal and excellent location in
            Pine Grove! This 3 bedroom, 2 bath, 1440 sq. ft. home is an awesome
            starter home or income producing investment property! Vaulted, wood
            ceilings greet you at entry, alongside a lovely living room hearth
            and pellet stove. Galley style kitchen offers stunning granite
            countertops and opens up to the dining area where you can step out
            to the deck while overlooking the property. Downstairs is a
            spacious, 2-room master bedroom with an office/sitting area. These
            private areas have its own wood stove, full bath and walk-in closet
            plus storage! Sizable 2-car detached garage offers more space for
            tools and extra storage. Updates include newly built deck and French
            drainage. Close to popular destinations such as Kirkwood Ski Resort
            (45 mins) and just over an hour to South Lake Tahoe! Seller is
            offering a $5000.00 credit to go towards new interior paint, carpet,
            or a rate buy-down
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BlackDownArrow />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Property History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desirable neighborhood, great curb appeal and excellent location in
            Pine Grove! This 3 bedroom, 2 bath, 1440 sq. ft. home is an awesome
            starter home or income producing investment property! Vaulted, wood
            ceilings greet you at entry, alongside a lovely living room hearth
            and pellet stove. Galley style kitchen offers stunning granite
            countertops and opens up to the dining area where you can step out
            to the deck while overlooking the property. Downstairs is a
            spacious, 2-room master bedroom with an office/sitting area. These
            private areas have its own wood stove, full bath and walk-in closet
            plus storage! Sizable 2-car detached garage offers more space for
            tools and extra storage. Updates include newly built deck and French
            drainage. Close to popular destinations such as Kirkwood Ski Resort
            (45 mins) and just over an hour to South Lake Tahoe! Seller is
            offering a $5000.00 credit to go towards new interior paint, carpet,
            or a rate buy-down
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BlackDownArrow />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Monthly Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desirable neighborhood, great curb appeal and excellent location in
            Pine Grove! This 3 bedroom, 2 bath, 1440 sq. ft. home is an awesome
            starter home or income producing investment property! Vaulted, wood
            ceilings greet you at entry, alongside a lovely living room hearth
            and pellet stove. Galley style kitchen offers stunning granite
            countertops and opens up to the dining area where you can step out
            to the deck while overlooking the property. Downstairs is a
            spacious, 2-room master bedroom with an office/sitting area. These
            private areas have its own wood stove, full bath and walk-in closet
            plus storage! Sizable 2-car detached garage offers more space for
            tools and extra storage. Updates include newly built deck and French
            drainage. Close to popular destinations such as Kirkwood Ski Resort
            (45 mins) and just over an hour to South Lake Tahoe! Seller is
            offering a $5000.00 credit to go towards new interior paint, carpet,
            or a rate buy-down
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BlackDownArrow />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Neighbourhood</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desirable neighborhood, great curb appeal and excellent location in
            Pine Grove! This 3 bedroom, 2 bath, 1440 sq. ft. home is an awesome
            starter home or income producing investment property! Vaulted, wood
            ceilings greet you at entry, alongside a lovely living room hearth
            and pellet stove. Galley style kitchen offers stunning granite
            countertops and opens up to the dining area where you can step out
            to the deck while overlooking the property. Downstairs is a
            spacious, 2-room master bedroom with an office/sitting area. These
            private areas have its own wood stove, full bath and walk-in closet
            plus storage! Sizable 2-car detached garage offers more space for
            tools and extra storage. Updates include newly built deck and French
            drainage. Close to popular destinations such as Kirkwood Ski Resort
            (45 mins) and just over an hour to South Lake Tahoe! Seller is
            offering a $5000.00 credit to go towards new interior paint, carpet,
            or a rate buy-down
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<BlackDownArrow />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Environment Risk</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Desirable neighborhood, great curb appeal and excellent location in
            Pine Grove! This 3 bedroom, 2 bath, 1440 sq. ft. home is an awesome
            starter home or income producing investment property! Vaulted, wood
            ceilings greet you at entry, alongside a lovely living room hearth
            and pellet stove. Galley style kitchen offers stunning granite
            countertops and opens up to the dining area where you can step out
            to the deck while overlooking the property. Downstairs is a
            spacious, 2-room master bedroom with an office/sitting area. These
            private areas have its own wood stove, full bath and walk-in closet
            plus storage! Sizable 2-car detached garage offers more space for
            tools and extra storage. Updates include newly built deck and French
            drainage. Close to popular destinations such as Kirkwood Ski Resort
            (45 mins) and just over an hour to South Lake Tahoe! Seller is
            offering a $5000.00 credit to go towards new interior paint, carpet,
            or a rate buy-down
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
