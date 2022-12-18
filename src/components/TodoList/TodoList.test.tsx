import { waitFor } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import { customRender } from '~/libs/test'

import { TodoList } from './TodoList'

test('render loading text correctly', () => {
  const { getByText } = customRender(<TodoList />)
  expect(getByText('loading...')).toBeInTheDocument()
})

test('render todoList correctly', async () => {
  const { findByText } = customRender(<TodoList />)
  expect(await findByText('Todo List')).toBeInTheDocument()
})

test('add todo item correctly', async () => {
  const { user, findByRole, findByText, getByRole } = customRender(<TodoList />)
  const textbox = await findByRole('textbox')
  await user.type(textbox, 'testAddTodo')
  await user.click(getByRole('button', { name: '追加' }))
  expect(await findByText('👀 testAddTodo')).toBeInTheDocument()
})
