"use client";

import { UseStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = UseStoreModal((state)=>state.onOpen);
  const isOpen=UseStoreModal((state)=>state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);
  return null;
};

export default SetupPage;
