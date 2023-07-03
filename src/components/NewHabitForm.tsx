import { Check } from "phosphor-react";

export function NewHabitForm() {
    return (
        <form action="" className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual seu comprometimento?
            </label>

            <input type="text" id="title" placeholder="Exercicios, Dormir bem, etc..." autoFocus
            className="p-4 rounded-lg mt-3 bg-zinc400 text-white placeholder: text-zinc"
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrencia?
            </label>
            <button type="submit" className=" mt-6 flex items-center justify-center rounded-lg bg-green600 gap-3 font-semibold hover:border-violet700 hover:bg-green500" >
                <Check size={20} weight='bold'/>
                Confirmar
            </button>
        </form>
    )
}