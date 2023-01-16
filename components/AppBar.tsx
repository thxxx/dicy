import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import useWindowDimensions from "../hook/useWindowDimensions";

const AppBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { width, height } = useWindowDimensions();

  console.log("ㄱ가로 길이가", width);

  return (
    <>
      <AppContainer>
        <InnerContainer>
          <div>Dice</div>
          {width > 500 ? (
            <div className="pages">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          ) : (
            <HamburgerIcon width={8} height={8} onClick={onOpen} />
          )}
        </InnerContainer>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Welcome</DrawerHeader>

            <DrawerBody>
              <LinkContainer>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact us</Link>
              </LinkContainer>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" width="100%" onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </AppContainer>
    </>
  );
};

export default React.memo(AppBar);

const AppContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  padding: 25px 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.dark};
  color: white;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .pages {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    a {
      margin-left: 40px;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding: 10px 10px;
    &:hover {
      background: ${({ theme }) => theme.grey + "aa"};
      border-radius: 6px;
    }
  }
`;
