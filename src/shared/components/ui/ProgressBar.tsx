interface Props {
    value: number
    color?: string
}

export default function ProgressBar({ value, color }: Props) {
    return (
        <div className="relative w-full h-5 bg-[var(--color-muted)] rounded-full overflow-hidden">

            <div
                className="h-full rounded-full transition-all"
                style={{
                    width: `${value}%`,
                    background: color || "var(--color-primary)"
                }}
            />

            <span className="absolute inset-0 flex items-center left-3 text-xs font-medium text-white">
                {value}%
            </span>

        </div>
    )
}
