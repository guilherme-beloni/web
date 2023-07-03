interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div
      className="h-3 rounded-xl bg-zinc400 w-full mt-4"
      role="progressbar"
      aria-label="Progresso de hábitos completados nesse dia"
      aria-valuenow={props.progress}
    >
      <div
        className="h-3 rounded-xl bg-violet700"
        style={{
            width: `${props.progress}%`
          }}
      ></div>
    </div>
  );
}
