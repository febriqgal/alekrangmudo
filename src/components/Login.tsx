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

export default function LoginComponents({ valuee }: { valuee: number }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const route = useRouter();
  return (
    <>
      <Button
        startContent={<LoginIcons className="h-6 fill-white" />}
        variant={valuee > 0 ? "bordered" : "shadow"}
        color={valuee > 0 ? "default" : "primary"}
        href={"/"}
        className="text-white"
        onPress={onOpen}
      >
        Login
      </Button>
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
              <ModalBody>
                <Input
                  isClearable
                  size="sm"
                  className="text-primary"
                  color="primary"
                  type="email"
                  variant="bordered"
                  label="Email"
                />
                <Input
                  size="sm"
                  className="text-primary"
                  type="password"
                  color="primary"
                  variant="bordered"
                  label="Password"
                />
                <div className="flex flex-col mb-6 -mt-2 space-y-1">
                  <Button
                    onPress={() => {
                      route.push("/lupapassword");
                    }}
                    color="primary"
                    variant="light"
                  >
                    Lupa Password?
                  </Button>
                  <Button
                    variant="bordered"
                    color="primary"
                    onPress={() => {
                      route.push("/daftar");
                    }}
                  >
                    Daftar
                  </Button>
                  <Button variant="shadow" color="primary" onPress={onClose}>
                    Masuk
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
