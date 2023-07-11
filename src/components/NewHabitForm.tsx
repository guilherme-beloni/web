import { Check } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewHabitForm() {
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([])
    


    function createNewHabit(event: FormEvent) {
        event.preventDefault();
        console.log(title, weekDays);

        
    }

    function handleToggleweekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithRemovedOne)
        } else {

            const weekDaysWithAddedOne = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }
    }


  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="Exercicios, Dormir bem, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc400 text-white placeholder: text-zinc"
        onChange={event => setTitle(event.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrencia?
      </label>

      <div className="flex flex-col mt-3 gap-2">
        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              key={weekDay}
              className="flex items-center gap-3 group "
              onCheckedChange={() => {handleToggleweekDay(index);}}
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc border-2 border-zincb group-data-[state=checked]:bg-green600 group-data-[state=checked]:border-green600 ">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="text-white leading-tight ">{weekDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className=" mt-6 flex items-center justify-center rounded-lg bg-green600 gap-3 font-semibold hover:border-violet700 hover:bg-green500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
