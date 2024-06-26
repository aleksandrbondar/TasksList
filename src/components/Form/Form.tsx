import { StyledForm } from './Style';

const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <StyledForm>
        {children}
      </StyledForm>
    </div>
  )
}

export default Form