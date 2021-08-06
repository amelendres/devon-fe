import React from 'react';

type SearchBarProps = {
  query: string
  onChange: (slug: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({query, onChange}) => {

  const state = 'show' //showed|opened|read
  return (
        <div className={`input-symbol ${state}`} >
            <input
              type="text"
              name="search"
              value={query}
              // ref={emailRef}
              placeholder={"Buscar devocionales"}
              onChange={(e) => onChange(e.target.value)}
            />
            <span
              className="icon-search"
              title="Buscar"
            />
        </div>
    )
}