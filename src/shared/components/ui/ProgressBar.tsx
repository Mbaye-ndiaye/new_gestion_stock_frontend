interface Props {
    value: number
    color?: string
}

export default function ProgressBar({ value, color }: Props) {
    return (
        <div className="relative w-full h-6 overflow-hidden">

            <div
                className="h-full rounded-r-full transition-all"
                style={{
                    width: `${value}%`,
                    background: color || "var(--color-primary)"
                }}
            />

        </div>
    )
}
