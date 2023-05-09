import {Box,  Heading, Input, SimpleGrid,Image,Text} from "@chakra-ui/react"
import Footer from "../component/Footer";
const  Technology =()=>{
    return (
        <>
         <Box width="100%" height="300px"  color="white"  textAlign="left" pt="80px" pl="40px"
          bgImage="url(https://dx.trade/wp-content/uploads/2020/04/Pic-header-technology@2x-1366x199.png)"
            >
              <Heading>Technology</Heading>
            </Box>

          <  Box width="100%" height="200px"  display="flex" justifyContent="center"   >
          <  Box width="80%" height="200px"  pt="30px"  >

              <Heading textAlign="left" fontSize="20px" fontWeight="600" width="100%">
              At Devexperts, we have been building trading platforms since 2002 and have always been at the forefront of technological advances in platform infrastructure. Our technology delivers a high performance, highly scalable, and truly reliable trading platform for all DXtrade brokers.
              </Heading>
            </Box>
            </Box>
            
            <Box width="100%" height="400px"
                display="flex" flexDirection="column"
                justifyContent="space-around"  >
             <SimpleGrid columns={2} spacing={10} width="80%" margin="0px auto">
                    
             <Box height='200px' display="flex"  flexDirection="column" justifyContent="space-evenly">
                        

                        <Image width="70px" height="70px" src="https://dx.trade/wp-content/uploads/2020/05/icon-integration.svg"
                          />
                    
                        <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                        Ease of integration</Heading>
                        <Text  textAlign="left" fontSize={14}
                            fontWeight='600'>

DXtrade offers a broad range of standard, scalable APIs. This ensures easy integration for your brokerage infrastructure. Brokers can integrate through our REST JSON-based APIs for trading, market data, and administrative tasks. Scalable push notifications are available via WebSockets. You can also use FIX APIs for LP integrations for both market data and trading.</Text>
                         
                </Box>
                    <Box height='200px' display="flex"  flexDirection="column" justifyContent="space-evenly">
                        

                        <Image width="70px" height="70px" src="https://dx.trade/wp-content/uploads/2020/05/icon-code.svg" 
                         />
                    
                        <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                        High reliability</Heading>
                        <Text  textAlign="left" fontSize={14}
                            fontWeight='600'>
                            Devexperts used industry-standard open-source technologies to build DXtrade. Our Java-based stack ensures a sophisticated high-performance run time. Additionally, our PostgreSQL database is the standard among open-source RDBMS solutions, providing superior performance and analytical capabilities</Text>
                </Box>
                    <Box height='200px' display="flex"  flexDirection="column" justifyContent="space-evenly">
                        

                        <Image width="70px" height="70px"  src="https://dx.trade/wp-content/uploads/2022/07/flash.svg"
                        />
                    
                        <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                        Maximized mobile performance</Heading>
                        <Text  textAlign="left" fontSize={14}
                            fontWeight='600'>
                            Our native mobile apps provide superior performance and promote stability during low bandwidth data exchange. All this is due to our proprietary binary protocol for market data delivery. The protocol supports switching between mobile and Wi-Fi networks without delays in market data. This ensures zero delays in platform pricing or chart performance.</Text>
                </Box>
                    <Box height='200px' display="flex"  flexDirection="column" justifyContent="space-evenly">
                        

                            <Image width="70px" height="70px" src="https://dx.trade/wp-content/uploads/2020/05/icon-cloud.svg" />
                        
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                            On-premise or cloud hosting</Heading>
                            <Text  textAlign="left" fontSize={14}
                                fontWeight='600'>
                                You can deploy DXtrade on-premise or as a cloud-based solution hosted within AWS servers. The latter option ensures a highly scalable offering within the most flexible and secure cloud computing environment available today. We protect your data within the most secure AWS infrastructure, knowing that you always own your data and our role is to ensure its security.</Text>
                             
                    </Box>

                </SimpleGrid>
            </Box>
            <Footer/>
        </>
    )
}
export default  Technology;