import React, { KeyboardEvent } from 'react'
import { useField } from 'react-final-form'

import { SearchInputWrapper, SearchInputError, SearchInputField } from './components'
import { FORM_FIELDS } from '../../consts'

interface IProps {
  onSubmit: () => void
}

const SearchInput: React.FC<IProps> = ({ onSubmit }) => {
  const { meta, input } = useField(FORM_FIELDS.SEARCH_QUERY)

  const { error, submitError, touched } = meta
  const errorMessage = error || submitError

  const onKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') onSubmit()
  }

  return (
    <SearchInputWrapper>
      <SearchInputField
        placeholder='Type a zip code'
        onKeyDown={onKeyDown}
        {...input}
      />
      {touched && !!errorMessage && (
        <SearchInputError>
          {errorMessage}
        </SearchInputError>
      )}
    </SearchInputWrapper>
  )
}

export default SearchInput