import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Colorchange from "./colorchange";

function Dropdown() {
    const [Color, setColor] = React.useState("");

    const handleChange = (event) => {
        setColor(event.target.value);
    };
    console.log(Color);
    return (
        
          <body style={{backgroundColor:'pink'}}>
            <h1 style={{textAlign:'centre'}}>Color Changer</h1>
            <Container minWidth="sm" className="container" style={{padding:'12px'}}>
                
                <Box sx={{ width: 200 }}>
                    <FormControl fullWidth >
                        <InputLabel id="demo-simple-select-label" style={{backgroudColor:'red'}}>Color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Color}
                            label="Color"
                            onChange={handleChange}
                        >
                            <MenuItem value={"lime"}>Lime</MenuItem>
                            <MenuItem value={"lavender"}>Lavender</MenuItem>
                            <MenuItem value={"crimson"}>Crimson</MenuItem>
                            <MenuItem value={"darkblue"}>Darkblue</MenuItem>
                            <MenuItem value={"Teal"}>Teal</MenuItem>
                            <MenuItem value={"rebeccapurple"}>Rebecca Purple</MenuItem>
                            <MenuItem value={"ghostwhite"}>Ghost White</MenuItem>
                            <MenuItem value={"aquamarine"}>Aqua Marine</MenuItem>
                            <MenuItem value={"aliceblue"}>Alice Blue</MenuItem>
                        </Select>
                    </FormControl>
                </Box><br/>
                <Colorchange bg={Color} />
            </Container>
            </body> 
        
    );
}
export default Dropdown
