import { Paper, Stack } from "@mui/material";
import "./home.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Home = (props) => {
  return (
    <div>
      <Stack direction="column" justifyContent="center">
        <Paper elevation={6}>
          <div className="inner-search-form">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="oneWay"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="oneWay"
                  control={<Radio />}
                  label="One Way"
                />
                <FormControlLabel
                  value="roundTrip"
                  control={<Radio />}
                  label="Round Way"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Paper>

        <div>Recommendations</div>
      </Stack>
    </div>
  );
};
export default Home;
