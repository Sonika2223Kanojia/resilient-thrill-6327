import {
    Box,
    Button,
    Center,
    Grid,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react"
import Footer from "../component/Footer";

const Home = () => {
    return (
        <>

            <Box width="100%" height="400px" display="flex"
                background=" linear-gradient(195deg, rgba(163,162,189,0.7287289915966386) 0%, rgba(221,219,233,0.7483368347338936) 85%)"
            >
                <Box width="50%" >
                    <Image width="100%" src="https://dx.trade/wp-content/uploads/2022/06/dxtrade-fx-slider.png"></Image>
                </Box>
                <Box width="50%" textAlign="left"
                    color="white" display="flex" flexDirection="column"
                    justifyContent="center"
                >
                    <Heading fontWeight="700">DXtrade CFD</Heading>
                    <Heading fontSize="21px"
                        fontWeight="600" mt="30px" mb="30px"
                        width="350px"
                    >Platform for brokers offering FX, CFDs, spread bets
                    </Heading>
                    <Button width="20%" p="20px" backgroundColor="#01c087">Learn More</Button>
                </Box>
            </Box>

            {/* second box */}

            <Box width="100%" height="150px" display="flex" justifyContent="center">
                <Center >
                    <Text fontSize="23px" fontWeight="600">
                        DXtrade is a family of multi-asset, multi-market, and broker-agnostic trading platforms.
                    </Text>

                </Center>
            </Box>

            {/* third */}
            <Box width="100%" height="400px"
                display="flex" flexDirection="column"
                justifyContent="space-around"  >
                <Heading fontWeight='600'>Why choose DXtrade for your brokerage</Heading>
                <SimpleGrid columns={3} spacing={10} width="80%" margin="0px auto">
                    <Box height='130px' display="flex" width="100%">
                        <Box width="20%" display="flex" justifyContent="center">

                            <Image src="https://dx.trade/wp-content/uploads/2022/06/Group.svg" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" width="80%">
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >Quickly launch your business</Heading>
                            <Text paddingLeft="15px" textAlign="left" fontSize={14} fontWeight='600'>Get DXtrade up and running with integration
                                to your brokerage infrastructure just in several weeks</Text>
                        </Box>
                    </Box>
                    <Box height='130px' display="flex" width="100%">
                        <Box width="20%" display="flex" justifyContent="center">

                            <Image src="https://dx.trade/wp-content/uploads/2022/06/new-clients.svg" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" width="80%">
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                                Win new clients</Heading>
                            <Text paddingLeft="15px" textAlign="left" fontSize={14} fontWeight='600'>
                                Offer your clients a fascinating journey on their way to becoming successful traders with the cutting-edge DXtrade trading technology</Text>
                        </Box>
                    </Box>
                    <Box height='130px' display="flex" width="100%">
                        <Box width="20%" display="flex" justifyContent="center">

                            <Image src="https://dx.trade/wp-content/uploads/2022/06/Stand-out-from-the-crowd.svg" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" width="80%">
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                                Stand out from the crowd
                            </Heading>
                            <Text paddingLeft="15px" textAlign="left" fontSize={14}
                                fontWeight='600'>Offer a truly different trading platform with your unique interface and stand out from the competition</Text>
                        </Box>
                    </Box>
                    <Box height='130px' display="flex" width="100%">
                        <Box width="20%" display="flex" justifyContent="center">

                            <Image src="https://dx.trade/wp-content/uploads/2022/06/ui.svg" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" width="80%">
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                                Offer state-of-the-art UX/U</Heading>
                            <Text paddingLeft="15px" textAlign="left" fontSize={14}
                                fontWeight='600'>Highly intuitive and clean interface. Start with the Buy/Sell basic trading UI and progress to a multi-screen layout with sophisticated graphs</Text>
                        </Box>
                    </Box>
                    <Box height='130px' display="flex" width="100%">
                        <Box width="20%" display="flex" justifyContent="center">

                            <Image src="https://dx.trade/wp-content/uploads/2020/05/icon-robust.svg" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" width="80%">
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                                Proactively manage your risk
                            </Heading>
                            <Text paddingLeft="15px" textAlign="left" fontSize={14}
                                fontWeight='600'>Leverage our advanced risk management: introduce more automation, still reserving a means of manual control</Text>
                        </Box>
                    </Box>
                    <Box height='130px' display="flex" width="100%">
                        <Box width="20%" display="flex" justifyContent="center">

                            <Image src="https://dx.trade/wp-content/uploads/2020/05/icon-customization.svg" />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" width="80%">
                            <Heading textAlign="left" fontSize="18px" fontWeight='500' >
                                Satisfy needs of your traders</Heading>
                            <Text paddingLeft="15px" textAlign="left" fontSize={14}
                                fontWeight='600'>Tailor the platform and your offering to meet your clients’ trading experience with advanced platform customization</Text>
                        </Box>
                    </Box>

                </SimpleGrid>
            </Box>
            {/* fourth */}
            <Box width="100%" height="560px" display="flex" flexDirection="column" justifyContent="center"
                bg="#f3f4fa"  >
                <Heading fontWeight='600' mb="40px">Explore the range of DXtrade platforms</Heading>
                <SimpleGrid columns={3} spacing={10} width="80%" margin="0px auto">
                    <Box height='400px' display="flex" flexDirection="column" justifyContent="center" width="100%">
                        <Box display="flex" flexDirection="column"
                            justifyContent="space-around"
                            alignItems="center"
                            height="90px" width="100%">
                            <Heading textAlign="left" fontSize="20px" fontWeight='500' >
                                DXtrade CFD</Heading>
                            <Text paddingLeft="13px" textAlign="left" fontSize={14}
                                fontWeight='600'>Platform for FX, CFDs, and spread bets</Text>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" height="300px" width="100%">
                            <Image src="https://dx.trade/wp-content/uploads/2022/06/dxtrade-fx.png"></Image>
                            <Button width="40%" h="30px" fontSize="13px" color='white' backgroundColor="#01c087">Learn More</Button>

                        </Box>
                    </Box>
                    <Box height='400px' display="flex" flexDirection="column" justifyContent="center" width="100%">
                        <Box display="flex" flexDirection="column"
                            justifyContent="space-around"
                            alignItems="center"
                            height="90px" width="100%">
                            <Heading textAlign="left" fontSize="20px" fontWeight='500' >
                                DXtrade XT</Heading>
                            <Text paddingLeft="13px" textAlign="left" fontSize={14}
                                fontWeight='600'>Platform for exchange-traded instruments</Text>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" height="300px" width="100%">
                            <Image src="https://dx.trade/wp-content/uploads/2022/10/dxtrade-xt-v2.png"></Image>
                            <Button width="40%" h="30px" fontSize="13px" color='white' backgroundColor="#01c087">Learn More</Button>

                        </Box>
                    </Box>
                    <Box height='400px' display="flex" flexDirection="column" justifyContent="center" width="100%">
                        <Box display="flex" flexDirection="column"
                            justifyContent="space-around"
                            alignItems="center"
                            height="90px" width="100%">
                            <Heading textAlign="left" fontSize="20px" fontWeight='500' >
                                DXtrade Crypto</Heading>
                            <Text paddingLeft="13px" textAlign="left" fontSize={14}
                                fontWeight='600'>
                                Platform for spot and margined cryptocurrencies</Text>
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center"
                            alignItems="center" height="300px" width="100%">
                            <Image src="https://dx.trade/wp-content/uploads/2022/10/dxtrade-crypto-image-v2.png"></Image>
                            <Button width="40%" h="30px" fontSize="13px" color='white' backgroundColor="#01c087">Learn More</Button>

                        </Box>
                    </Box>



                </SimpleGrid>
            </Box>
            {/* fifth */}
            <Box width="100%" height="200px" display="flex" flexDirection="column" justifyContent="center"
                bg="#252644"  >
                <SimpleGrid columns={4} spacing={20} width="80%" margin="0px auto">
                    <Box w="100%" h="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image w="80px" src="https://dx.trade/wp-content/uploads/2020/05/icon-infinity.svg" />
                        <Text color="white" pt="10px" fontWeight="600" >
                            Unlimited trading accounts
                        </Text>
                    </Box>
                    <Box w="100%" h="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Heading h="50px" color=" #01c087" fontWeight="400"
                            fontSize="60px" >0</Heading>
                        <Text color="white" marginTop="20px" fontWeight="600" >
                            Expenses on development
                            and maintenance
                        </Text>
                    </Box>
                    <Box w="100%" h="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Heading h="50px" color=" #01c087" fontWeight="400"
                            fontSize="60px" >100%</Heading>
                        <Text color="white" marginTop="20px" fontWeight="600" >
                            Cloud-based
                            and serviced solution
                        </Text>
                    </Box>
                    <Box w="100%" h="150px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Heading h="50px" color=" #01c087" fontWeight="400"
                            fontSize="60px" >20+</Heading>
                        <Text color="white" marginTop="20px" fontWeight="600" >
                            Years building award
                            winning trading platforms
                        </Text>
                    </Box>



                </SimpleGrid>
            </Box>

            
<Footer/>
        </>
    )
}
export default Home;