import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import LoginIcons from "./icons/Login";
import FacebookIcon from "./icons/Facebook";
import { useRouter } from "next/router";

export default function LoginComponents({
  valuee,
  className,
}: {
  valuee: number;
  className: string;
} & React.ComponentPropsWithRef<"div">) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const route = useRouter();
  return (
    <>
      <Modal
        isDismissable={false}
        backdrop="blur"
        className="max-w-sm bg-primary-50"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Masuk dengan akun
              </ModalHeader>
              <ModalBody></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
