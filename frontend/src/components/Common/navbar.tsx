import Link from "next/link";

import {
	Box,
	Container,
	Flex,
	HStack,
	Heading,
	Highlight,
	Text,
} from "@chakra-ui/react";

import { Button } from "@/components/ui/button";

import { CiGrid2H } from "react-icons/ci";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const Navbar = () => {
	return (
		<Box maxW="sm">
			<Container maxW="sm">
				<Flex gap="3" align="center" justify="center">
					<HStack>
						<Link href={`/`}>
							<Heading size="2xl" letterSpacing="tight" textAlign="center">
								<Highlight query="65" styles={{ color: "teal.700" }}>
									MB 65
								</Highlight>
							</Heading>
						</Link>
						<Button colorPalette="teal">
							<Link href={`/photogrid`}>
								<TfiLayoutGrid3Alt />
							</Link>
						</Button>
						<Button colorPalette="teal">
							<Link href={`/photocard`}>
								<CiGrid2H />
							</Link>
						</Button>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
