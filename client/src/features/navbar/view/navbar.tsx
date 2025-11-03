"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Listbox,
  ListboxItem,
} from "@heroui/react";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { AlbumIcon, HomeIcon, Menu, Music } from "lucide-react";
import { APP_ROUTES } from "@/shared/lib/const";

export function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start" className="w-full flex justify-between!">
          <NavbarItem>
            <Button
              isIconOnly
              onPress={onOpen}
              variant={"light"}
              color={"primary"}
            >
              <Menu />
            </Button>
          </NavbarItem>
          <NavbarItem
            className="text-2xl font-semibold"
            as={Link}
            href={APP_ROUTES.HOME}
          >
            TravisTones
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        className="w-[380px]"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Menu</DrawerHeader>
              <DrawerBody>
                <Listbox
                  aria-label="Navigation menu"
                  variant={"flat"}
                  color={"primary"}
                >
                  <ListboxItem
                    key="home"
                    startContent={<HomeIcon size={20} />}
                    as={Link}
                    href={APP_ROUTES.HOME}
                    onPress={onClose}
                    className="px-6 py-4"
                  >
                    Home
                  </ListboxItem>
                  <ListboxItem
                    key="musics"
                    startContent={<Music size={20} />}
                    as={Link}
                    href={APP_ROUTES.MUSICS}
                    onPress={onClose}
                    className="px-6 py-4"
                  >
                    Tracks
                  </ListboxItem>
                  <ListboxItem
                    key="albums"
                    startContent={<AlbumIcon size={20} />}
                    as={Link}
                    href={APP_ROUTES.ALBUMS}
                    onPress={onClose}
                    className="px-6 py-4"
                  >
                    Albums
                  </ListboxItem>
                </Listbox>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
