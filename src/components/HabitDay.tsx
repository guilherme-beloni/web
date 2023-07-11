import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from "phosphor-react";



interface HabitDayProps {
  amount: number
  completed: number
}

export function HabitDay({ completed, amount } : HabitDayProps) {
  
  const completedPercentage = Math.round((completed / amount) * 100) ;


  return (
    <Popover.Root>
      <Popover.Trigger className={clsx('w-10 h-10 bg-zinc border-2 border-zincb rounded-lg', {
        'bg-violet600 border border-violet600b': completedPercentage >= 80,
        'bg-violet700 border border-violet700b': completedPercentage >= 60 && completedPercentage < 80,
        'bg-violet800 border border-violet600': completedPercentage >= 40 && completedPercentage < 60,
        'bg-violet900 border border-violet700': completedPercentage >= 20 && completedPercentage < 40,
        'bg-violet1000 border border-violet800': completedPercentage > 0 && completedPercentage < 20,
        'bg-zinc border border-zincb': completedPercentage === 0,
        
      })}></Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc flex flex-col ">
          <span className="font-semibold text-zinc">segunda-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            03/07
          </span>
          <ProgressBar progress={completedPercentage} />

          <div className="mt-6 flex flex-col gap-3">
              <Checkbox.Root className="flex items-center gap-3 group">

                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc border-2 border-zincb group-data-[state=checked]:bg-green600 group-data-[state=checked]:border-green600 ">
                  <Checkbox.Indicator>
                    <Check size={20} className="text-white"/>
                  </Checkbox.Indicator>
                </div>
                
                <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc400">Beber 2L de água</span>
              </Checkbox.Root>
              <Checkbox.Root className="flex items-center gap-3 group">

                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc border-2 border-zincb group-data-[state=checked]:bg-green600 group-data-[state=checked]:border-green600 ">
                  <Checkbox.Indicator>
                    <Check size={20} className="text-white"/>
                  </Checkbox.Indicator>
                </div>
                
                <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc400">Beber 2L de água</span>
              </Checkbox.Root>
              <Checkbox.Root className="flex items-center gap-3 group">

                <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc border-2 border-zincb group-data-[state=checked]:bg-green600 group-data-[state=checked]:border-green600 ">
                  <Checkbox.Indicator>
                    <Check size={20} className="text-white"/>
                  </Checkbox.Indicator>
                </div>
                
                <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc400">Beber 2L de água</span>
              </Checkbox.Root>
          </div>

          <Popover.Arrow height={6} width={12} className="fill-zinc" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
