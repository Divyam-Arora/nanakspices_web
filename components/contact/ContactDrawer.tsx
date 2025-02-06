"use client";

import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useWindowSize } from "@/hooks/useWindowSize";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function Contact({ children }: { children?: ReactNode }) {
  const size = useWindowSize();
  const content = (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h6 className="text-xs capitalize text-gray-600">Phone Number</h6>
        <div className="text-gray-800 font-bold">
          <a href="tel:+919876141000">
            <p>+91 9876141000</p>
          </a>
          <a href="tel:+917018709090">
            <p>+91 7018709090</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h6 className="text-xs capitalize text-gray-600">Email</h6>
        <div className="text-gray-800 font-bold">
          <a href="mailto:sunilindustries@gmail.com">
            <p>sunilindustries@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {size.width > 768 ? (
        <Dialog>
          <DialogTrigger>
            {children || <Button className="bg-[#1B303A]">Contact Us</Button>}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact</DialogTitle>
            </DialogHeader>
            {content}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer>
          <DrawerTrigger>
            {children || <Button className="bg-[#1B303A]">Contact Us</Button>}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Contact</DrawerTitle>
            </DrawerHeader>
            {content}
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}

export default Contact;
