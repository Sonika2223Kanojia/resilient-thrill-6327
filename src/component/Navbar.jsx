import { Link } from "react-router-dom";
import { Image , HStack, Box, Button} from '@chakra-ui/react';
import  logo from '../Images/logo.ico'
const  Navbar =()=>{

    return (
        <>

          <HStack width="100%" height="90px">
            <Box width="20%"  display="flex"
            justifyContent="center" >
              <Link to="/">
          <Box width="200px"  >
            <Image src={logo} width="100%"  />
          </Box>
              </Link>
            </Box>
            <Box width="40%"  display="flex"
            justifyContent="space-around"
            alignItems="center"
             fontSize="18px"
             fontWeight="600"
          >

          <Link to="/">
            Trending Platforms
          </Link>
          <Link to="tech">
            Technology
          </Link>
          <Link to="/">
            News
          </Link>
          <Link to="/">
            Company
          </Link>
            </Box>
            <Box width="40%"  display="flex"
            justifyContent="center"
            alignItems="center"
          
            >
           <Box width="70%" 
              fontSize="18px"
              fontWeight="600"
             display="flex"
             alignItems="center"
              justifyContent="space-around">
          <Link to="/" >
            Contact Us
          </Link>
           <Button width="50%" height="30px"  backgroundColor="#01c087">Demo</Button>
           </Box>
            </Box>


          </HStack>
        </>
    )
}

export default Navbar;