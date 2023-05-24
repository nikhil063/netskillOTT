import { Flex, Button, IconButton, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [display, changeDisplay] = useState('none')

    return (
        <Flex justify='space-between' align='center' >

            <Flex pl="5vw" pt="1vw" >
                <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "4vw", color: "#FFFFFF" }}>Watch</p><p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "4vw", color: "#DA3714" }}>Flix</p>
            </Flex>


            <Flex pt="1vw" justifyContent='center' >
                <Link to="/"><Button className="main-button"

                    color="white"
                    background="none"
                    marginRight="2vw"
                    marginLeft="2vw"
                    p='0'
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize="1.5vw"
                    variant="unstyled"
                    borderRadius="0"
                    height="4vw"

                >
                    Movies
                </Button>
                </Link>
                <Link to="/tv"><Button className="main-button"
                    color="white"
                    background="none"
                    marginRight="2vw"
                    marginLeft="2vw"
                    p='0'
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize="1.5vw"
                    variant="unstyled"
                    borderRadius="0"
                    height="4vw"
                >
                    TV Series
                </Button>
                </Link>
                <Link to="/documentaries"><Button className="main-button"
                    color="white"
                    background="none"
                    marginRight="2vw"
                    marginLeft="2vw"
                    p='0'
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize="1.5vw"
                    variant="unstyled"
                    borderRadius="0"
                    height="4vw"
                >
                    Documentaries
                </Button>
                </Link>
                <Link to="/categories"><Button className="main-button"
                    color="white"
                    background="none"
                    marginRight="2vw"
                    marginLeft="2vw"
                    p='0'
                    fontFamily="Poppins"
                    fontWeight="400"
                    fontSize="1.5vw"
                    variant="unstyled"
                    borderRadius="0"
                    height="4vw"
                >
                    Categories
                </Button>
                </Link>

            </Flex>

            
            <Flex >
                <Button
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="1.5vw"
                        align='center'
                        p='0'
                        variant="unstyled"
                        borderRadius="0"
                        height="4vw"
                    >
                        <img src="/Images/magicon.png" alt="" style={{ color: "white", width: "2vw" }} p='0' />
                    </Button>
            </Flex>



            <Flex pt="1vw" justifyContent='flex-end' p='0' w="4vw">
                

                <IconButton variant="unstyled" icon={<HamburgerIcon color="white" width="2vw" />} bg="transparent" display={['flex', 'flex', 'none', 'none']} onClick={() => changeDisplay('flex')} justify="flex-end" />


                <Flex display={['none', 'none', 'flex', 'flex']}>

                    <Button

                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="400"
                        align='center'
                        p='0'
                        variant="unstyled"
                        borderRadius="0"
                        height="4vw"
                    >
                        <img src="/Images/noticon.png" alt="" style={{ color: "white", width: "2vw" }} />
                    </Button>

                    <Button className="main-button"
                        variant="unstyled"
                        borderRadius="0"
                        height="4vw"
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1.5vw"
                        align='center'
                        p='0'
                        mr='2vw'
                    >
                        Sign Up
                    </Button>
                </Flex>
            </Flex>







            <Flex position="fixed" width="100%" left="0" top="0" right="0" bgColor="black" zIndex="20" h="100%" overflowY="auto" flexDir="column" display={display} >

                <Flex justify="flex-end">
                    <IconButton variant="unstyled" bg="transparent"  icon={<CloseIcon  color="white" width="2vw"  bg="transparent" />} onClick={() => changeDisplay('none')} />
                </Flex>

                <Flex flexDir="column">
                    <Button 
                        variant="unstyled"
                        borderRadius="0"
                        height="4vw"
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="1.5vw"
                    >
                        <span style={{display:"flex", justifyContent:"center"}}>Notifications <img src="/Images/noticon.png" alt="" style={{ color: "white", width: "2vw", marginLeft:"1vw" }} /></span>
                    </Button>

                    <Button 
                        variant="unstyled"
                        borderRadius="0"
                        height="4vw"
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1.5vw"
                    >
                        Sign Up
                    </Button>

                </Flex>
            </Flex>
        </Flex>
    );
}

export default Navbar;





// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingRight: "49px", paddingLeft: "49px", backgroundColor: "#111111", height: "78px" }}>

//             <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "0px", width: "1440px", color: "white" }}>
//                 <div style={{ paddingTop: "21px" }} >
//                     <div style={{ display: "flex" }}>
//                         <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "24px", lineHeight: "36px", color: "#FFFFFF" }}>Watch</p><p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "24px", lineHeight: "36px", color: "#DA3714" }}>Flix</p>
//                     </div>

//                 </div>



//                 <div style={{ paddingTop: "25px" }}>
//                     <Link to='/'>
//                         <button 

//                     </Link>
//                     <Link to='/'>
{/* <button
                    variant="unstyled" style={{ color: "white", background: "none", marginRight: "2vw", marginLeft: "57px", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>TV Series</button> */}
//                         </Link>
//                     <button style={{ color: "white", background: "none", marginRight: "57px", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>Documentaries</button>
//                    <Link to='/categories'>
//                     <button style={{ color: "white", background: "none", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>Categories</button>
//                     </Link>
//                 </div>




//                 <div style={{ paddingTop: "25px",  display: "flex", justifyContent:"space-between", width:"200px"  }}>
//                     <div style={{}}>
//                         <button style={{background: "none" }}><img src='/Images/magicon.png' alt='search' />
//                         </button>
//                         <button style={{ background: "none", marginLeft: "44px" }}><img src='/Images/noticon.png' alt='notifications' />
//                         </button>

//                     </div>
//                     <button style={{ color: "white", background: "none", fontFamily: "Poppins", fontWeight: "700", fontSize: "16px", lineHeight: "24px", marginBottom:"20px"}}>Sign up</button>
//                 </div>


//             </div>
//         </nav>
//     )
// }

// export default Navbar
