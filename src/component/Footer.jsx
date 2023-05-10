import {Box, Heading, SimpleGrid, Input,Image, Text
} from "@chakra-ui/react"
const Footer=()=>{
return (
    <>
      <Box width="100%" height="450px" 
       display="flex" flexDirection="column" justifyContent="center"
         bg="#34365a" >
    <Heading  fontWeight="600"  marginBottom="30px">Explore Our Library</Heading>
    <SimpleGrid width="80%"  margin="0px auto"
    columns={2} spacing={100}  >
       <Box height="300px"  display="flex" 
       justifyContent="center"  >
        <Box width="40%" >
            <Image src="https://dx.trade/wp-content/uploads/2022/06/380x538-cover-forex-ebook-180x255.jpg"></Image>
        </Box>
        <Box width="60%">
            <Heading width="70%" fontSize={22} textAlign="left">Order Sweeping Algorithms in Forex Trading</Heading>
            <Text  textAlign="left" width="90%" fontSize={15}>Part 2. A behind the scenes look at broker operations related to liquidity management and liquidity flows in  the Forex market.</Text>
           </Box>
         </Box>
         <Box height="300px"  display="flex" 
       justifyContent="center"  >
        <Box width="40%" >
            <Image src="https://dx.trade/wp-content/uploads/2021/06/feature_book_1.png"></Image>
        </Box>
        <Box width="60%">
            <Heading  width="70%"
             fontSize={22} textAlign="left">
              The Ins and Outs of Forex
Liquidity Aggregation</Heading>
            <Text  textAlign="left" width="90%" 
            fontSize={15}>Part 1. A behind the scenes look at broker operations related to liquidity management and liquidity flows in  the Forex market.</Text>
           </Box>
         </Box>
    </SimpleGrid>

    </Box>
       
       {/* footer */}
       <Box width="100%" height="300px" color="#8e90ad" bg="#252644"
       display="flex"  justifyContent="center" 
             >
    <Box width="80%"  margin="0px auto" display="flex"  
 >
       <Box width="30%"   display="flex"  justifyContent="center" 
       alignItems="start" pt="40px">
        <Input type="email" placeHolder="Enter email here" border="0px" bg="#34365a" w="190px"></Input>
        <Input type="submitl" value=">" bg="#00e4a1" color="white" w="40px"></Input>
        
         </Box>
       <Box width="40%"  
         display="flex" justifyContent="center
         " alignItems="center" flexDirection="column">
       
      <Text fontSize="12px" fontWeight="600">
      Copyright © 2023 Devexperts LLC. DevexpertsTM, DXtradeTM. All rights reserved. Devexperts LLC is a Software company that provides Software products and services. Hence, Devexperts LLC does not provide any Investment or Brokerage Services.
      </Text>
      <Text fontSize="12px" fontWeight="600" as="u">
      Privacy Policy 
    
       Terms of Use
        Cookies Settings
       </Text>

         </Box>
       <Box width="30%" display="flex" justifyContent="center"  pt="40px"> 
       <Text fontSize="12px" fontWeight="600" as="u">
       Developed by
       </Text>
         </Box>
    </Box>
    </Box>
    </>
)
}
export default Footer;