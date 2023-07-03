import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc border-2 border-zincb rounded-lg"></Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc flex flex-col ">
          <span className="font-semibold text-zinc">segunda-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            03/07
          </span>
          <ProgressBar progress={40} />
          <Popover.Arrow height={6} width={12} className="fill-zinc" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
