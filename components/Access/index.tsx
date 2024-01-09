"use client"
import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
 

interface AccessFormProps {
    handleSignin?: (name:string, code:string) => void;
  }

const AccessForm : FC<AccessFormProps> = ({handleSignin}) => {
  const [open, setOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [codeInput, setCodeInput] = useState("");

  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen} placeholder={undefined}>Access</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        placeholder={undefined}
      >
        <Card className="mx-auto w-full max-w-[24rem]" placeholder={undefined}>
          <CardBody className="flex flex-col gap-4" placeholder={undefined}>
            <Typography variant="h4" color="blue-gray" placeholder={undefined}>
              Access ONLY
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
              placeholder={undefined}
            >
              Answer the following questions to acess.
            </Typography>
            <Typography className="-mb-2" variant="h6" placeholder={undefined}>
              Name: 
            </Typography>
            <Input key="name-input" value={nameInput} onChange={(e) => setNameInput(e.target.value)} label="name" size="lg" placeholder={undefined} crossOrigin={undefined}/>
            <Typography className="-mb-2" variant="h6" placeholder={undefined}>
              Access Code: 
            </Typography>
            <Input key="code-input" value={codeInput} onChange={(e) => setCodeInput(e.target.value)} label="code" size="lg" placeholder={undefined} crossOrigin={undefined}/>
            {/* <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div> */}
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button variant="gradient" onClick={(e) => handleSignin && handleSignin(nameInput, codeInput)} fullWidth placeholder={undefined}>
              Access
            </Button>
            <Typography variant="small" className="cursor-pointer mt-4 flex justify-center font-bold" onClick={handleOpen} placeholder={undefined}>
              Dismiss
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default AccessForm;