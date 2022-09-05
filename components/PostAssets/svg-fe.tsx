type FilterEffectsProps = {
  children?: React.ReactNode
}

export const FilterEffects = (props: FilterEffectsProps) => {
  return (
    <div>
      <svg>
        <filter id="fe">
          <feOffset dx="10" dy="10"></feOffset>
        </filter>
      </svg>
      <img src="/fire.webp" alt="" style={{ filter: "url(#fe)" }} />
    </div>
  )
}
