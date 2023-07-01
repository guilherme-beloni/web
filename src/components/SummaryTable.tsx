import { generateDatesFromYearsBeginning } from "../utils/generate-dates-from-years-begining";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];


const summaryDates = generateDatesFromYearsBeginning()

const minDays = 18*7

const amout = minDays - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay ,i) => {
          return (
            <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex font-bold items-center justify-center">
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => {
          return <HabitDay key={date.toString()} />
        })}

        {amout > 0 && Array.from({ length: amout}).map((_, i) => { 
          return ( 
            <div key={i} className="w-10 h-10 bg-zinc border-2 border-zincb rounded-lg opacity-40 cursor-not-allowed"/>
          )}
         
        )}
      </div>
    </div>
    
  );
}
