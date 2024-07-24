import React from "react";
import {useForm} from "react-hook-form";
import {InputRHF} from "../molecules/InputRHF";
import {TextAreaRHF} from "../molecules/TextAreaRHF";
import {Card} from "../atoms/Card";
import { Button } from "../atoms/Button";

function GetinTouch() {
  const methods = useForm();
  return (
    <main className="w-[100svw] h-svh ">
      <div className="container md:max-w-[90%] h-full content-center mx-auto ">
        <div className="grid grid-cols-2 w-full">
          <div className="grid place-items-center">
            <div>
              <h1 className="text-[68px] font-bold">Entre em Contato</h1>
              <p className="text-[20px]">
                Sinta-se a vontade para enviar mensagens se houver mais questões
                ou só queira informações
              </p>
              <p className="text-[18px] mt-8">
                Email: alexandremarcelinon5@gmail.com
              </p>
            </div>
          </div>
          <div>
            <Card className="grid bg-slate-100 grid-cols-2 p-8 w-full gap-4">
              
              <div>
                <InputRHF
                  title="Nome"
                  name="nome"
                  required
                  placeholder="Informe seu nome"
                  control={methods.control}
                ></InputRHF>
              </div>
              <div>
                <InputRHF
                  title="Email"
                  name="email"
                  placeholder="Email"
                  control={methods.control}
                ></InputRHF>
              </div>
              <div className="col-start-1 col-end-3">
                <TextAreaRHF
                  title="Messagem"
                  name="messagem"
                  rows={8}
                  cols={8}
                  placeholder="Digite a sua messagem"
                  control={methods.control}
                ></TextAreaRHF>
              </div>
              <div className="flex gap-8">
                <Button>Enviar</Button>
                <Button>Limpar</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GetinTouch;
