import { ChangeEventHandler, createContext } from "react";

export interface EmployeeForm {
  userName: string,
  fullName: string,
  description: string,
  position: number,
  role: number,
}

export const employeeInitialState: EmployeeForm = {
  userName: '',
  fullName: '',
  description: '',
  position: 1,
  role: 1,
}

export interface EmployeeContextData {
  handleChange: ChangeEventHandler<HTMLInputElement> | null,
  data: EmployeeForm,
}

const contextData: EmployeeContextData = {
  data: employeeInitialState,
  handleChange: null,
}

export const EmployeeContext = createContext<EmployeeContextData>(contextData);