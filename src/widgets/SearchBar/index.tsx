import React from 'react'
import { Form } from 'react-final-form'

import { SearchContainer, SearchContent, SubmitSearch } from './components'
import { ISeachBarValues } from './types'
import { SearchInput } from './widgets'
import { validator } from './utils'

interface IProps {
  onSubmit: (zipCode: string) => void
}

const SearchBar: React.FC<IProps> = ({ onSubmit }) => {
  const onFormSubmit = ({ searchQuery }: ISeachBarValues) => {
    onSubmit(searchQuery)
  }

  return (
    <Form
      onSubmit={onFormSubmit}
      validate={validator}
      render={({ handleSubmit }) => (
        <SearchContainer>
          <SearchContent>
            <SearchInput onSubmit={handleSubmit} />
            <SubmitSearch type='submit' onClick={handleSubmit}>
              Check Weather
            </SubmitSearch>
          </SearchContent>
        </SearchContainer>
      )}
    />
  )
}

export default SearchBar