import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";



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
          <Popover.Arrow height={6} width={12} className="fill-zinc" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
