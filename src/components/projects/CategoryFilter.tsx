import { cn } from "@/lib/utils"

export interface FilterOption {
  value: string
  label: string
  count: number
}

interface CategoryFilterProps {
  options: FilterOption[]
  active: string
  onChange: (value: string) => void
}

export function CategoryFilter({ options, active, onChange }: CategoryFilterProps) {
  return (
    <fieldset className="m-0 min-w-0 border-0 p-0">
      <legend className="sr-only">Filtrar projetos por categoria</legend>
      <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-12">
        {options.map((option) => {
          const isActive = option.value === active
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option.value)}
              className={cn(
                "eyebrow relative cursor-pointer py-2 transition-colors duration-500 ease-editorial after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ink after:transition-transform after:duration-500 after:ease-editorial",
                isActive ? "text-ink after:scale-x-100" : "text-stone-deep after:scale-x-0 hover:text-ink"
              )}
            >
              {option.label}
              <sup className="ml-1.5 text-[0.625rem] tracking-normal tabular-nums">{option.count}</sup>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
