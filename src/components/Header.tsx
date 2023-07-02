
import logoImage from "../assets/logo.svg";
import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="logoHabits" />

      <Dialog.Root>


        <Dialog.Trigger
          type="button"
          className=" border-zinc font-semibold rounded-lg px-6 py-4 flex items-center gap-4 hover:border-violet700"
        >
          <Plus size={20} className="text-violet-500" />
          Novo Habito
        </Dialog.Trigger>


        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-zincb/80 fixed inset-0" />
          <Dialog.Content className="border border-violet700 absolute p-10 bg-zincb rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translete-y-1/2">
            <Dialog.Close className=" absolute right-6 top-6 text-zinc hover:border-violet700">
              <X size={24} aria-label='Fechar'/>
            </Dialog.Close>
            Conteudo
          </Dialog.Content>
        </Dialog.Portal>


      </Dialog.Root> 
    </div>
  );
}
