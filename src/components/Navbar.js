import { Flex, Button, IconButton} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
   const[display, changeDisplay]=useState('none')

    return (
        <Flex justify='space-evenly'>
            <Flex ml="5vw" mt="1vw" mb='2vw'>
                <p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "24px", lineHeight: "36px", color: "#FFFFFF" }}>Watch</p><p style={{ fontFamily: "Oswald", fontWeight: "700", fontSize: "24px", lineHeight: "36px", color: "#DA3714" }}>Flix</p>
            </Flex>

            <Flex align="center" right="1vw" top="1vw" >
                <Flex display={['none', 'none', 'flex','flex']}>
                    <Link to="/"><Button
                        color="white"
                        background="none"
                        // marginRight="57px"
                        // marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Movies
                    </Button>
                    </Link>
                    <Link to="/tv"><Button
                        color="white"
                        background="none"
                        // marginRight="57px"
                        // marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        TV Series
                    </Button>
                    </Link>
                    <Link to="/documentaries"><Button
                        color="white"
                        background="none"
                        // marginRight="57px"
                        // marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Documentaries
                    </Button>
                    </Link>
                    <Link to="/categories"><Button
                        color="white"
                        background="none"
                        // marginRight="57px"
                        // marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Categories
                    </Button>
                    </Link>
                </Flex>
                <IconButton size='lg' mr={2} icon={<HamburgerIcon color="white" />} bg="transparent" display={['flex', 'flex', 'none', 'none']} onClick={()=>changeDisplay('flex')} justify="flex-end" />
            </Flex>

            <Flex  align="center" right="1vw" top="1vw">
            <Button
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"

                    >
                        Search
                    </Button>
            <Button
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"

                    >
                        Noti
                    </Button>
            <Button
                        color="white"
                        background="none"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="16px"

                    >
                        Sign Up
                    </Button>
            </Flex>

            

            <Flex position="fixed" width="100vw" left="0" top="0" right="0" bgColor="black" zIndex={20} h="100vh"   overflowY="auto" flexDir="column" display={display}>

                <Flex justify="flex-end">

                    <IconButton bg="transparent" mt={2} mr={2} size="lg" icon={<CloseIcon color="white"/>} onClick={()=>changeDisplay('none')}/>
                </Flex>
            <Flex flexDir="column" align="center">

            <Link to="/"><Button
                        color="white"
                        background="none"
                        marginRight="57px"
                        marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Movies
                    </Button>
                    </Link>
                    <Link to="/tv"><Button
                        color="white"
                        background="none"
                        marginRight="57px"
                        marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        TV Series
                    </Button>
                    </Link>
                    <Link to="/documentaries"><Button
                        color="white"
                        background="none"
                        marginRight="57px"
                        marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Documentaries
                    </Button>
                    </Link>
                    <Link to="/categories"><Button
                        color="white"
                        background="none"
                        marginRight="57px"
                        marginLeft="57px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Categories
                    </Button>
                    </Link>
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
//                         <button style={{ color: "white", background: "none", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>Movies</button>
//                     </Link>
//                     <Link to='/'>
//                         <button style={{ color: "white", background: "none", marginRight: "57px", marginLeft: "57px", fontFamily: "Poppins", fontWeight: "400", fontSize: "16px" }}>TV Series</button>
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
